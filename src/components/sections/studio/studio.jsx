// IMPORTS
import './studio.scss';
import Preview from '~/components/blocks/preview/preview.jsx';
import Sidebar from '~/components/blocks/sidebar/sidebar.jsx';

// STUDIO
const Studio = () => {
	
	// RENDER
	return (
		<div class='studio'>
			<Preview/>
			<Sidebar/>
		</div>
	);
	
};

// EXPORTS
export default Studio;