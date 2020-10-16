import React, { Suspense, useRef } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/footer/footer';
import CustomNavbar from './components/navbar/navbar';
import ContactPopover from './components/popover/popover';
import SplashScreen from './components/splashPage/splashPage';

const HomePage = React.lazy(() => import('./pages/main/main'));
const GetStarted = React.lazy(() => import('./pages/getStarted/getStarted'));
const About = React.lazy(() => import('./pages/about/about'));

function App(props) {
  const OurProcessRef = useRef(null);
  return (
    <>
      <CustomNavbar 
          {...props}
          OurProcessRef={OurProcessRef} 
        />
      <div className="App">
        <Suspense fallback={<SplashScreen/>}>
          <Switch>
            <Route exact path={'/'}><Redirect to={'/home'}/></Route>
            <Route path={'/home'} render={(props) => <HomePage OurProcessRef={OurProcessRef} {...props}/>}/>
            <Route path={'/get-started'} render={(props) => <GetStarted {...props} />}/>
            <Route path={'/about-us'} render={(props) => <About {...props} />}/>
            <Redirect to={'/home'}/>
          </Switch>
          <Footer/>
          <ContactPopover/>
        </Suspense>
      </div>
    </>
  );
}

export default App;
