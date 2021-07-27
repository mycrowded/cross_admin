import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  TopToolbar, ListButton, required,
  SaveButton,
  Toolbar,
  CheckboxGroupInput,
  RadioButtonGroupInput
} from 'react-admin'
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import DeleteButtonWithConfirmation from './DeleteButtonWithConfirmation';

const AdminUserEditActions = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Back" icon={<ChevronLeft />} />
  </TopToolbar>
);
const AdminUserCreateToolbar = props => (
  <Toolbar {...props}>
      
      <SaveButton
          label="crossings.action.save_and_add"
          redirect={false}
          submitOnEnter={false}
          variant="flat"
      />
      
  </Toolbar>
);

export const AdminUserCreate = (props) => {
  return(
  <Create toolbar={<AdminUserCreateToolbar/>} actions={<AdminUserEditActions />} {...props} >
    <SimpleForm >
      <TextInput source='username' label='Email' validate={required()} />
      <TextInput source='password' label='Password' validate={required()} />
      <RadioButtonGroupInput
      source="role"
      choices={[
          { id: 'Admin', name: 'Admin' },
          { id: 'Switch Installer', name: 'Switch Installer' }
      ]}
   />
      
    </SimpleForm>
  </Create>
);
}


export const AdminUserEdit = (props) => {
  return (<Edit actions={<AdminUserEditActions />} title='Post Edit' {...props}>
    <SimpleForm>
      <TextInput disabled label='Email' source='username' />
      <TextInput source='password' label='Password' validate={required()}/>
      <CheckboxGroupInput
                    source="role"
                    choices={[
                        { id: 'admin', name: 'Admin' },
                        { id: 'installer', name: 'CROSS Switch Installer' }
                    ]}
                />
    </SimpleForm>
  </Edit>);
}

export const AdminUserList = (props) => (
    <List {...props}>
      <Datagrid>
      <TextField  label='Email' source='id' />
      <TextField  label='Role' source='role' />
        <DeleteButtonWithConfirmation />
      </Datagrid>
    </List>
  )

