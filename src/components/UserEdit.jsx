import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const UserEdit = (props) => {
	return (
		<>
			<Edit title='Edit a User' {...props}>
				<SimpleForm>
					<TextInput disabled source='id' />
					<TextInput source='name' />
					<TextInput source='email' />
					<DateInput label='Created' source='CreatedAt' />
				</SimpleForm>
			</Edit>
		</>
	);
};

export default UserEdit;
