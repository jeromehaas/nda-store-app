// IMPORTS
import {createContractPdf} from '~/utils/create-contract-pdf.js';

// POST REQUEST
export const POST = () => {
	
	// CREATE CONTRACT
	createContractPdf();
	
	// SEND RESPONSE
	return new Response('hello du');
	
};
