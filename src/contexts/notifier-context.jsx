// IMPORTS
import {createContext} from 'solid-js';
import {createStore} from 'solid-js/store';

// NOTIFIER CONTEXT
const NotifierContext = createContext();

// FORM PROVIDER
const NotifierProvider = (props) => {
	
	// SETUP STORE
	const [notifier, setNotifier] = createStore({
		code: null,
		isVisible: false,
	});
	
	// RETURN
	return (
	<NotifierContext.Provider value={[notifier, setNotifier]}>
		{props.children}
	</NotifierContext.Provider>
	);
	
};

// EXPORTS
export {
	NotifierProvider,
	NotifierContext,
};


