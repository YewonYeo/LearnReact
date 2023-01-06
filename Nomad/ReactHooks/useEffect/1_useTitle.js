// html문서의 제목을 바꿔주는 훅

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle; // 제목을 업데이트 할 수 있도록 setTitle을 리턴
};

function App() {
  const titleUpdater = useTitle("Loading...");

  // 활용: 5초 후에 Lodading...에서 새로운 제목으로 바뀐다.
  setTimeOut(() => titleUpdater("새로운 제목"), 5000);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

/*
1. titleUpdater는 useTile에 의해 setTitle과 같다.
  => setTitle("Loading...")이 실행되어 title이 바뀐다.
2. useTitle에 있는 useEffect에 의해 updateTitle이 호출된다. (title이 바뀌어서)
3. updateTitle에 의해 html문서 제목이 title로 바뀐다.

활용
setTimeOut을 이용하여 로딩 후 X초 뒤 새로운 제목으로 바뀔 수 있도록 한다.
*/
