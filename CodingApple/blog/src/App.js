
import { useState } from 'react';
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);

  return (
    // JSX: js파일에서 html 대신 쓰는 것
    <div className="App">
      <div className="nav">
        <h4>Yeeeh's Blog</h4>
      </div>
      <div className="list">
        <h4>{ title[0] }</h4>
        <p>2022.08.29 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2022.08.29 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2022.08.29 발행</p>
      </div>
    </div>
  );
}

export default App;
