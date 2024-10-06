// IMPORTS
import './checkbox-input.scss';
import {FormContext} from '~/contexts/form-context.jsx';
import {useContext} from 'solid-js';

// TEXT INPUT
const CheckboxInput = (props) => {
	
	// SETUP CONTEXT
	const [form] = useContext(FormContext);
	
	// RENDER
	return (
	<div class={`checkbox-input ${props.className}`}>
		<label class='checkbox-input__label' for={props.name}>{props.label[form.language]}</label>
		{props.options.map((option) => (
		<div class='checkbox-input__options options'>
			<input class='options__field' name={option.name} id={option.id} type='checkbox' checked={option.value} onClick={option.onInput}/>
			<p class='options__label'>{option.label[form.language]}</p>
		</div>
		))}
	</div>
	);
	
};

// EXPORTS
export default CheckboxInput;