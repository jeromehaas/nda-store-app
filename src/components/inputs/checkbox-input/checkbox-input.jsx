// IMPORTS
import './checkbox-input.scss';

// TEXT INPUT
const CheckboxInput = ({className, options, label, name, id}) => {
	
	// RENDER
	return (
	<div class={`checkbox-input ${className}`}>
		<label class='checkbox-input__label' for={name}>{label}</label>
		{options.map((option) => (
		<div class='checkbox-input__options options' key={option.id}>
			<input class='options__field' name={name} id={id} type='checkbox'/>
			<p class='options__label'>{option.label}</p>
		</div>
		))}
	</div>
	);
	
};

// EXPORTS
export default CheckboxInput;