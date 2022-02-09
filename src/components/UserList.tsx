import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {useDispatch} from 'react-redux';
import { fetchUsers } from '../store/action-creators/user';

const UserList: FC = () => {
	const {error, loading, users} = useTypedSelector(state => state.user)
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(fetchUsers())
	},[]);
		if (loading) {
			return <h1>Идёт загрузка...</h1>
		} 
		if (error) {
			return <h1>{error}</h1>
		}
	return (
		<div>
			{users.map(user=>
				<div key={user.id}>
					{user.name}
				</div>
				)}

		</div>
	)
}
export default UserList;