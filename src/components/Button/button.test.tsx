import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Buttton, { ButtonProps, ButtonType, ButtonSize } from './button';

const defaultProps = {
  onClick: jest.fn()
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'class'
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
};

describe('test button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Buttton {...defaultProps}>Nice</Buttton>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Buttton {...testProps}>Nice</Buttton>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg class');
  });

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Buttton btnType={ButtonType.Link} href="http://baidu.com">
        Link
      </Buttton>
    );
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });

  it('sould render disabled button when disabled set to true', () => {
    const wrapper = render(<Buttton {...disabledProps}>Nice</Buttton>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
