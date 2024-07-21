// IMPORTS
import './submit-input.scss';

// SUBMIT INPUT
const SubmitInput = ({className, label}) => {
	
	// RENDER
	return (
		<input class={`submit-input ${className}`} type='submit' value={label} />
	);
	
};

// EXPORTS
export default SubmitInput;

