import React, { Component } from 'react'
import {Text, View, ListView, ScrollView} from 'react-native'
import {Card, CardSection} from './common'
import EventSingle from './eventSingle.js'
import { Spinner } from './common'

import MusollaSingle from './musollaSingle'

var moment = require('moment');

class Musollas extends Component{

	    // super();
	state = {musollas: []}

	componentWillMount(){

	    fetch(`https://raw.githubusercontent.com/ruqqq/musolla-database/master/geohashed/w21z3.json`, {
			  method: 'GET',
			  headers: {
			    'Accept': 'application/json',
			  },
			})
	      .then((response) => response.json())
	      .then((responseJson) => {	 
	      	keys = Object.keys(responseJson) 

	      	musollas = []

    		for(var i = 0; i < keys.length; i++){
    			musollas.push(responseJson[keys[i]])
    		}

	        this.setState({musollas: musollas})
	      })
	      .catch((error) => {
	        console.error(error);
	    });
	    
	}

	getMusollas(){
 		return this.state.musollas.map(musolla => <MusollaSingle key={musolla.uuid} musolla={musolla}/>)
	}

	render(){

		if(this.state.musollas.length < 1)
			return <Spinner />

		const {page, bottomSpace} = styles;


		return (
				<ScrollView style={page}>
					{this.getMusollas()}
					<View style={bottomSpace}>
					</View>
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
export default Musollas;

