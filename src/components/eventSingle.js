import React, { Component } from 'react'
import {TouchableOpacity, Button, Linking, Image, Text, View, TouchableHighlight, TouchableWithoutFeedback, UIManager, LayoutAnimation, Platform} from 'react-native'
import {Card, CardSection} from './common'

var moment = require('moment');


class EventSingle extends Component{

	render(){

		const {linkStyle, imageStyle, titleTextStyle, smallTextStyle, contentStyle, imageContainerStyle, imgStyle} = styles;


		var event = this.props.event
		var name = event.name
		var owner = event.owner.name
		var description = event.description
		var startTime = moment(event.start_time).format('D MMM, h:mm a (ddd)')
		var endTime = event.end_time ? <Text style={smallTextStyle}>End: {moment(event.end_time).format('D MMM, h:mm a (ddd)')}</Text> : <View></View>

		var place = event.place ? <Text style={smallTextStyle}>Venue: {event.place.name}</Text> : <View></View>

		var attendingCount = event.attending_count
		var interestedCount = event.interested_count

		var id = event.id
		var eventUrl = `http://facebook.com/events/${id}`
		var imageUrl = event.cover ? <Image style={{width: 60, height: 60, resizeMode: 'cover', borderRadius: 5}} source={{uri: event.cover.source}}/> : <View style={{backgroundColor: "#333"}}/>
		var link = event.ticket_uri ? <Text style={smallTextStyle}>Link: <Text style={linkStyle} onPress={()=>Linking.openURL(event.ticket_uri)}>{event.ticket_uri}</Text></Text> : <View></View>

		

		return (
			
			<CardSection >

				<View style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1}}>
						<TouchableOpacity onPress={()=>Linking.openURL(eventUrl)}>
							{imageUrl}
				         </TouchableOpacity>
				    </View>
				    <View style={{flex: 4}}>
						<Text style={titleTextStyle} onPress={()=>Linking.openURL(eventUrl)}>{name}</Text>
						<Text style={smallTextStyle}>By: {owner}</Text>
						<Text style={smallTextStyle}>Start: {startTime}</Text>
						{endTime}
						{place}
						{link}
					</View>
				</View>
	
			</CardSection>


    	);
	}
}


const styles = {
	contentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	titleTextStyle: {
		fontSize: 12,
		fontWeight: 'bold' 
	},
	smallTextStyle: {
		fontSize: 10,
	},
	imageStyle: {
		height: 50,
		width: 50
	},
	linkStyle:{
		color: 'blue'
	},
	imageContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imgStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};	

export default EventSingle;

