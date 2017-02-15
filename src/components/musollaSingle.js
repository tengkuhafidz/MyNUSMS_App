import React, { Component } from 'react'
import {TouchableOpacity, Button, Linking, Image, Text, View, TouchableHighlight, TouchableWithoutFeedback, UIManager, LayoutAnimation, Platform} from 'react-native'
import {Card, CardSection} from './common'

class MusollaSingle extends Component{


	render(){

		const {card, imageStyle, titleTextStyle, byTextStyle, mapTextStyle, messageTextStyle, contentStyle, imageContainerStyle, imgStyle} = styles;


		var musolla = this.props.musolla
		var name = musolla.name
		var address = musolla.address
		var lat = musolla.location.latitude
		var lng = musolla.location.longitude
		var gMapUrl = `http://maps.google.com/?q=${lat},${lat}`

		var level = musolla.level ? <Text style={messageTextStyle}>Level: {musolla.level}</Text> : <View></View>
		var directions = musolla.directions ? <Text style={messageTextStyle}>Directions: {musolla.directions}</Text> : <View></View>
		var toiletLevel = musolla.toiletLevel ? <Text style={messageTextStyle}>Toilet Level: {musolla.toiletLevel}</Text> : <View></View>
		var provision = musolla.provision ? <Text style={messageTextStyle}>Provision: {musolla.provision}</Text> : <View></View>


		return (

			<Card>
				<CardSection>
					<Text style={titleTextStyle} onPress={()=>Linking.openURL(gMapUrl)}>{name}</Text>
				</CardSection>
				<CardSection>
					<View>
						<Text style={messageTextStyle}>Address: {address}</Text>
						{level}
						{toiletLevel}
						{provision}
						{directions}

					</View>
				</CardSection>
			</Card>

    	);
	}
}


const styles = {
	contentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		margin: 10,
	},
	messageTextStyle: {
		fontSize: 12
	},
	titleTextStyle: {
		fontSize: 12,
		fontWeight: 'bold'
	},
	mapTextStyle: {
		fontSize: 10,
		color: '#333333',
		alignItems: 'flex-end' 
	},
	imageStyle: {
		height: 50,
		width: 50
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

export default MusollaSingle;

