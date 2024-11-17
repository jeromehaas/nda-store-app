// IMPORTS
import './text-input.scss';
import {FormContext} from '~/contexts/form-context.jsx';
import {useContext} from 'solid-js';

// TEXT INPUT
const TextInput = (props) => {
	
	// SETUP CONTEXT
	const [form] = useContext(FormContext);
	
	// RENDER
	return (
	<div class={`text-input ${props.className}`}>
		<label class='text-input__label label' for={props.name}>{props.label[form.language]}</label>
		<input class='text-input__field field' name={props.name} id={props.id} type='text' value={props.value} onInput={props.onInput}/>
	</div>
	);
	
};

// EXPORTS
export default TextInput;