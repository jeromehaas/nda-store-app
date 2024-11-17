// IMPORTS
import './canvas-input.scss';
import {FormContext} from '~/contexts/form-context.jsx';
import {useContext} from 'solid-js';

// TEXT INPUT
const CanvasInput = (props) => {
	
	// SETUP CONTEXT
	const [form] = useContext(FormContext);
	
	// RENDER
	return (
	<div class={`canvas-input ${props.className}`}>
		<label class='canvas-input__label label' for={props.name}>{props.label[form.language]}</label>
		<div class='canvas-input__field field'>
			<canvas class='field__signature-pad' ref={props.ref} width='400' height='200' onTouchEnd={props.onEnd} onClick={props.onEnd}/>
			<button class='field__reset-button' onClick={props.onReset}>{props.buttonLabel[form.language]}</button>
		</div>
	</div>
	);
	
};

// EXPORTS
export default CanvasInput;