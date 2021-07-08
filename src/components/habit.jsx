import React, { PureComponent } from "react";

class Habit extends PureComponent {
  // 컴포넌트가 UI상에 등록이 되었을 때,
  // 사용자에게 보여질 때 호출이 된다
  componentDidMount() {
    // console.log(`habit: ${this.props.habit.name} mounter`);
  }
  // 지우기 전에 호출이 된다.
  componentWillUnmount() {
    // console.log(`habit: ${this.props.habit.name} will mounter`);
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
