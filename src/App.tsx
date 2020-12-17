import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button
        onClick={(e) => {
          e.preventDefault();
          alert(123);
        }}
      >
        Button
      </Button>
      <Button size={ButtonSize.Large}>Large Button</Button>
      <Button btnType={ButtonType.Primary}>Button</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>
        Small Button
      </Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        Baidu Link
      </Button>
      <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com">
        Disabled Link
      </Button>
    </div>
  );
}

export default App;
