import React, { Component } from 'react'
import {Text, View, ListView, ScrollView} from 'react-native'
import {Card, CardSection} from './common'
import PostSingle from './postSingle.js'
import { Spinner } from './common';

// import VenueAvailable from './venueAvailable.js'

// import venuesData from '../data/venuesData.js'
// import venueInfoData from '../data/venueInfoData.js'

var moment = require('moment');

class Posts extends Component{

	    // super();
	    state = {posts: []}
	      
	// componentWillMount(){
 // 	    fetch('http://api.nusmods.com/venuesRaw.json')
 // 	      .then((response) => response.json())
 // 	      .then((responseJson) => {
 // 	        this.setState({events: responseJson})
 // 	      })
 // 	      .catch((error) => {
 // 	        console.error(error);
 // 	    });
 // 	}
 
 // 	renderVenues(){
 // 		return this.state.events.map(event => <Text key={event.roomcode}>{event.roomcode}</Text>)
 // 	}

	componentWillMount(){

		// var singaporeFullTZ = moment.tz(new Date, "Asia/Brunei"); //date in Asia/Brunei full TZ format
    	// var yesterday = singaporeFullTZ.add(-1, 'days').startOf('day').unix();

		const access_token = 'EAAaYA1tQ4gsBAPm9El3XXLE2ZCZBhLwz9y3yryWgLR3EjTNdepTjkercZBeUigEUgfD1P1p2h4ySvZAgjJuNYr3wYiMJ8CAd7KYJMPVtNFGtcfOYZBiOW8nO7e2s4LSp3tkp3zJDWgUOb7KLMB2hQbQiNDeSWWb4fdXWvDYZBUoAZDZD';

		// $.get( "https://graph.facebook.com/nusms.ias/events?fields=name,end_time,start_time&access_token=${access_token}", function( data ) {
		// 	  alert(data.data[0].name)
		// 	  this.setState({events: data.data})
		// });

	    fetch(`https://graph.facebook.com/nusms.ias/feed?fields=story,name,message,object_id,link,created_time&access_token=${access_token}`, {
			  method: 'GET',
			  headers: {
			    'Accept': 'application/json',
			  },
			})
	      .then((response) => response.json())
	      .then((responseJson) => {	      	
	        this.setState({posts: responseJson.data})
	      })
	      .catch((error) => {
	        console.error(error);
	    });
	    
	}

// componentDidMount() {
//     this.fetchEvents();
//   }

//   fetchEvents() {
//   	const access_token = 'EAAaYA1tQ4gsBAPm9El3XXLE2ZCZBhLwz9y3yryWgLR3EjTNdepTjkercZBeUigEUgfD1P1p2h4ySvZAgjJuNYr3wYiMJ8CAd7KYJMPVtNFGtcfOYZBiOW8nO7e2s4LSp3tkp3zJDWgUOb7KLMB2hQbQiNDeSWWb4fdXWvDYZBUoAZDZD';

//     return $.getJSON("https://graph.facebook.com/nusms.ias/events?fields=name,end_time,start_time&access_token=${access_token}", function( data ) {
// 			  this.setState({events: data.data})
// 		});
//   }

	getPosts(){
 		return this.state.posts.map(post => <PostSingle key={post.id} post={post}/>)

	}

	render(){

		if(this.state.posts.length < 1)
			return <Spinner />

		const {page} = styles;


		return (
				<ScrollView style={page}>
						{this.getPosts()}
				</ScrollView>
			
    	);
	}


}

const styles = {
  page: {
    backgroundColor: '#ddd',
  },

};	

export default Posts;

