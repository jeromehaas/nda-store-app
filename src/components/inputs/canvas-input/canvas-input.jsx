// IMPORTS
import './canvas-input.scss';

// TEXT INPUT
const CanvasInput = (props) => {
	
	// RENDER
	return (
	<div class={`canvas-input ${props.className}`}>
		<label class='canvas-input__label' for={props.name}>{props.label}</label>
		<div class='canvas-input__field field'>
			<canvas class='field__signature-pad' ref={props.ref} width='400' height='200' onTouchEnd={props.onEnd} onClick={props.onEnd}/>
			<button class='field__reset-button' onClick={props.onReset}>Reset</button>
		</div>
	</div>
	);
	
};

// EXPORTS
export default CanvasInput;