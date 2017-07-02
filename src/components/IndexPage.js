import React from 'react'
import axios from 'axios'
export default class IndexPage extends React.Component {


componentDidMount() {
	console.log("mounted")
	 axios.get('http://api.tvmaze.com/search/shows?q=girls').then(res => {
	     console.log(res.data)
	  }).catch(function(error) {
	     console.log(error)
	  })
}

render() {
    return (
      <div className="home">
	    <h1>Home</h1>
      </div>
    );
  }
}
