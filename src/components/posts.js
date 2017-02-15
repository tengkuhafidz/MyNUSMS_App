import React, { Component } from 'react'
import {Text, View, ListView, ScrollView} from 'react-native'
import {Card, CardSection} from './common'
import PostSingle from './postSingle.js'
import { Spinner } from './common';

import pagesData from '../data/pagesData.js'

var moment = require('moment');

class Posts extends Component{

	    // super();
	state = {posts: []}
	      
	componentWillMount(){

		const access_token = 'EAAaYA1tQ4gsBAPCi7I7dYZCOnZAH4GG5qbfljZCLRHQ2kjPHbOMEpoE7l6Dz5aU79QipPpDZA1aqOBUhyYNydCM22U04A6AiDffWIsdsjyiMpfNx1LaXuKSDJShXpTRPPqXrsxL94FBAwh3HSnVLHNyl8djxvB8axEkTrtSfLwZDZD';

		pages = pagesData.pages

		var allPosts = [];

		for (var key in pages){

		    fetch(`https://graph.facebook.com/${pages[key]}/feed?fields=story,name,message,object_id,link,created_time&access_token=${access_token}`, {
				  method: 'GET',
				  headers: {
				    'Accept': 'application/json',
				  },
				})
		      .then((response) => response.json())
		      .then((responseJson) => {	      	
		        allPosts.push(...responseJson.data)   
		      })
		      .catch((error) => {
		        console.error(error);
		    });
		}
		this.setState({posts: allPosts})
	    
	}

	getPosts(){
 		return this.state.posts.map(post => <PostSingle key={post.id} post={post}/>)

	}

	render(){

		if(this.state.posts.length < 1)
			return <Spinner />

		const {page, bottomSpace} = styles;


		return (
				<ScrollView style={page}>
						{this.getPosts()}
						<View style={bottomSpace}></View>
				</ScrollView>
			
    	);
	}


}

const styles = {
  page: {
    backgroundColor: '#ddd',
  },
  bottomSpace: {
  	marginBottom: 280
  }
}

export default Posts;

