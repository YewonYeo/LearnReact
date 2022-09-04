/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [likeCnt, setLikeCnt] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);


  function clickLike(i) { 
    likeCnt[i]++;
    setLikeCnt(likeCnt);
  };

  function clickBtn() {
    let copy = [...title];
    copy[0] = '여자코트 추천';
    setTitle(copy);
  }

  return (
    // JSX: js파일에서 html 대신 쓰는 것
    <div className="App">
      <div className="nav">
        <h4>Yeeeh's Blog</h4>
      </div>
      <button onClick={clickBtn}>글수정</button>
      <button onClick={() => { 
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순정렬</button>

      {/* <div className="list">
        <h4>{title[0]} <span onClick={ clickLike }>👍🏻</span> { likeCnt} </h4>
        <p>2022.08.29 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] } <span>👍🏻</span> { likeCnt }</h4>
        <p>2022.08.29 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{ title[2] } <span>👍🏻</span> { likeCnt }</h4>
        <p>2022.08.29 발행</p>
      </div> */}

      {
        modal == true ? <Modal/> : null
      }

      {
        title.map(function (a, i) { 
          return (
            <div className="list" key={ i }>
              <h4>{a} <span onClick={() => {
                let copy = [...likeCnt]
                copy[i]++
                setLikeCnt(copy);
              } }>👍🏻</span> { likeCnt[i] } </h4>
               <p>2022.08.29 발행</p>
            </div>
          )
        })
      }

    </div>
  );
}

// component: 이름은 대문자로 시작
// 컴포넌트 사용이 좋을 때
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들
// 단점: state를 가져다 쓸 때, 문제가 있다. (다른 함수에서 선언한 state를 사용할 수 없음)

function Modal() { 
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
