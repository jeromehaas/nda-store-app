// IMPORTS
import './date-input.scss';
import {FormContext} from '~/contexts/form-context.jsx';
import {useContext} from 'solid-js';


// TEXT INPUT
const DateInput = (props) => {
	
	// SETUP CONTEXT
	const [form] = useContext(FormContext);
	
	// RENDER
	return (
	<div class={`date-input ${props.className}`}>
		<label class='date-input__label label' for={props.name}>{props.label[form.language]}</label>
		<input class='date-input__field field' name={props.name} id={props.id} onInput={props.onInput} type='date' value={props.value}/>
	</div>
	);
	
};

// EXPORTS
export default DateInput;