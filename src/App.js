import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AllServices from './components/AllServices/AllServices';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Toaster />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={AllServices} />
        <Route path='/details/:id' component={ServiceDetails} />
        <Route path='/faq' component={FAQ} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
