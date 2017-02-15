import React from 'react';
import {Text,View} from 'react-native';

import { Header } from './components/common';

import Musollas from './components/musollas';
import Posts from './components/posts';
import Events from './components/posts';
import Tabview from './components/tabview';


const App = () => {
    return (
    	<View>
        	<Header headerText={"My NUSMS"}/>
        	<Tabview />
        </View>
    );
}

export default App;
