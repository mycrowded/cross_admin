import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  TopToolbar, ListButton, required,
  SaveButton,
  Toolbar
} from 'react-admin'
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import DeleteButtonWithConfirmation from './DeleteButtonWithConfirmation';

const CrossingEditActions = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Back" icon={<ChevronLeft />} />
  </TopToolbar>
);
const CrossingCreateToolbar = props => (
  <Toolbar {...props}>
      
      <SaveButton
          label="crossings.action.save_and_add"
          redirect={false}
          submitOnEnter={false}
          variant="flat"
      />
      
  </Toolbar>
);

export const CrossingCreate = (props) => {
  return(
  <Create toolbar={<CrossingCreateToolbar/>} actions={<CrossingEditActions />} {...props} >
    <SimpleForm >
      <TextInput source='id' label='Switch ID' validate={required()} />
      <TextInput source='crossingFrom' label='crossingFrom' validate={required()} />
      <TextInput source='crossingTo' label='crossingTo' validate={required()} />
      <TextInput source='locationName' label='locationName' validate={required()} />
      <TextInput source='latitude' label='latitude' validate={required()} />
      <TextInput source='longitude' label='longitude' validate={required()}/>
      <TextInput multiline source='notes' label='notes' />
    </SimpleForm>
  </Create>
);
}


export const CrossingEdit = (props) => {
  return (<Edit actions={<CrossingEditActions />} title='Post Edit' {...props}>
    <SimpleForm>
      <TextInput disabled label='switchID' source='id' />
      <TextInput source='crossingFrom' label='crossingFrom' validate={required()}/>
      <TextInput source='crossingTo' label='crossingTo' validate={required()} />
      <TextInput source='locationName' label='locationName' validate={required()} />
      <TextInput source='latitude' label='latitude' validate={required()} />
      <TextInput source='longitude' label='longitude' validate={required()}/>
      <TextInput multiline source='notes' label='notes' />
    </SimpleForm>
  </Edit>);

}

export const CrossingList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' label='Id' />
      <TextField source='crossingFrom' label='CrossingFrom' />
      <TextField source='crossingTo' label='CrossingTo' />
      <TextField source='locationName' label='LocationName' />
      <TextField source='latitude' label='Latitude' />
      <TextField source='longitude' label='Longitude' />
      <TextField source='notes' label='Notes' />
      <EditButton />
      <DeleteButtonWithConfirmation />
    </Datagrid>
  </List>
)