import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function Topic({match}) {
  return (
	    <div>
				    <h3>{match.params.topicId}</h3>			    
			 </div>
	)
}

export default Topic
