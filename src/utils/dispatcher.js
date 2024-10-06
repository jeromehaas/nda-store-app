// DISPATCHER
class Dispatcher {
	
	// CONSTRUCTOR
	constructor() {};
	
	// SEND MAIL
	sendMail = async ({ variables, attachment }) => {
		
		// SEND REQUEST
		const response = await fetch('/api/contract', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: variables.email,
				attachment:  attachment,
			}),
		});
		
		// PARSE RESPONSE
		const res = await response.json();
		
	};
	
}

// EXPORTS
export default Dispatcher;

