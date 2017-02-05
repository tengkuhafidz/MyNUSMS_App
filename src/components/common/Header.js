// Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';

// Make a component
const Header = (props) =>{
	const {textStyle, viewStyle} = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}> {props.headerText} </Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#003D7E', // 90EE90
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		paddingTop: 5,
		shadowColor: '#000',
		shadowOffset:{ width:0, height: 20 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20,
		color: '#ffffff'
	}
};

// Make the component available to other parts ot the app
export {Header};


/*
	<FLEXBOX>
	justifyContent: 'flex-end', 'center', 'flex-start' (vertical) , 'space-between', 'space-around'
	alignItems: 'flex-start, 'center', 'flex-end' (horizontal)
	flexDirection: 'row', 'column' (by default)
*/