import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './pages/main/main';
import Footer from './components/footer/footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './pages/about/about';
import CustomNavbar from './components/navbar/navbar';
import GetStarted from './pages/getStarted/getStarted';
import ContactPopover from './components/popover/popover';

function HomePage(props) {
  const {
    OurProcessRef
  } = props;
  return(
      <Main
        {...props}
        OurProcessRef={OurProcessRef}
      />
  )
}

function App(props) {
  const OurProcessRef = useRef(null);
  return (
    <>
      <CustomNavbar 
          {...props}
          OurProcessRef={OurProcessRef} 
        />
      <div className="App">
          <Switch>
            <Route exact path={'/'}><Redirect to={'/home'}/></Route>
            <Route path={'/home'} render={(props) => <HomePage OurProcessRef={OurProcessRef} {...props}/>}/>
            <Route path={'/get-started'} render={(props) => <GetStarted {...props} />}/>
            <Route path={'/about-us'} render={(props) => <About {...props} />}/>
            <Redirect to={'/home'}/>
          </Switch>
        <Footer/>
        <ContactPopover/>
      </div>
    </>
  );
}

export default App;
