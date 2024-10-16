// IMPORTS
import './studio.scss';
import Preview from '~/components/blocks/preview/preview.jsx';
import Sidebar from '~/components/blocks/sidebar/sidebar.jsx';
import Notifier from '~/components/blocks/notifier/notifier.js';

// STUDIO
const Studio = () => {
	
	// RENDER
	return (
		<div class='studio'>
			<Preview/>
			<Sidebar/>
			<Notifier />
		</div>
	);
	
};

// EXPORTS
export default Studio;