import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Gallery from './components/Gallery';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Search from './components/Search';

function App() {
	return (
		<div className="App">
			<div className="container">
				<GlobalStyles />
				<Header />
				<Search />
				<Gallery />
			</div>
		</div>
	);
}

export default App;
