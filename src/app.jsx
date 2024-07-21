// IMPORTS
import '~/styles/main.scss';
import {Suspense} from 'solid-js';
import {Router} from '@solidjs/router';
import {FileRoutes} from '@solidjs/start/router';
import {FormProvider} from '~/contexts/form-context.jsx';

// APP
const App = () => {
	
	// RENDER
	return (
	<FormProvider>
		<Router root={props => <Suspense>{props.children}</Suspense>}>
			<FileRoutes/>
		</Router>
	</FormProvider>
	);
	
};

// EXPORTS
export default App;
