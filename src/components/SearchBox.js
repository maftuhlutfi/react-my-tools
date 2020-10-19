import React, {useState} from 'react';
import './SearchBox.scss';
import { RiSearchLine } from 'react-icons/ri';

function SearchBox({handleChange, input}) {
	const [active, setActive] = useState(false);
	

	return (
		<div className={active ? 'search-box active' : 'search-box'}>
			<RiSearchLine className='search-icon' />
			<input 
				placeholder='Search tools...' 
				type='text' 
				onFocus={() => setActive(true)} 
				onBlur={() => setActive(false)}
				value={input}
				onChange={handleChange}
			/>
		</div>
	);
}

export default SearchBox;