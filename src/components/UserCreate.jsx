import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const UserCreate = (props) => {
	return (
		<>
			<Create title='Create a User' {...props}>
				<SimpleForm>
					<TextInput source='name' />
					<TextInput source='email' />
					<DateInput label='Created' source='createdAt' />
				</SimpleForm>
			</Create>
		</>
	);
};

export default UserCreate;
