// IMPORTS
import './preview.scss';
import {FormContext} from '~/contexts/form-context.jsx';
import {createEffect, createSignal, onCleanup, useContext} from 'solid-js';
import NdaDomCreator from '~/utils/nda-dom-creator.js';

// PREVIEW
const Preview = () => {
	
	// SETUP CONTEXT
	const [form] = useContext(FormContext);
	
	// SETUP SCROLL-POSITION
	const [scrollPosition, setScrollPosition] = createSignal(0);
	
	// SETUP REF
	let previewRef;
	let documentRef;
	let documentContainerRef;
	
	// SETUP DOCUMENT
	const ndaDomCreator = new NdaDomCreator();
	
	// HANDLE UPDATE SCROLL-POSITION
	const handleUpdateScrollPosition = () => {
		
		// UPDATE SCROLL-POSITION
		setScrollPosition(documentRef.scrollTop);
		
	};
	
	// REACT TO SCROLL EVENTS
	createEffect(() => {
		
		// ADD EVENT-LISTENER
		documentRef.addEventListener('scroll', handleUpdateScrollPosition);
		
		// ON CLEANUP
		onCleanup(() => {
			
			// CLEANUP EVENT-LISTENER
			documentRef.removeEventListener('scroll', handleUpdateScrollPosition);
			
		});
		
	});
	
	// REACT TO FORM FIELDS CHANGE
	createEffect(() => {
		
		// RENDER DOCUMENT
		const document = ndaDomCreator.print({language: form.language, variables: form.fields});
		
		// CLEAR HTML
		documentContainerRef.innerHTML = '';
		
		// APPEND TO DOM
		documentContainerRef.appendChild(document);
		
		// UPDATE SCROLL-POSITION
		documentRef.scrollTop = scrollPosition();
		
	}, [form]);
	
	// RENDER
	return (
	<div class='preview' ref={previewRef}>
		<div class='document' ref={documentRef}>
			<div class='document__spacer spacer--top'></div>
			<div class='document__container' ref={documentContainerRef}></div>
			<div class='document__spacer spacer--bottom'></div>
		</div>
	</div>
	);
};

// EXPORTS
export default Preview;