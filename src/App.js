import React from 'react';
import {Text,View} from 'react-native';

import { Header } from './components/common';
import Events from './components/events';
import Posts from './components/posts';

// import venuesTest from './components/venuesTest';


const App = () => {
    return (
    	<View>
        	<Header headerText={"My NUSMS"}/>
        	<Posts />
        </View>
    );
}

export default App;
