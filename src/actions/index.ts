import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface User {
	id: number;
	name: string;
	lastName: string;
}

export interface FetchUsersAction {
    type: ActionTypes.fetchUsers;
    payload: User[];
  }

const url = 'http://localhost:3001/api/User';

export const fetchUsers = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<User[]>(url);
		console.log(response.data,"response data")
		dispatch<FetchUsersAction>({
			type: ActionTypes.fetchUsers,
			payload: response.data,
		});
	};
};
