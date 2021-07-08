import React, { memo } from "react";

// function HabitAddForm(props) { }
// 위처럼 작성하여도 괜찮고, 아래처럼 rci를 하여도 괜찮다.
const HabitAddForm = memo((props) => {
  // Dom 요소에 접근하지 않고 필요할 때 createRef() 정의한 다음 해당하는 리엑트 컴포넌트에 연결하면 된다.
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (e) => {
    // 페이지가 리프레시가 되거나 다른페이지로 가는 것을 예상하고 리프레시가 발생
    // preventDefault() 브라우저의 기본 기능을 취소시킴
    e.preventDefault();
    // console.log(this.inputRef.current.value)
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = '';
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
