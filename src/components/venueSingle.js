import React from 'react'
import {Text, View, TouchableHighlight} from 'react-native'
import {Card, CardSection} from './common'

const VenueSingle = (props) => {
	return (
		<TouchableHighlight underlayColor="#dddddd" style={{height: 30}}>
			<View >
				<CardSection>
	        	<Text style={{fontSize: 15, color: "#333333"}} numberOfLines={1}>
	          		{props.venue}
	        	</Text>
	        	</CardSection>
	        	<View style={{height: 1, backgroundColor: "#dddddd"}} />
	    	</View>
	    </TouchableHighlight>
    );
}



export default VenueSingle;