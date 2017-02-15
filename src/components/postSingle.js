import React, { Component } from 'react'
import {TouchableOpacity, Button, Linking, Image, Text, View, TouchableHighlight, TouchableWithoutFeedback, UIManager, LayoutAnimation, Platform} from 'react-native'
import {Card, CardSection} from './common'

import pagesData from '../data/pagesData.js'

var moment = require('moment');

class PostSingle extends Component{

	render(){

		var post = this.props.post
		var message = post.message ? post.message : post.story
		var objectId = post.object_id
		var imageUrl = `http://graph.facebook.com/${objectId}/picture?type=normal`
		var postUrl = post.link

		var postTime = moment(post.created_time).fromNow()

		var pages = pagesData.pages
		const getKey = (obj,val) => Object.keys(obj).find(key => obj[key] === val);
		if(postUrl){
			var parts = postUrl.split('/');
			var byId = parts[3];
			var byName = getKey(pages,byId)
		} else {
			var byId = "nusms"
			var byName = "NUSMS"
		}
		var byImageUrl = `https://graph.facebook.com/${byId}/picture?type=small`
		var byUrl = `http://facebook.com/${byId}`


		const {card, imageStyle, titleTextStyle, byTextStyle, smallTextStyle, messageTextStyle, contentStyle, imageContainerStyle, imgStyle} = styles;

		return (

			<Card>
				<View style={contentStyle}>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<View style={{flex: 1}}>
							<TouchableOpacity onPress={()=>Linking.openURL(byUrl)}>
								<Image style={{ width: 30, height: 30, resizeMode: 'cover'}}
				          source={{uri: byImageUrl}}
				          
				        	/>
				        	</TouchableOpacity>
				        </View>
				        <View style={{flex: 8}}>
							<Text style={byTextStyle} onPress={()=>Linking.openURL(byUrl)}>{byName} </Text>
							<Text style={smallTextStyle}>{postTime}</Text>
						</View>
					</View>
					<Text style={messageTextStyle}>
						{message}
					</Text>
					<Image style={{ height:150 }}
			          source={{uri: imageUrl}}
			        />
			        <Button onPress={()=>Linking.openURL(postUrl)} title="View Post" />
				</View>
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
		marginTop: 10,
		marginBottom: 10,
		fontSize: 12
	},
	byTextStyle: {
		fontSize: 12,
		fontWeight: 'bold'
	},
	smallTextStyle: {
		fontSize: 10,
		color: '#333333' 
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

