// IMPORTS
import './text-input.scss';

// TEXT INPUT
const TextInput = ({className, label, name, id}) => {
	
	// RENDER
	return (
	<div class={`text-input ${className}`}>
		<label class='text-input__label' for={name}>{label}</label>
		<input class='text-input__field' name={name} id={id} type='text'/>
	</div>
	);
	
};

// EXPORTS
export default TextInput;