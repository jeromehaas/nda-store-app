// IMPORTS
import transporter from '~/lib/transporter.js';

// POST REQUEST
export const POST = async({request}) => {
	
	// GET BODY
	const body = await request.json();
	
	// SETUP OPTIONS
	const mailOptions = {
		from: 'no-reply@mail.eora-energy.ch',
		to: body.email,
		bcc: 'nda@eora-energy.ch',
		subject: 'Your NDA document',
		text: 'hello world!',
		attachments: [{
			filename: 'nda-document.pdf',
			content: body.attachment,
			encoding: 'base64',
		}],
	};
	
	// SEND EMAIL
	await transporter.sendMail(mailOptions);
	
	// GET USER
	const data = {
		message: 'Document has been dispatched successfully!',
		hasError: false,
	};
	
	// SEND RESPONSE
	return data;
	
};
