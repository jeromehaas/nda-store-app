// IMPORTS
import './studio.scss';
import Preview from '~/components/partials/preview/preview.jsx';
import Sidebar from '~/components/partials/sidebar/sidebar.jsx';

// STUDIO
const Studio = () => {
	
	// RENDER
	return (
	<div class='studio'>
		<Preview />
		<Sidebar />
	</div>
	);
	
};

// EXPORTS
export default Studio;