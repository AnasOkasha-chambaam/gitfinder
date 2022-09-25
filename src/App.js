import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar";
import Users from "./components/layout/users/users";
import Form from "./components/layout/form/form";
import ClearBtn from "./components/layout/clrBtn/clrBtn";
import Alert from "./components/layout/alert/alert";
import About from "./components/layout/about/about";
import Footer from "./components/layout/footer/footer";
class App extends React.Component {
  state = {
    loading: false,
    users: [],
    alertStyle: {
      aniamtionName: "a",
    },
  };

  componentDidMount() {
    this.setState({ loading: true });
    const xml = new XMLHttpRequest();
    xml.open(
      "GET",
      `https://api.github.com/users?client_id=${process.env.REACT_APP_MY_ID}&client_secret=${process.env.REACT_APP_MY_secret}`,
      true
    );
    xml.onload = () => {
      if (xml.status === 200) {
        let apiUsers = [];
        apiUsers = JSON.parse(xml.responseText);
        this.setState({ loading: false, users: apiUsers });
      }
    };
    xml.send();
  }

  searchThem(x) {
    this.setState({ loading: true });
    const xml = new XMLHttpRequest();
    xml.open(
      "GET",
      `https://api.github.com/search/users?q=${x}&client_id=${process.env.REACT_APP_MY_ID}&client_secret=${process.env.REACT_APP_MY_secret}`,
      true
    );
    xml.onload = () => {
      if (xml.status === 200) {
        let apiUsers = [];
        apiUsers = JSON.parse(xml.responseText);
        this.setState({
          loading: false,
          users: apiUsers.items,
          alertStyle: { animationName: "a" },
        });
        // console.log(this.state.users)
      } else {
        // this.setState({alertStyle: {animationName: 'a'}})
        this.setState({
          alertStyle: { animationName: "alert-animation" },
          loading: false,
        });
        // setTimeout(() => {alert})
      }
    };
    xml.send();
  }
  clr() {
    this.setState({ loading: false, users: [] });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github-square" />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <div className="container">
                    <Alert alertStyle={this.state.alertStyle} />
                    <Form searchUsers={this.searchThem.bind(this)} />
                    <ClearBtn
                      clrusrs={this.clr.bind(this)}
                      usrslnth={this.state.users}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                    <h1 className="the-header">
                      Welcome, this is my first React app....
                    </h1>
                    <p className="para">Hello from there.</p>
                    <p>Hello</p>
                  </div>
                )}
              />
              <Route path="/About" component={About} />
            </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

/*

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React...
        </a>
      </header>
      
*/
