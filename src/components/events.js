import React, { Component } from 'react'
import {Text, View, ListView, ScrollView} from 'react-native'
import {Card, CardSection} from './common'
import EventSingle from './eventSingle.js'
import { Spinner } from './common';

import Meteor, { createContainer } from 'react-native-meteor';

var moment = require('moment');

const SERVER_URL = 'ws://localhost:3000/websocket';

class Events extends Component{
	componentWillMount() {
    	Meteor.connect(SERVER_URL);
  	}

	getUpcomingEvents(propsHere){

 		return propsHere.map(event => <EventSingle key={event.id} event={event}/>)

		// return this.state.events.map(event=> <Text key={event.name}>{event.name}</Text>)

	}

	render(){

		var someProperties = ['past', 'ongoing', 'future'];
		events = this.props[someProperties[0]]; //this.props.past?

		if (!events)
			return <Spinner />

		const {page, bottomSpace} = styles;

		return (
				<ScrollView style={page}>
						<Card style={bottomSpace}>
							{this.getUpcomingEvents(events)}

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
    // events: Meteor.collection('events').find({}, {sort: {start_time: -1}}),
    past: Meteor.collection('events').find({end_time:{ $lt: moment().format() }}, {sort: {start_time: -1}}),//past
		ongoing: Meteor.collection('events').find({start_time: {$lte: moment().format()}, end_time: { $gt: moment().format() }}, {sort: {start_time: -1}}),//ongoing
		upcoming: Meteor.collection('events').find({start_time: {$gt: moment().format()}}, {sort: {start_time: -1}}),//upcoming

  };
}, Events);
