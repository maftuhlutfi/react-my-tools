import React from 'react';
import ToolBox from './ToolBox';

import './ToolsContainer.scss';

const tools = [
	{
		name: 'Link Film',
		route: 'link-film',
		icon: 'RiMovieLine'
	},
	{
		name: 'Link Subtitle',
		route: 'link-subtitle',
		icon: 'RiClosedCaptioningLine'
	},
	{
		name: 'Link Drakor',
		route: 'link-drakor',
		icon: 'RiZhihuLine'
	},
	{
		name: 'Url Decode',
		route: 'url-decode',
		icon: 'RiCodeLine'
	},
	{
		name: 'Media Query',
		route: 'media-query',
		icon: 'RiAspectRatioLine'
	},
	{
		name: 'YT Mp3',
		route: 'yt-mp3',
		icon: 'RiMusic2Line'
	}, {
		name: 'Grid Playground',
		route: 'grid-generator',
		icon: 'RiLayoutGridLine'
	},
	{
		name: 'Flex Box Playground',
		route: 'flex-box-generator',
		icon: 'RiLayoutMasonryLine'
	}
]

function ToolsContainer({search}) {
	const filteredTools = tools.filter(tool =>
		tool.name.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div className="tools-container">
			{filteredTools.map(tool => <ToolBox {...tool} />)}
		</div>
	);
}

export default ToolsContainer;