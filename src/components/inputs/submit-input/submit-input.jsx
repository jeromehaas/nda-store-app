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
		<input class={`submit-input ${props.className}`} type='submit' value={props.label[form.language]} disabled={props.disabled} onClick={props.onClick} />
	);
	
};

// EXPORTS
export default SubmitInput;

