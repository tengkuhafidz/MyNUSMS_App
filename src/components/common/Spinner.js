import React from 'react';
import {View, ActivityIndicator, Dimensions} from 'react-native';


var heightMargin = Dimensions.get('window').height * 0.3;

const Spinner = ({size}) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={size || 'large'} /> 
		</View>
	);
};

const styles = {
	spinnerStyle :{
		flex: 1,
		marginTop: heightMargin,
		alignItems: 'center'
	}
};

export {Spinner};


