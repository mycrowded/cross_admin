import * as React from "react";
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { CrossingList, CrossingEdit, CrossingCreate } from './crossings'
import { AdminUserCreate, AdminUserList } from './admin';
import Dashboard from './dashboard';
import authProvider from './authProvider';
import { theme } from './theme';
import { CrossLayout } from './CrossLayout';
import LoginPage from './theme/loginPage';
import { fetchJson } from './fetch';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import customRoutes from './customRoutes';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TrafficIcon from "@material-ui/icons/Traffic";

const httpClient = (url, options = {}) => {
  var token = localStorage.getItem('token');
  options.user = {
    authenticated: true,
    token: token
  };
  return fetchJson(url, options)
    .catch(error => {
      showNotification(error);
    });
};

const showNotification = (error) => {
  NotificationManager.error(error.message, error.name, 3000);

}

const dataProvider = simpleRestProvider('https://crowdedcross.com', httpClient);

const App = () => (<Admin loginPage={LoginPage} dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider} theme={theme} customRoutes={customRoutes} layout={CrossLayout}>
  {permissions => [
    <Resource name="crossings" list={CrossingList} edit={CrossingEdit} create={CrossingCreate} icon={TrafficIcon} />,

    permissions === "Admin" ? <Resource name="administrator" list={AdminUserList} create={AdminUserCreate} icon={SupervisorAccountIcon} /> : null,
    <div>
      <NotificationContainer />
    </div>

  ]}

</Admin>

);

export default App;