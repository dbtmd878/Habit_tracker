import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    // const localHabit = [...this.state.habits];
    // Spread Syntax:
    // habits의 배열과 똑같이 새로운 것을 만듬
    // const localHabit = [...this.state.habits];
    // const index = localHabit.indexOf(habit);
    // localHabit[index].count++;

    // 기존의 state.habits을 빙글빙글 돌면서(map) 새로운 habit을 만드는데
    // 아이디가 똑같으면 새로운 habit에서 오브젝트를 만드는데
    // 대신에 counst만 1을 증가한다
    // 아이디가 다르면 return
    const localHabit = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });

    this.setState({ habits: localHabit });
  };

  handleDecrement = (habit) => {
    // const localHabit = [...this.state.habits];
    // const index = localHabit.indexOf(habit);
    // const localCount = localHabit[index].count - 1;
    // localHabit[index].count = localCount < 1 ? 0 : localCount;
    const localHabit = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const localCount = habit.count - 1;
        return { ...habit, count: habit.count < 1 ? 0 : localCount };
      }
      return item;
    });
    this.setState({ habits: localHabit });
  };

  handleDelete = (habit) => {
    // 선택하지 않은 요소들을 골라 새로운 배열을 만든다.
    const localHabits = this.state.habits.filter(
      (item) => item.id !== habit.id
    );
    this.setState({ habits: localHabits });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits: habits });
  };

  handleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });
    const localHabit = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits: localHabit });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
