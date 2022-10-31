import {
  useState
} from 'react'
import './App.css';

import ColorChanger from './ColorChanger';

function App() {
  const [color, setColor] = useState('#f5f6f7');

  const changeClr = () => {
    let clrs = [
      '#2F2F2F',
      '#DC7F9B',
      '#F7A1C4',
      '#E0B7B7',
      '#94BFA7',
      '#412234',
      '#B49FCC'
    ];
    let randomClr = clrs[Math.floor(Math.random() * clrs.length)];
    console.log(randomClr);
    setColor(randomClr);
  }

  return (
    <div className="App" >
      <ColorChanger
        color={color}
        changeClr={changeClr}
      />
    </div>
  );
};

export default App;