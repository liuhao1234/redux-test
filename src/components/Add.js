import React,{ Component } from 'react';
import store from '../redux/store';
import { add_num } from '../redux/actions/add-action'

export default class Add extends Component{
	state={
		num:store.getState().num
	}

	add = ()=>{
		store.dispatch(add_num(5));
		this.setState({
			num:store.getState().num
		})
	}

	render(){
		return <div className="add" onClick={()=>this.add()}>
			<b>{this.state.num}</b>
		</div>
	}
}
