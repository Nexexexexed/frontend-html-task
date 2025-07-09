import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import ButtonTheme from "./components/ButtonTheme/ButtonTheme";

library.add(fas);

export default class App extends React.Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    this.setState((prev) => ({
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  render() {
    return (
      <div className={`app theme-${this.state.theme}`}>
        <Sidebar color={this.state.theme} />
        <ButtonTheme toggleTheme={this.toggleTheme} theme={this.state.theme} />
      </div>
    );
  }
}
