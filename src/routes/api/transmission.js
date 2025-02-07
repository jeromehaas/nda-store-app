// IMPORTS
import transporter from '~/lib/transporter.js';

// POST REQUEST
export const POST = async({request}) => {
	
	// GET BODY
	const body = await request.json();
	
	// SETUP OPTIONS
	const mailOptions = {
		from: 'EMAIL',
		to: body.receiver,
		bcc: 'EMAIL',
		subject: 'Your NDA document',
		text: body.message,
		attachments: [{
			filename: 'nda-document.pdf',
			content: body.attachment,
			encoding: 'base64',
		}],
	};
	
	// SEND EMAIL
	await transporter.sendMail(mailOptions);
	
	// DEFINE RESPONSE
	const data = {
		message: 'The document has been dispatched successfully!',
		hasError: false,
	};
	
	// SEND RESPONSE
	return data;
	
};
