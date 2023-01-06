// 1. useInput
const useInput = (initialValue, validator) => {
  // 초기 값으로 갱신
  const [value, setValue] = useState(initialValue);

  // 입력 값을 변경하기 전 유효성 검사를 실시한다.
  const onChange = (event) => {
    // const value = event.target.value 를 의미
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    // validator 함수라면, 결과 값 갱신
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    // 유효성 검사
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Yewon", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      {/* 각 props로 할당하거나 위와 같이 ... 이용 가능
					<input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
    </div>
  );
}
