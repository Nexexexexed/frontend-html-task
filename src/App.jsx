import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Sidebar, ButtonTheme } from "./components/index";

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
