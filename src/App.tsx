import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button size={ButtonSize.Large}>Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        Baidu Link
      </Button>
    </div>
  );
}

export default App;
