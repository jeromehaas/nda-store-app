// IMPORTS
import './submit-input.scss';
import {FormContext} from '~/contexts/form-context.jsx';
import {useContext} from 'solid-js';

// SUBMIT INPUT
const SubmitInput = (props) => {
	
	// SETUP CONTEXT
	const [form] = useContext(FormContext);
	
	// RENDER
	return (
		<input class={`submit-input button ${props.className}`} type='submit' value={props.isLoading ? '...' : props.label[form.language]} disabled={!props.isValid} onClick={props.onClick} />
	);
	
};

// EXPORTS
export default SubmitInput;

