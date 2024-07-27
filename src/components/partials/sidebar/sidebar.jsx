// IMPORTS
import './sidebar.scss';
import TextInput from '~/components/inputs/text-input/text-input.jsx';
import DateInput from '~/components/inputs/date-input/date-input.jsx';
import CheckboxInput from '~/components/inputs/checkbox-input/checkbox-input.jsx';
import CanvasInput from '~/components/inputs/canvas-input/canvas-input.jsx';
import SubmitInput from '~/components/inputs/submit-input/submit-input.jsx';
import SignaturePad from 'signature_pad';
import {createSignal, onMount, useContext} from 'solid-js';
import {FormContext} from '~/contexts/form-context.jsx';
import {createEffect} from 'solid-js';
import {createContractPdf} from '~/utils/create-contract-pdf.js';

// SIDEBAR
const Sidebar = () => {
	
	// SETUP STATE
	const [signaturePad, setSignaturePad] = createSignal(null);
	
	// SETUP CONTEXT
	const [form, setForm] = useContext(FormContext);
	
	// SETUP REFS
	let signaturePadRef;
	
	// HANDLE END SIGNATURE DRAW
	const handleCanvasInputUpdate = () => {
		//setForm(form => ({...form, fields: {...form.fields, signature: signaturePad().toDataURL('image/svg+xml')}}));
		setForm(form => ({...form, fields: {...form.fields, signature: signaturePad().toDataURL('image/png')}}));
	};
	
	// HANDLE TEXT INPUT UPDATE
	const handleTextInputUpdate = (event, field) => {
		setForm((form => ({...form, fields: {...form.fields, [field]: event.target.value,},})));
	};
	
	// HANDLE CHECKBOX INPUT UPDATE
	const handleCheckboxInputUpdate = (event, field) => {
		setForm((form => ({...form, fields: {...form.fields, [field]: event.target.checked}})));
	};
	
	// CHECK FORM VALIDITY
	const checkFormValidity = () => {
		if (form.fields.company !== '' && form.fields.firstname !== '' && form.fields.lastname !== '' && form.fields.street !== '' && form.fields.plz !== '' && form.fields.town !== '' && form.fields.country !== '' && form.fields.date !== '' && form.fields.consent === true && form.fields.signature !== '') {
			setForm((form) => ({...form, state: {...form.state, isValid: true}}));
		} else {
			setForm((form) => ({...form, state: {...form.state, isValid: false}}));
		}
	};
	
	// HANDLE RESET SIGNATURE
	const handleResetSignature = (event) => {
		event.preventDefault();
		signaturePad().clear();
		setForm(form => ({
			...form,
			fields: {
				...form.fields,
				signature: '',
			},
		}));
	};
	
	// HANDLE SUBMIT
	const handleSubmit = (event) => {
		
		// PREVENT DEFAULT
		event.preventDefault();
		
		// PRINT SOMETHING
		console.log('click');
		
		// GET VALUES
		createContractPdf({values: form.fields})
		
		
		
	};
	
	// SETUP SIGNATURE-PAD
	onMount(() => {
		const signature = new SignaturePad(signaturePadRef);
		setSignaturePad(signature);
	});
	
	// OBSERVE FORM
	createEffect(() => {
		checkFormValidity();
	});
	
	// RENDER
	return (
	<div class='sidebar'>
		<h3 class='sidebar__heading'>Non-Disclosure Agreement</h3>
		<form class='sidebar__form form' action=''>
			<TextInput className='form__input form__input--100' label='Company' name='company' id='company' value={form.fields.company} onInput={(event) => handleTextInputUpdate(event, 'company')}/>
			<TextInput className='form__input form__input--100' label='Firstname' name='firstname' id='firstname' value={form.fields.firstname} onInput={(event) => handleTextInputUpdate(event, 'firstname')}/>
			<TextInput className='form__input form__input--100' label='Lastname' name='lastname' id='lastname' value={form.fields.lastname} onInput={(event) => handleTextInputUpdate(event, 'lastname')}/>
			<TextInput className='form__input form__input--100' label='Street' name='street' id='street' value={form.fields.street} onInput={(event) => handleTextInputUpdate(event, 'street')}/>
			<TextInput className='form__input form__input--25' label='PLZ' name='plz' id='plz' value={form.fields.plz} onInput={(event) => handleTextInputUpdate(event, 'plz')}/>
			<TextInput className='form__input form__input--75' label='Town' name='town' id='town' value={form.town} onInput={(event) => handleTextInputUpdate(event, 'town')}/>
			<TextInput className='form__input form__input--100' label='Country' name='country' id='country' value={form.fields.country} onInput={(event) => handleTextInputUpdate(event, 'country')}/>
			<DateInput className='form__input form__input--100' label='Date' name='date' id='date' value={form.fields.date} onInput={(event) => handleTextInputUpdate(event, 'date')}/>
			<CheckboxInput className='form__input form__input--100' label='Consent' options={[{name: 'consent', id: 'consent', value: 'consent', onInput: (event) => handleCheckboxInputUpdate(event, 'consent'), label: 'I hereby confirm that I have thoroughly read, fully understood, and accept the terms and conditions outlined in the Non-Disclosure Agreement provided to me. '}]}/>
			<CanvasInput className='form__input form__input--100' label='Signature' name='signature' id='signature' ref={signaturePadRef} onEnd={(event) => handleCanvasInputUpdate(event)} onReset={(event) => handleResetSignature(event)}/>
			<SubmitInput className='form__input form__input--100' label='abschliessen' disabled={!form.state.isValid} onClick={(e) => handleSubmit(e)}/>
		</form>
	</div>
	);
	
};

// EXPORTS
export default Sidebar;