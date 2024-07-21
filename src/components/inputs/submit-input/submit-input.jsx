// IMPORTS
import './submit-input.scss';

// SUBMIT INPUT
const SubmitInput = (props) => {
	
	// RENDER
	return (
		<input class={`submit-input ${props.className}`} type='submit' value={props.label} disabled={props.disabled} onClick={props.onClick} />
	);
	
};

// EXPORTS
export default SubmitInput;

