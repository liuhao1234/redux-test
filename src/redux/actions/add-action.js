export const ADD_ACTION = "ADD_ACTION";

export function add_num(num){
	return {
		type:ADD_ACTION,
		payload:num||1
	}
}