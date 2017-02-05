import React, { Component } from 'react'
import {Image, Text, View, TouchableHighlight, TouchableWithoutFeedback, UIManager, LayoutAnimation, Platform} from 'react-native'
import {Card, CardSection} from './common'


class PostSingle extends Component{

	getSecondPart(str) {
    	return str.split('_')[1];
	}

	render(){

		var post = this.props.post
		var story = post.story
		var message = post.message
		var id = post.id
		var objectId = this.getSecondPart(id + "")
		var imageUrl = `http://graph.facebook.com/${objectId}/picture?type=normal`
		
		const {imageStyle, titleTextStyle, contentStyle, imageContainerStyle, imgStyle} = styles;

		return (

			<CardSection>
				<View style={contentStyle}>
					<Image style={{ height:150 }}
			          source={{uri: imageUrl}}
			        />
					<Text style={titleTextStyle}>
						{story} 
					</Text>
					<Text>
						{message}
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

export default PostSingle;

