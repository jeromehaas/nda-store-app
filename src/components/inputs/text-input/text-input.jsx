// IMPORTS
import './text-input.scss';

// TEXT INPUT
const TextInput = (props) => {
	
	// RENDER
	return (
	<div class={`text-input ${props.className}`}>
		<label class='text-input__label' for={props.name}>{props.label}</label>
		<input class='text-input__field' name={props.name} id={props.id} type='text' value={props.value} onInput={props.onInput}/>
	</div>
	);
	
};

// EXPORTS
export default TextInput;