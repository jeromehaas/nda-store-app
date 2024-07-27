// IMPORTS
import { createContractPdf } from '~/utils/create-contract-pdf.js';

// POST REQUEST
export const POST = () =>  {
	
	// RUN
	createContractPdf();
	
	
	
	// SEND RESPONSE
	return new Response('hello du');
	
};
