// IMPORTS
import './sidebar.scss';
import TextInput from '~/components/inputs/text-input/text-input.jsx';
import DateInput from '~/components/inputs/date-input/date-input.jsx';
import CheckboxInput from '~/components/inputs/checkbox-input/checkbox-input.jsx';
import CanvasInput from '~/components/inputs/canvas-input/canvas-input.jsx';
import SubmitInput from '~/components/inputs/submit-input/submit-input.jsx';

// SIDEBAR
const Sidebar = () => {
	
	// RENDER
	return (
	<div class='sidebar'>
		<h2 class='sidebar__heading'>Non-Disclosure Agreement</h2>
		<form class='sidebar__form form' action=''>
			<TextInput className='form__input form__input--100' label='Company' name='company' id='company'/>
			<TextInput className='form__input form__input--100' label='Firstname' name='firstname' id='firstname'/>
			<TextInput className='form__input form__input--100' label='Lastname' name='lastname' id='lastname'/>
			<TextInput className='form__input form__input--100' label='Street' name='street' id='street'/>
			<TextInput className='form__input form__input--25' label='PLZ' name='plz' id='plz'/>
			<TextInput className='form__input form__input--75' label='Town' name='town' id='town'/>
			<TextInput className='form__input form__input--100' label='Country' name='country' id='coutnry'/>
			<DateInput className='form__input form__input--100' label='Date' name='date' id='date'/>
			<CheckboxInput className='form__input form__input--100' label='Consent' options={[{ name: 'consent', id:'consent', value: 'consent', label: 'I hereby confirm that I have thoroughly read, fully understood, and accept the terms and conditions outlined in the Non-Disclosure Agreement provided to me. '}]}/>
			<CanvasInput className='form__input form__input--100' label='Signature' name='signature' id='signature' />
			<SubmitInput className='form__input form__input--100' label='abschliessen'/>
		</form>
	</div>
	);
	
};

// EXPORTS
export default Sidebar;