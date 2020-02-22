import React, { Component } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import ListView from "./components/View/ListView";
import GridView from "./components/View/GridView";
import MapView from "./components/MapView/MapView";
import SingleView from "./components/SingleView/SingleView";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import BlogsSingle from "./components/Blogs/BlogsSingle";
import RealEstateList from "./components/View/RealEstate/List/RealEstate";
import RealEstateGrid from "./components/View/RealEstate/Grid/RealEstateGrid";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/list-view" component={ListView} />
          <Route exact path="/grid-view" component={GridView} />
          <Route exact path="/map-view" component={MapView} />
          <Route exact path="/single-view" component={SingleView} />
          <Route exact path="/real-estate/list" component={RealEstateList} />
          <Route exact path="/real-estate/grid" component={RealEstateGrid} />

          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs-single" component={BlogsSingle} />
        </Switch>
      </Router>
    );
  }
}
export default App;
