// IMPORTS
import './date-input.scss';

// TEXT INPUT
const DateInput = (props) => {
	
	// RENDER
	return (
	<div class={`date-input ${props.className}`}>
		<label class='date-input__label' for={props.name}>{props.label}</label>
		<input class='date-input__field' name={props.name} id={props.id} type='date' value={props.value}/>
	</div>
	);
	
};

// EXPORTS
export default DateInput;