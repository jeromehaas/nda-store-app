// DISPATCHER
class Dispatcher {
	
	// CONSTRUCTOR
	constructor () {};
	
	// SEND MAIL
	sendMail = async ({ variables, language, attachment }) => {
		
		// MESSAGE
		const message = {
			en: `Hello ${variables.firstname} ${variables.lastname},\n\nThank you for successfully signing the attached Non-Disclosure Agreement (NDA). Your signed version has been digitally saved.\n\nIf you have any questions regarding the document or the next steps, please feel free to contact us.\n\nBest regards,\nEORA Energy SNC`,
			de: `Guten Tag ${variables.firstname} ${variables.lastname},\n\nvielen Dank, dass Sie das beigefügte Vertraulichkeitsabkommen (NDA) erfolgreich unterzeichnet haben. Ihre unterzeichnete Version wurde nun digital gespeichert.\n\nSollten Sie noch Fragen zu dem Dokument oder dem weiteren Ablauf haben, stehen wir Ihnen gerne zur Verfügung.\n\nFreundliche Grüsse,\nEORA Energy SNC`,
			it: `Buongiorno ${variables.firstname} ${variables.lastname},\n\nGrazie per aver firmato con successo l'Accordo di Riservatezza (NDA) allegato. La tua versione firmata è stata salvata digitalmente.\n\nSe hai domande sul documento o sui prossimi passaggi, non esitare a contattarci.\n\nCordiali saluti,\nEORA Energy SNC`
		};
		
		// SEND REQUEST
		const response = await fetch('/api/transmission', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				receiver: variables.email,
				message: message[language],
				attachment: attachment
			})
		});
		
		// PARSE RESPONSE
		const res = await response.json();
		
	};
	
}

// EXPORTS
export default Dispatcher;

