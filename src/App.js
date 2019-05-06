import React, { Component } from 'react';
import Header from './components/Header';
import '../src/assets/css/App.css';
import Menu from './components/Menu';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Creadits from './components/pages/Creadits';
import BookNow from './components/pages/BookNow';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Menu></Menu>
          <Header></Header>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route path="/credits" component={Creadits}></Route>
            <Route path="/booknow" component={BookNow}></Route>
            <Route component={() => <h1 style={{ textAlign: "center", height: "500px", marginTop: "250px" }}>404 Page not found. <p>
              <Link style={{ color: "lightgreen" }} to="/">click here</Link></p></h1>} />
          </Switch>
          <Footer></Footer>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
