// IMPORTS
import '~/styles/main.scss';
import { Suspense } from 'solid-js';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { FormProvider } from '~/contexts/form-context.jsx';
import { NotifierProvider } from '~/contexts/notifier-context.jsx';

// APP
const App = () => {
	
	// RENDER
	return (
		<FormProvider>
			<NotifierProvider>
				<Router root={props => <Suspense>{props.children}</Suspense>}>
					<FileRoutes/>
				</Router>
			</NotifierProvider>
		</FormProvider>
	);
	
};

// EXPORTS
export default App;
