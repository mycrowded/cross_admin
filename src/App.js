import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { CrossingList, CrossingEdit, CrossingCreate } from './crossings'
import { AdminUserCreate, AdminUserList } from './admin';
import Dashboard from './dashboard';
import authProvider from './authProvider';
import { theme } from './theme';
import LoginPage from './theme/loginPage';
import { fetchJson } from './fetch';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

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

const App = () => (<Admin loginPage={LoginPage} dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider} theme={theme}>
  {permissions => [
    <Resource name="crossings" list={CrossingList} edit={CrossingEdit} create={CrossingCreate} />,

    permissions === "Admin" ? <Resource name="administrator" list={AdminUserList} create={AdminUserCreate} /> : null,
    <div>
      <NotificationContainer />
    </div>

  ]}

</Admin>

);

export default App;