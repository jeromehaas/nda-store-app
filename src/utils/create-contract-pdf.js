// IMPORTS
import { jsPDF } from '~/lib/jspdf.js';

// CREATE CONTRACT PDF
const createContractPdf = ({values}) => {
	
	// FORMAT DATE
	const formatDate = (dateString) => {
		const [year, month, day] = dateString.split('-');
		return `${day}.${month}.${year}`;
	};
	
	// CREATE PDF
	const pdf = new jsPDF({
		orientation: 'portrait',
		unit: 'px',
		layout: 'a4',
	});
	
	// REMOVE FIRST PAGE
	pdf.deletePage(1);
	
	// ADD PAGE
	pdf.addPage('a4', 'portrait');
	
	// ADD SPACER
	pdf.spacer(50);
	
	// ADD HEADER
	pdf.header('Non-Disclosure Agreement');
	
	// 1. PARTIES INVOLVED
	pdf.title('1. Parties involved',);
	pdf.textBlock('This confidentiality agreement, entered into on 27.07.2024 , includes the following parts:');
	pdf.addressLeft(['EORA Energy SNC', 'Luca Meli', 'La Risciada 28', `6915 Pambio-Noranco`, 'Switzerland' ]);
	pdf.addressRight([values.company, `${values.firstname} ${values.lastname}`, values.street, `${values.plz} ${values.town}`, values.country ]);
	
	// ADD TITLE
	pdf.title('2. Duty of secret',);
	pdf.textBlock('The obligations of secrecy are mutual. The two parties involved in this agreement undertake to strictly comply with secrecy obligations. Both Parties are obliged to keep confidential all confidential information exchanged during the execution of this Agreement, without exception.');
	
	// 3. COOPERATION
	pdf.title('3. Cooperation');
	pdf.textBlock('The Parties intend to enter into a collaboration within the framework of a project  or business activity, in which the Disclosing  Party shares confidential information related to the business idea, product or process to  the Receiving Party, which acts as a collaborator or investor interested in participating in or supporting the development, implementation or financing of the project or business activity.  The collaboration will be governed by this confidentiality agreement in order to protect the confidentiality of the information exchanged between  the Parties and  to regulate the rights and obligations of the same in the context of the collaboration.');
	pdf.textBlock('This agreement regulates the cooperation between the Parties involved. The nature of the collaboration is defined as cooperation aimed at the joint development, implementation and commercialization of the Disclosing Party\'s idea/product/service, involving the active participation, contribution of resources or financial support from  the Receiving Party interested in participating in or supporting the project/business activity.');
	pdf.textBlock('Confidential information provided or received as part of this cooperation may only be used for the agreed purposes. The use of such information for any other purpose without the written consent of the parties involved is prohibited.');
	pdf.textBlock('');
	
	// 4. DEFINITION OF CONFIDENTIAL INFORMATION
	pdf.title('4. Definition of confidental information');
	pdf.textBlock('All confidential information received shall be used solely for the purposes of this collaboration.');
	
	// 5. DEFINITION OF CONFIDENTIAL INFORMATION
	pdf.title('5. Non confidental informa');
	pdf.textBlock('The following information is outside the scope of the agreement and is not subject to secrecy obligations. Information that is:');
	pdf.listItem('already in the public domain or become public knowledge through no fault of the Receiving Party.')
	pdf.listItem('legally in the possession of the Receiving Party at the time of entering into the NDA.')
	pdf.listItem('communicated to the Receiving Party by third parties without breach of confidentiality obligations.')
	pdf.listItem('developed independently  of the Receiving Party without the use of confidential information.')
	
	// 6. PROHIBITION AND LIMITS OF DISCLOSURE
	pdf.title('6. Prohibitiooon and limits of disclosure');
	pdf.textBlock('It is expressly forbidden to disclose confidential information to any third party without the written permission of the party concerned. It is essential to protect the integrity and confidentiality of the information involved in this agreement by avoiding any unauthorized disclosure.');
	
	// 7. PROTECTION OF CONFIDENTAL INFORMATION
	pdf.title('7. Protection of confidental information');
	pdf.textBlock('The Receiving Party  of the Confidential Information shall take all reasonable and necessary steps to protect the confidentiality, integrity and security of the Confidential Information. These measures may include appropriate technical, organizational, and procedural safeguards designed to prevent unauthorized access, misuse, or unauthorized disclosures.');
	
	// 8. PENALTY CLAUSE
	pdf.title('8. Penalty clause');
	pdf.textBlock('In the event of a breach of this duty of secrecy, we reserve the right to expressly assert claims for compensation and any associated gains arising from the unlawful use of the aforementioned information, in accordance with the obligations to compensate for contractual breaches under the Code of Obligations.');
	
	// 9. LEGALLY REQUIRED DISCLOSURE
	pdf.title('9. Legally required disclosure');
	pdf.textBlock('In the event that  the Receiving Party  is required by law to disclose confidential information, such as in a judicial setting, immediate notice must be provided to the Disclosed Party. This notification allows the affected party to take appropriate measures to protect its interests, such as requesting precautionary measures.');
	
	// 10. PROHIBITION AND LIMITS OF DISCLOSURE
	pdf.title('10. Protection of confidental information');
	pdf.textBlock('The duration of the agreement is congruent with the duration of the collaboration. This Confidentiality Agreement shall have a duration of three 3 years from the date of signature by the Parties. At the end of such period, the contract will automatically renew for further periods of 1 year, unless either  Party notifies the  other Party in writing of its intention not to renew the contract at least thirty 30 days before the expiration of the current period. In the event of automatic renewal, all provisions and obligations under this Agreement will continue in effect during the renewal period.');
	
	// 11. RESTITUTION AND DESTRUCTION OF CONFIDENTAL INFORMATION
	pdf.title('11. Restitution and destruction of confidential information');
	pdf.textBlock('Upon written request by  the Disclosing Party or  upon termination of this Agreement, the Receiving Party  shall immediately return all copies of the Confidential Information or, upon the Disclosing Party\'s request, destroy all copies thereof.');
	
	// 12. PROHIBITION AND LIMITS OF DISCLOSURE
	pdf.title('12. Applicable law and jurisdicition');
	pdf.textBlock('This Agreement shall be construed and governed by the laws of the Swiss Confederation. Any dispute relating to the interpretation, execution or termination of this Agreement shall be submitted to any court having jurisdiction.');
	
	// 13. RESTITUTION AND DESTRUCTION OF CONFIDENTAL INFORMATION
	pdf.title('13. Final provisions');
	pdf.textBlock('This Agreement constitutes the entire agreement between the Parties with respect to its subject matter and supersedes all prior agreements or understandings, whether written or oral. Any modification to this Agreement must be made in writing and signed by both Parties.');
	
	// 14. RESTITUTION AND DESTRUCTION OF CONFIDENTAL INFORMATION
	pdf.title('14. Signatures');
	pdf.signatureLeft(['EORA Energy SNC', formatDate(values.date), 'Luca Meli']);
	pdf.signatureRight([values.company, formatDate(values.date), values.signature, `${values.firstname} ${values.lastname}`]);
	
	// CLOSE PDF
	pdf.close();
	
	// GET ARRAY-BUFFER
	const arrayBuffer = pdf.output('arraybuffer');
	
	// SAVE FILE
	pdf.save('my-file.pdf');
	
};

// EXPORTS
export {
	createContractPdf,
};


