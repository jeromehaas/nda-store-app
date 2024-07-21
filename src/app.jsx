// IMPORTS
import '~/styles/main.scss';
import {Suspense} from 'solid-js';
import {Router} from '@solidjs/router';
import {FileRoutes} from '@solidjs/start/router';

// APP
const App = () => {
	
	// RENDER
	return (
	<Router root={props => <Suspense>{props.children}</Suspense>}>
		<FileRoutes />
	</Router>
	);
	
};

// EXPORTS
export default App;
