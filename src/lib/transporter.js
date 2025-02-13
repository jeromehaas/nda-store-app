// IMPORTS
import nodemailer from 'nodemailer';

// GET ENV-VARIABLES
const {MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS} = process.env;

// TRANSPORTER
const transporter = nodemailer.createTransport({
	host: MAIL_HOST,
	port: MAIL_PORT,
	secure: false,
	auth: {
		user: MAIL_USER,
		pass: MAIL_PASS,
	},
});

// EXPORTS
export default transporter;