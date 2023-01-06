/* eslint-disable */

import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [likeCnt, setLikeCnt] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [currentTitle, setCurrentTitle] = useState(0);
  let [inputValue, setInputValue] = useState("");

  function clickBtn() {
    let copy = [...title];
    copy[0] = "여자코트 추천";
    setTitle(copy);
  }

  function addPost() {
    let copy = [...title];
    copy.push(inputValue);
    setTitle(copy);
  }

  function deletePost(props) {
    let copy = [...title];
    copy.splice(props.i, 1);
    //splice(삭제,추가할 인덱스. 삭제할 원소 개수, 추가할 원소)
    setTitle(copy);
  }

  document.onload = function () {
    console.log(document.getElementById("btn"));
    console.log("hi");
  };

  return (
    // JSX: js파일에서 html 대신 쓰는 것
    <div className="App">
      <div className="nav">
        <h4>Yeeeh's Blog</h4>
      </div>
      <button id="btn" onClick={clickBtn}>
        글수정
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        가나다순정렬
      </button>

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

      {title.map(function (data, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setCurrentTitle(i);
              }}
            >
              {data}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...likeCnt];
                  copy[i]++;
                  setLikeCnt(copy);
                }}
              >
                👍🏻
              </span>{" "}
              {likeCnt[i]}
              <span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deletePost(i);
                  }}
                >
                  글삭제
                </button>
              </span>
            </h4>
            <p>2022.08.29 발행</p>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value); // state 변경함수는 늦게 처리됨 (비동기)
        }}
      ></input>
      <button
        onClick={() => {
          addPost();
        }}
      >
        글추가
      </button>
      {modal == true ? (
        <Modal index={currentTitle} title={title} modify={clickBtn} />
      ) : null}
    </div>
  );
}

// component: 이름은 대문자로 시작
// 컴포넌트 사용이 좋을 때
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들
// 단점: state를 가져다 쓸 때, 문제가 있다. (다른 함수에서 선언한 state를 사용할 수 없음)

// 부모 -> 자식 state 넘겨주기 : props 사용
// <자식태그 props이름 = {state 이름}>
// 자식 태그에서 파라미터.props이름 으로 사용

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
