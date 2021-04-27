import React, { Component } from "react";
import TodoList from "./components/TodoList";
import ThemeSwitcher from "./components/ThemeSwitcher";



class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
        <ThemeSwitcher />
      </div>
    )
  }
}

export default App;
