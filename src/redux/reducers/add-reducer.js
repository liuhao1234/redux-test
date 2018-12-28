import { ADD_ACTION } from '../actions/add-action';

const initialState={
	num:1
}

export default function(state=initialState,action){
	switch (action.type){
		case ADD_ACTION : {
			return {
				num:state.num+action.payload
			}
		}

		default:
			return state;
	}
}