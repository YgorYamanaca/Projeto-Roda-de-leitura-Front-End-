import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import UserComponent from './components/UserComponent';
import AllEvents from './components/AllEvents'
import Calender from './components/Calender';
import Forum from './components/Forum'
import Chat from './components/Chat'
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
          <Component {...props} />
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

                    <Home>
                        <Route exact path="/user" component={UserComponent}/>
                        <Route exact path="/calender" component={Calender}/>
                        <Route exact path="/events" component={AllEvents}/>
                        <Route exact path="/forum" component={Forum}/>
                        <Route exact path="/chat" component={Chat}/>
                    </Home>
                    <Redirect from="*" to="/" />
                </Switch>
            </BrowserRouter>
          </PersistGate>
          </Provider>
    );
}
