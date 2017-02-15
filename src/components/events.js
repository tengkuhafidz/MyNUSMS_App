import React, { Component } from 'react'
import {Text, View, ListView, ScrollView} from 'react-native'
import {Card, CardSection} from './common'
import EventSingle from './eventSingle.js'
import { Spinner } from './common';

import pagesData from '../data/pagesData.js'


class Events extends Component{

	state = {events: []}

	componentWillMount(){

		pages = pagesData.pages

		const access_token = 'EAAaYA1tQ4gsBAPCi7I7dYZCOnZAH4GG5qbfljZCLRHQ2kjPHbOMEpoE7l6Dz5aU79QipPpDZA1aqOBUhyYNydCM22U04A6AiDffWIsdsjyiMpfNx1LaXuKSDJShXpTRPPqXrsxL94FBAwh3HSnVLHNyl8djxvB8axEkTrtSfLwZDZD';

		var allEvents = [];

		for (var key in pages){

		    fetch(`https://graph.facebook.com/${pages[key]}/events?fields=owner,name,description,cover,place,start_time,end_time,ticket_uri,attending_count,interested_count&access_token=${access_token}`, {
				  method: 'GET',
				  headers: {
				    'Accept': 'application/json',
				  },
				})
		      .then((response) => response.json())
		      .then((responseJson) => {	 
		      	allEvents.push(...responseJson.data)     	
		      })
		      .catch((error) => {
		        console.error(error);
		    });
		}

		this.setState({events: allEvents})

	    
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

		const {page, bottomSpace} = styles;


		return (
				<ScrollView style={page}>
					<Card style={bottomSpace}>
						{this.getUpcomingEvents()}

						<View style={bottomSpace}></View>

					</Card>
				</ScrollView>
			
    	);
	}


}

const styles = {
  page: {
    backgroundColor: '#ddd',
  },
  bottomSpace: {
  	marginBottom: 250
  }

};	
export default Events;

