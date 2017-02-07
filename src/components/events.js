import React, { Component } from 'react'
import {Text, View, ListView, ScrollView} from 'react-native'
import {Card, CardSection} from './common'
import EventSingle from './eventSingle.js'
import { Spinner } from './common';

// import VenueAvailable from './venueAvailable.js'

// import venuesData from '../data/venuesData.js'
// import venueInfoData from '../data/venueInfoData.js'

var moment = require('moment');

class Events extends Component{

	    // super();
	    state = {events: []}
	      
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

	    fetch(`https://graph.facebook.com/nusms.ias/events?fields=id,name,description,cover,start_time,end_time,ticket_uri,attending_count,interested_count&access_token=${access_token}`, {
			  method: 'GET',
			  headers: {
			    'Accept': 'application/json',
			  },
			})
	      .then((response) => response.json())
	      .then((responseJson) => {	      	
	        this.setState({events: responseJson.data})
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

	getUpcomingEvents(){
 		return this.state.events.map(event => <EventSingle key={event.id} event={event}/>)

		// return this.state.events.map(event=> <Text key={event.name}>{event.name}</Text>)

	}

	render(){

		if(this.state.events.length < 1)
			return <Spinner />

		return (
				<ScrollView>
					{this.getUpcomingEvents()}
				</ScrollView>
			
    	);
	}


}

export default Events;

