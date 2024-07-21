// IMPORTS
import './preview.scss';
import {FormContext} from '~/contexts/form-context.jsx';
import {useContext} from 'solid-js';

// PREVIEW
const Preview = () => {
	
	// SETUP CONTEXT
	const [form] = useContext(FormContext);
	
	// FORMAT DATE
	const formatDate = (dateString) => {
		const [year, month, day] = dateString.split('-');
		return `${day}.${month}.${year}`;
	};
	
	// RENDER
	return (
	<div class='preview'>
		<div class='preview__document document'>
			<div class='document__spacer spacer--top'></div>
			<h2 class='document__heading'>Non-Disclosure Agreement</h2>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>1. Parties involved</h3>
				<p class='paragraph__text'>This confidentiality agreement, entered into on {formatDate(form.fields.date)} , includes the following parts:</p>
				<div class='paragraph__parties parties'>
					<div class='parties__address address'>
						<p class='address__item'>{form.fields.company || 'Company'}</p>
						<p class='address__item'>{form.fields.firstname || 'Firstname'} {form.fields.lastname || 'Lastname'}</p>
						<p class='address__item'>{form.fields.street || 'Street'}</p>
						<p class='address__item'>{form.fields.plz || 'PLZ'} {form.fields.town || 'Town'}</p>
						<p class='address__item'>{form.fields.country || 'Country'}</p>
					</div>
					<ul class='parties__address address'>
						<p class='address__item'>EORA Energy SNC</p>
						<p class='address__item'>Luca Meli</p>
						<p class='address__item'>Via della Stazione 39</p>
						<p class='address__item'>6780 Airolo</p>
						<p class='address__item'>Switzerland</p>
					</ul>
				</div>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>2. Duty of secret</h3>
				<p class='paragraph__text'>The obligations of secrecy are mutual. The two parties involved in this agreement undertake to strictly comply with secrecy obligations. Both Parties are obliged to keep confidential all confidential information exchanged during the execution of this Agreement, without exception.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>3. Cooperation</h3>
				<p class='paragraph__text'>The Parties intend to enter into a collaboration within the framework of a project  or business activity, in which the Disclosing  Party shares confidential information related to the business idea, product or process to  the Receiving Party, which acts as a collaborator or investor interested in participating in or supporting the development, implementation or financing of the project or business activity.  The collaboration will be governed by this confidentiality agreement in order to protect the confidentiality of the information exchanged between  the Parties and  to regulate the rights and obligations of the same in the context of the collaboration.</p>
				<p class='paragraph__text'>This agreement regulates the cooperation between the Parties involved. The nature of the collaboration is defined as cooperation aimed at the joint development, implementation and commercialization of the Disclosing Party's idea/product/service, involving the active participation, contribution of resources or financial support from  the Receiving Party interested in participating in or supporting the project/business activity.  </p>
				<p class='paragraph__text'>Confidential information provided or received as part of this cooperation may only be used for the agreed purposes. The use of such information for any other purpose without the written consent of the parties involved is prohibited.  </p>
				<p class='paragraph__text'>All confidential information received shall be used solely for the purposes of this collaboration.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>4. Definition of confidental information</h3>
				<p class='paragraph__text'>Information subject to secrecy obligations is defined as any information, data, technical knowledge, trade secrets or other confidential information, in any form or by any means, which is provided or disclosed by either Party, whether orally or in writing, or which is accessed or communicated through presentations, documents, samples, etc., concerning the activities, products,  the processes, operations, research, development, inventions, business strategies, or other information related to the Disclosing Party.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>5. Non confidentaal information</h3>
				<p class='paragraph__text'>The following information is outside the scope of the agreement and is not subject to secrecy obligations. Information that is:</p>
				<ul class='paragraph__list list'>
					<li class='list__item'>already in the public domain or become public knowledge through no fault of the Receiving Party. </li>
					<li class='list__item'>legally in the possession of the Receiving Party at the time of entering into the NDA.</li>
					<li class='list__item'>communicated to the Receiving Party by third parties without breach of confidentiality obligations.</li>
					<li class='list__item'>developed independently  of the Receiving Party without the use of confidential information.</li>
				</ul>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>6. Prohibition and limits of disclosure</h3>
				<p class='paragraph__text'>It is expressly forbidden to disclose confidential information to any third party without the written permission of the party concerned. It is essential to protect the integrity and confidentiality of the information involved in this agreement by avoiding any unauthorized disclosure.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>7. Protection of configental information</h3>
				<p class='paragraph__text'>The Receiving Party  of the Confidential Information shall take all reasonable and necessary steps to protect the confidentiality, integrity and security of the Confidential Information. These measures may include appropriate technical, organizational, and procedural safeguards designed to prevent unauthorized access, misuse, or unauthorized disclosures.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>8. Penalty Clause</h3>
				<p class='paragraph__text'>In the event of a breach of this duty of secrecy, we reserve the right to expressly assert claims for compensation and any associated gains arising from the unlawful use of the aforementioned information, in accordance with the obligations to compensate for contractual breaches under the Code of Obligations.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>9. Legally required disclosure</h3>
				<p class='paragraph__text'>In the event that  the Receiving Party  is required by law to disclose confidential information, such as in a judicial setting, immediate notice must be provided to the Disclosed Party. This notification allows the affected party to take appropriate measures to protect its interests, such as requesting precautionary measures.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>10. Duration and confidentiality obligations</h3>
				<p class='paragraph__text'>The duration of the agreement is congruent with the duration of the collaboration. This Confidentiality Agreement shall have a duration of three 3 years from the date of signature by the Parties. At the end of such period, the contract will automatically renew for further periods of 1 year, unless either  Party notifies the  other Party in writing of its intention not to renew the contract at least thirty 30 days before the expiration of the current period. In the event of automatic renewal, all provisions and obligations under this Agreement will continue in effect during the renewal period.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>11. Restitution and destruction of confidential information</h3>
				<p class='paragraph__text'>Upon written request by  the Disclosing Party or  upon termination of this Agreement, the Receiving Party  shall immediately return all copies of the Confidential Information or, upon the Disclosing Party's request, destroy all copies thereof.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>12. Applicable law and jurisdiction</h3>
				<p class='paragraph__text'>This Agreement shall be construed and governed by the laws of the Swiss Confederation. Any dispute relating to the interpretation, execution or termination of this Agreement shall be submitted to any court having jurisdiction.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>13. Final provisions</h3>
				<p class='paragraph__text'>This Agreement constitutes the entire agreement between the Parties with respect to its subject matter and supersedes all prior agreements or understandings, whether written or oral. Any modification to this Agreement must be made in writing and signed by both Parties.</p>
			</div>
			<div class='document__paragraph paragraph'>
				<h3 class='paragraph__heading'>14. Signatures </h3>
				<div class='paragraph__signatures signatures'>
					<div class='signatures__confirmation confirmation'>
						<img class='confirmation__signature' src='signature.svg' />
						<figure class='confirmation__line'></figure>
						<div class='confirmation__infos infos'>
							<p class='infos__company'>{form.fields.company || 'Company'}</p>
							<p class='infos__company'>{formatDate(form.fields.date)}</p>
							<p class='infos__company'>{form.fields.firstname || 'Firstname'} {form.fields.lastname || 'Lastname'}</p>
						</div>
					</div>
					<div class='signatures__confirmation confirmation'>
						{form.fields.signature ? <img class='confirmation__signature' src={form.fields.signature} /> : <div class='confirmation__signature-placeholder'></div>}
						<figure class='confirmation__line'></figure>
						<div class='confirmation__infos infos'>
							<p class='infos__company'>Eora Energy </p>
							<p class='infos__company'>{formatDate(form.fields.date)}</p>
							<p class='infos__company'>Luca Meli</p>
						</div>
					</div>
				</div>
			</div>
			<div class='document__spacer spacer--bottom'></div>
		</div>
	</div>
	);
	
};

// EXPORTS
export default Preview;