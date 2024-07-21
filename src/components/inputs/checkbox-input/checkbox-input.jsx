// IMPORTS
import './checkbox-input.scss';

// TEXT INPUT
const CheckboxInput = (props) => {
	
	// RENDER
	return (
	<div class={`checkbox-input ${props.className}`}>
		<label class='checkbox-input__label' for={props.name}>{props.label}</label>
		{props.options.map((option) => (
		<div class='checkbox-input__options options'>
			<input class='options__field' name={option.name} id={option.id} type='checkbox' checked={option.checked} onClick={option.onInput}/>
			<p class='options__label'>{option.label}</p>
		</div>
		))}
	</div>
	);
	
};

// EXPORTS
export default CheckboxInput;