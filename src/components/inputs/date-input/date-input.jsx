// IMPORTS
import './date-input.scss';

// TEXT INPUT
const DateInput = ({className, label, name, id}) => {
	
	// RENDER
	return (
	<div class={`date-input ${className}`}>
		<label class='date-input__label' for={name}>{label}</label>
		<input class='date-input__field' name={name} id={id} type='date'/>
	</div>
	);
	
};

// EXPORTS
export default DateInput;