// 기본 값 인덱스, 모든 탭 데이터를 인자로 받는다.
const useTabs = (initialTab, allTabs) => {
  // 입력 값이 유효하지 않는 경우 함수 리턴시킴
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  // 현재 탭 배열의 인덱스
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  // 인덱스에 해당하는 item과 변경함수를 리턴
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

// 사용
function App() {
  const content = [
    {
      tab: "탭 1",
      content: "내용 1",
    },
    {
      tab: "탭 2",
      content: "내용 2",
    },
  ];

  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
