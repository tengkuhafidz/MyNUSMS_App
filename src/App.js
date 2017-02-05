import React from 'react';
import {Text,View} from 'react-native';

import { Header } from './components/common';
import Events from './components/events';
// import venuesTest from './components/venuesTest';


const App = () => {
    return (
    	<View>
        	<Header headerText={"My NUSMS"}/>
        	<Events />
        </View>
    );
}

export default App;
