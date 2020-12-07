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
import AnalyticsComponent from './components/AnalyticsComponent';
import { isAuthenticated } from "./services/auth";
import  {Provider}  from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';

/** 
* @description Componente de rota privada
* @param {Object} component Componente que será renderizado para rotas que já possuem um usário
*/

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Home><Component {...props} /></Home>
        ) : 
        (
          <Redirect to={{ pathname: "/"}} />
        )
      }
    />
  );

/** 
* @description Rotas com o seus respectível componentes
*/
export default function Routes(){
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
                <Switch>
                  {/* Rotas de Login */}
                  <Route exact path="/" component={Login}/>
                  <Route exact path="/signup" component={SignUp}/>
                  {/* Rotas após o Login */}
                  <PrivateRoute exact path="/user" component={UserComponent}/>
                  <PrivateRoute exact path="/calender" component={Calender}/>
                  <PrivateRoute exact path="/events" component={AllEvents}/>
                  <PrivateRoute exact path="/forum" component={Forum}/>
                  <PrivateRoute exact path="/chat/:id" component={Chat}/>
                  <PrivateRoute exact path="/help" component={Help}/>
                  <PrivateRoute exact path="/statistic" component={AnalyticsComponent}/>
                  {/* Caso o usuário coleque outra rota */}
                  <Redirect from="*" to={isAuthenticated()? "/calender": "/"} />
                </Switch>
            </BrowserRouter>
          </PersistGate>
          </Provider>
    );
}
