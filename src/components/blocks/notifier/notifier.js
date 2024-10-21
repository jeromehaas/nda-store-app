// IMPORT
import './notifier.scss';
import { useContext } from 'solid-js';
import { NotifierContext } from '~/contexts/notifier-context.jsx';
import { FormContext } from '~/contexts/form-context.jsx';

// NOTIFIER
const Notifier = () => {
	
	// SETUP CONTEXT
	const [form, setForm] = useContext(FormContext);
	const [notifier, setNotifier] = useContext(NotifierContext);
	
	// RENDER
	return (
		<div class={`notifier ${notifier.isVisible && 'notifier--is-visible' } `}>
			{notifier.code === 'S1' && (
				<div class="notifier__banner">
					<img class='notifier__icon' src="./icons/icon-success.svg" alt="Success"/>
					<p class="notifier__text">
						{form.language === 'en' && ('The message was sent successfully!')}
						{form.language === 'de' && ('Die Nachricht wurde übermittelt!')}
						{form.language === 'it' && ('Il messaggio è stato trasmesso con successo!')}
					  {form.language === 'fr' && ('Le message a été envoyé avec succès!')}
					</p>
				</div>
			)}
			{notifier.code === 'E1' && (
				<div class="notifier__banner">
					<img class='notifier__icon' src="./icons/icon-error.svg" alt="Error"/>
					<p class="notifier__text">
						{form.language === 'en' && ('The message could not be delivered!')}
						{form.language === 'de' && ('Die Nachricht konnte nicht übermittelt werden!')}
						{form.language === 'it' && ('Non è stato possibile trasmettere il messaggio!')}
						{form.language === 'fr' && ('Le message n\'a pas pu être envoyé!')}
					</p>
				</div>
			)}
		</div>
	);
	
};

// EXPORTS
export default Notifier;