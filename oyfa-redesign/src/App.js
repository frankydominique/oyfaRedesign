import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import 'bootstrap/js/dist/collapse';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/navbar';
//import BAndC from './pages/BAndC';
//import Donate from './pages/Donate';
import Resources from './pages/Resources';
import Footer from './components/footer';
// import GuardedRoute from './components/GuardedRoute';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: true,
    }; 
  }

  /* 
  componentDidMount() {
    this.auth.onAuthStateChanged((user) => {
      this.setState({ user: user, loading: false });
    });
  } */ 

  render() {
    // const { user, loading } = this.state;

    return (
      <BrowserRouter>

        <Navbar/>
            <div>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              {/* <Route path='/bandc' component={BAndC} />
              <Route path='/donate' component={Donate} /> */}
              <Route path='/resources' component={Resources} />
            </div>

        <Footer/>

      </BrowserRouter>
      
    );
  }
}

export default App;
