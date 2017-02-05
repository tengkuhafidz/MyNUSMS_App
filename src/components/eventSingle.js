import React, { Component } from 'react'
import {Image, Text, View, TouchableHighlight, TouchableWithoutFeedback, UIManager, LayoutAnimation, Platform} from 'react-native'
import {Card, CardSection} from './common'


class EventSingle extends Component{

	render(){

		var event = this.props.event
		var name = event.name
		var description = event.description

		var id = event.id
		var imageUrl = `http://graph.facebook.com/${id}/picture?type=large`
		
		const {imageStyle, titleTextStyle, contentStyle, imageContainerStyle, imgStyle} = styles;

		return (

			<CardSection>
				<View style={contentStyle}>
					<Image style={{ height:150 }}
			          source={{uri: imageUrl}}
			        />
					<Text style={titleTextStyle}>
						{name} 
					</Text>
					<Text>
						{description}
					</Text>
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
		fontSize: 18 
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

export default EventSingle;

