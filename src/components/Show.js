import React,{ Component } from 'react';
import store from '../redux/store';

export default class Show extends Component{
	state = {
		num:store.getState().num
	}

	componentDidMount(){
		this.unsubscribe = store.subscribe(()=>{
			this.setState({
				num:store.getState().num
			})
		})
	}

	render(){
		return <div className="show">
			<b>{this.state.num}</b>
		</div>
	}
}