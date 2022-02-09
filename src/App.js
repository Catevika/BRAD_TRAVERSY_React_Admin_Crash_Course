import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import UserList from './components/UserList';
import PostCreate from './components/PostCreate';
import UserCreate from './components/UserCreate';
import PostEdit from './components/PostEdit';
import UserEdit from './components/UserEdit';

function App() {
	return (
		<Admin dataProvider={restProvider('http://localhost:3000')}>
			<Resource
				name='posts'
				list={PostList}
				create={PostCreate}
				edit={PostEdit}
			/>
			<Resource
				name='users'
				list={UserList}
				create={UserCreate}
				edit={UserEdit}
			/>
		</Admin>
	);
}

export default App;
