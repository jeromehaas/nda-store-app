// IMPORTS
import {jsPDF} from '~/lib/jspdf.js';
import partnerNda from '~/documents/partner-nda.json';

// CLASS NDA PDF CREATOR
class NdaPdfCreator {
	
	// CONSTRUCTOR
	constructor() {
		
		// SETUP TEMPLATES
		this.templates = {
			partnerNda: partnerNda,
			memberNda: partnerNda,
		};
		
		// SETUP CONTENT
		this.content = null;
		
		// SETUP PDF
		this.pdf = null;
		
	};
	
	// FORMAT DATE
	formatDate = (dateString) => {
		const [year, month, day] = dateString.split('-');
		return `${day}.${month}.${year}`;
	};
	
	// GET ARRAY-BUFFER
	getDocument = () => {
		
		// GET ARRAY-BUFFER
		const document = this.pdf.output('datauristring').split(',')[1];
		
		// RETURN
		return document;
		
	};
	
	// PRINT
	printDocument = ({language, variables}) => {
		
		// RENDER AND INSERT VARIABLES
		this.render({language, variables});
		
	};
	
	// REPLACE PLACEHOLDERS
	replacePlaceholders = (text, variables) => {
		
		// SETUP REPLACEMENTS
		const replacements = {
			...variables,
			date: this.formatDate(variables.date),
		};
		
		return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => {
			return replacements[key] !== undefined ? replacements[key] : match;
		});
	};
	
	// REPLACE PLACEHOLDERS RECURSIVELY
	replacePlaceholdersRecursively = (value, variables) => {
		
		// SETUP REPLACEMENTS
		const replacements = {
			...variables,
		};
		
		// CHECK TYPE
		if (typeof value === 'string') {
			
			// GET UPDATED VALUES
			const updatedValue = this.replacePlaceholders(value, replacements);
			
			// RETURN
			return updatedValue;
			
		}
		
		// CHECK TYPE
		if (Array.isArray(value)) {
			
			// GET UPDATED VALUE
			const updatedValue = value.map(item => this.replacePlaceholdersRecursively(item, replacements));
			
			// RETURN
			return updatedValue;
			
		}
		
		// CHECK TYPE
		if (typeof value === 'object' && value !== null) {
			
			// DEFINE PLACEHOLDER
			const updatedValue = {};
			
			// GET UPDATED VALUE
			for (const key of Reflect.ownKeys(value)) {
				updatedValue[key] = this.replacePlaceholdersRecursively(value[key], replacements);
			}
			
			// RETURN
			return updatedValue;
			
		}
		
	};
	
	// RENDER
	render = ({language, variables}) => {
		
		this.pdf = new jsPDF({
			orientation: 'portrait',
			unit: 'px',
			layout: 'a4',
		});
		
		// REMOVE FIRST PAGE
		this.pdf.deletePage(1);
		
		// ADD PAGE
		this.pdf.addPage('a4', 'portrait');
		
		// ADD SPACER
		this.pdf.spacer(50);
		
		// LOOP OVER CONTENT
		this.templates['memberNda'].map((block) => {
			
			// LOOP OVER CONTENT
			block.map((content) => {
				
				// REPLACE PLACEHOLDERS IN CONTENT.VALUE RECURSIVELY
				const updatedContent = this.replacePlaceholdersRecursively(content.value[language], variables);
				
				// CHECK TYPE
				if (content.type === 'heading') {
					
					// APPEND TEXT
					this.pdf.header(updatedContent);
					
				}
				
				// CHECK TYPE
				if (content.type === 'subheading') {
					
					// APPEND TEXT
					this.pdf.title(updatedContent);
					
				}
				
				// CHECK TYPE
				if (content.type === 'paragraph') {
					
					// APPEND TEXT
					this.pdf.textBlock(updatedContent);
					
				}
				
				// CHECK TYPE
				if (content.type === 'list') {
					
					// APPEND COLUMN-LIST
					this.pdf.list(updatedContent);
					
				}
				
				// CHECK TYPE
				if (content.type === 'two-column-list') {
					
					// APPEND TWO-COLUMN-LIST
					this.pdf.twoColumnList(updatedContent);
					
				}
				
				// CHECK TYPE
				if (content.type === 'two-column-signatures') {
					
					// APPEND TWO-COLUMN-LIST
					this.pdf.twoColumnSignature(updatedContent);
					
				}
				
			});
			
		});
		
		// CLOSE PDF
		this.pdf.close();
		
	};
	
}

// EXPORTS
export default NdaPdfCreator;


