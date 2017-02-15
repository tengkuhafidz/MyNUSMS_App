import React, { Component } from 'react'
import {Text, View, ListView, ScrollView} from 'react-native'
import {Card, CardSection} from './common'
import EventSingle from './eventSingle.js'
import { Spinner } from './common';

import Meteor, { createContainer } from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket';

class Events extends Component{
	componentWillMount() {
    	Meteor.connect(SERVER_URL);  
  	}

	getUpcomingEvents(){
 		return this.props.events.map(event => <EventSingle key={event.id} event={event}/>)

		// return this.state.events.map(event=> <Text key={event.name}>{event.name}</Text>)

	}

	render(){

		events = this.props.events

  		if(!events)
  			return <Spinner />

  		console.log(events)


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
export default createContainer(() => {
  Meteor.subscribe('allEvents');
  return {
    events: Meteor.collection('events').find({}, {sort: {start_time: -1}}),
  };
}, Events);

