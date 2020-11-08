import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import UserComponent from './components/UserComponent';
import AllEvents from './components/AllEvents';
import Calender from './components/Calender';
import Forum from './components/Forum';
import Chat from './components/Chat';
import Help from './components/HelpComponent';
import { isAuthenticated } from "./services/auth";
import  {Provider}  from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Home><Component {...props} /></Home>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

export default function Routes(){
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>

                    <Route exact path="/user" component={UserComponent}/>
                    <Route exact path="/calender" component={Calender}/>
                    <Route exact path="/events" component={AllEvents}/>
                    <Route exact path="/forum" component={Forum}/>
                    <Route exact path="/chat" component={Chat}/>
                    <Route exact path="/help" component={Help}/>
                    <Redirect from="*" to="/sigup" />
                </Switch>
            </BrowserRouter>
          </PersistGate>
          </Provider>
    );
}
