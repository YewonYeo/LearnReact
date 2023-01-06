function App() {
  const potato = useRef(); // input 객체를 나타낸다.
  setTimeout(() => potato.current.focus(), 5000);

  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
}

/* 
References: 컴포넌트의 어떤 부분을 선택할 수 있는 방법
=> document.getElementById()와 같다.  
*/
