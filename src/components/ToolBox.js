import React from 'react';
import * as RemixIcon from 'react-icons/ri';

import './ToolBox.scss';

function ToolBox({name, route, icon}) {
	const Icon = RemixIcon[icon];

	return (
		<div className="tool-box">
			<Icon className='icon' />
			<span className='name'>{name}</span>
		</div>
	);
}

export default ToolBox;