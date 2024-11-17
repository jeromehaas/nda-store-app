// IMPORTS
import {createContext} from 'solid-js';
import {createStore} from 'solid-js/store';

// FORM CONTEXT
const FormContext = createContext();

// FORM PROVIDER
const FormProvider = (props) => {
	
	// GET CURRENT DATE
	const today = new Date();
	const year = today.getFullYear();
	const month = (today.getMonth() + 1).toString().padStart(2, '0');
	const day = (today.getDate()).toString().padStart(2, '0');
	const currentDate = `${year}-${month}-${day}`;
	
	// SETUP STORE
	const [form, setForm] = createStore({
		language: 'en',
		fields: {
			company: '',
			firstname: '',
			lastname: '',
			email: '',
			street: '',
			plz: '',
			town: '',
			country: '',
			date: currentDate,
			consent: false,
			signature: '',
		},
		state: {
			isValid: false,
			isLoading: false,
			isVisible: true,
		}
	});
	
	return (
	<FormContext.Provider value={[form, setForm]}>
		{props.children}
	</FormContext.Provider>
	);
	
};

// EXPORTS
export {
	FormProvider,
	FormContext,
};



