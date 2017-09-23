import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends Component {
	
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	
	componentDidMount(){
		console.log("about组件加载成功")
	}
	
  render() {
	  return (
	      <div>
			    <h2>About</h2>
			  </div>
	  );
	}
}

export default Home