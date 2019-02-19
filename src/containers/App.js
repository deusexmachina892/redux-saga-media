import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../common/Header';
import HomePage from '../components/HomePage';
import Routes from '../routes/routes';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <BrowserRouter>
            <div>
                 <Header />
                {Routes}
            </div> 
        </BrowserRouter>
      </div>
    );
  }
}
export default App;