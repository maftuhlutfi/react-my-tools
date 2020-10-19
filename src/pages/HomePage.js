import React, {useEffect, useState} from 'react';
import './HomePage.scss';

import SearchBox from '../components/SearchBox';
import ToolsContainer from '../components/ToolsContainer';

function HomePage() {
	useEffect(() => {
		document.title = 'Home'
	})

	const [input, setInput] = useState('');

	const handleChange = e => {
		const { value } = e.target;
		setInput(value);
	}

	return (
		<section className="homepage">
			<h1 className='title'>My Tools</h1>
			<SearchBox handleChange={handleChange} input={input} />
			<ToolsContainer search={input} />
		</section>
	);
}

export default HomePage;