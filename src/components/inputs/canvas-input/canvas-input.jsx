// IMPORTS
import './canvas-input.scss';
import SignaturePad from 'signature_pad';
import {onMount} from 'solid-js';

// TEXT INPUT
const CanvasInput = ({className, label, name, id}) => {
	
	// SETUP REFS
	let fieldRef;
	
	// SETUP SIGNATURE PAD
	let signaturePad;
	
	// ON MOUNT
	onMount(() => {
		
		// ASSIGN SIGNATURE PAD
		signaturePad = new SignaturePad(fieldRef);
		
	})
	
	// HANDLE ON-ENDED
	const handleOnEnded = () => {
		
		// CREATE DATA-URL
		const signatureDataUrl = signaturePad.toDataURL('image/svg+xml');
		
	}
	
	// RENDER
	return (
	<div class={`canvas-input ${className}`}>
		<label class='canvas-input__label' for={name}>{label}</label>
		<canvas ref={fieldRef} class='canvas-input__field' width='400' height='200' onTouchEnd={handleOnEnded} onClick={handleOnEnded} />
	</div>
	);
	
};

// EXPORTS
export default CanvasInput;