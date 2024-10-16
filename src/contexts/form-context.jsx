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
			company: 'haas web solutions',
			firstname: 'Jérôme',
			lastname: 'Haas',
			email: 'hello@jeromehaas.ch',
			street: 'Bodenmatte 16a',
			plz: '5647',
			town: 'Oberrüti',
			country: 'CH',
			date: currentDate,
			consent: true,
			signature: '',
		},
		state: {
			isValid: false,
			isLoading: false,
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



