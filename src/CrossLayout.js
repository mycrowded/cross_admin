import { Layout } from 'react-admin';
import CrossMenu from './Layout/CrossMenu';

export const CrossLayout = (props) => <Layout
    {...props}
    //appBar={CrossAppBar}
    //sidebar={CrossSidebar}
    menu={CrossMenu}
//notification={CrossNotification}
/>;

