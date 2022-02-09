import {
	List,
	Datagrid,
	TextField,
	EmailField,
	DateField,
	EditButton,
	DeleteButton
} from 'react-admin';

const Userlist = (props) => {
	return (
		<div>
			return{' '}
			<List {...props}>
				<Datagrid>
					<TextField source='id' />
					<TextField source='name' />
					<EmailField source='email' />
					<DateField source='createdAt' />
					<EditButton basePath='/users' />
					<DeleteButton basePath='/users' />
				</Datagrid>
			</List>
		</div>
	);
};

export default Userlist;
