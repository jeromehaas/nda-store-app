// IMPORTS
import partnerNda from '~/documents/partner-nda.json';

// CLASS NDA DOM CREATOR
class NdaDomCreator {
	
	// CONSTRUCTOR
	constructor() {
		
		// SETUP TEMPLATES
		this.templates = {
			partnerNda: partnerNda,
			memberNda: partnerNda,
		};
		
		// SETUP DOCUMENT
		this.document = null;
		
	};
	
	// FORMAT DATE
	formatDate = (dateString) => {
		const [year, month, day] = dateString.split('-');
		return `${day}.${month}.${year}`;
	};
	
	// PRINT
	print = ({language, variables}) => {
		
		// RENDER AND INSERT VARIABLES
		this.render({language: language});
		this.insertVariables({variables: variables});
		
		// RETURN
		return this.document;
		
		
	};
	
	
	// CREATE NODE
	createNode = ({tag, className, attributes}) => {
		
		// CREATE ELEMENT
		const element = document.createElement(tag);
		
		// ADD CLASS
		if (className) element.className = className;
		
		// ADD ATTRIBUTES
		for (const key in attributes) {
			element.setAttribute(key, attributes[key]);
		}
		
		// RETURN
		return element;
		
	};
	
	// REPLACE PLACEHOLDERS
	replacePlaceholders = (text, replacements) => {
		return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => {
			return replacements[key] !== undefined ? replacements[key] : match;
		});
	};
	
	// INSERT VARIABLES
	insertVariables = ({variables}) => {
		
		// MODIFY VARIABLES
		const replacements = {
			...variables,
			date: this.formatDate(variables.date),
		};
		
		// TRAVERSE AND REPLACE
		this.traverseAndReplace({node: this.document, variables: replacements});
		
	};
	
	// TRAVERSE NODE
	traverseAndReplace({node, variables}) {
		
		// CHECK FOR NODE-TYPE
		if (node.nodeType === Node.TEXT_NODE) {
			node.textContent = this.replacePlaceholders(node.textContent, variables);
		}
		
		// CHECK FOR NODE-TYPE
		if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'IMG') {
			
			// GET SOURCE
			const src = node.getAttribute('src');
			
			// CREATE NEW SOURCE
			const newSrc = this.replacePlaceholders(src, variables);
			
			// APPEND SOURCE
			node.setAttribute('src', newSrc || 'signatures/signature-placeholder.svg');
			
		}
		
		// RECURSIVELY TRAVERSE CHILD NODES
		node.childNodes.forEach(child => this.traverseAndReplace({node: child, variables: variables}));
		
	};
	
	// RENDER
	render = ({language}) => {
		
		// CREATE DOCUMENT
		const document = this.createNode({tag: 'div', className: 'document__content'});
		
		// LOOP OVER DOCUMENT
		this.templates['partnerNda'].map((block) => {
			
			// CREATE ELEMENT
			const blockNode = this.createNode({tag: 'div', className: 'document__content block'});
			
			// LOOP OVER CONTENTS
			block.map((content) => {
				
				// CHECK TYPE
				if (content.type === 'heading') {
					
					// CREATE ELEMENT
					const contentNode = this.createNode({tag: 'h2', className: 'document__content heading'});
					
					// APPEND TEXT
					contentNode.innerText = content.value[language];
					
					// APPEND CONTENT
					blockNode.append(contentNode);
					
				}
				
				// CHECK TYPE
				if (content.type === 'subheading') {
					
					// CREATE ELEMENT
					const contentNode = this.createNode({tag: 'h3', className: 'document__content subheading'});
					
					// APPEND TEXT
					contentNode.innerText = content.value[language];
					
					// APPEND CONTENT
					blockNode.append(contentNode);
					
				}
				
				// CHECK TYPE
				if (content.type === 'paragraph') {
					
					// CREATE NODE
					const contentNode = this.createNode({tag: 'p', className: 'document__content paragraph'});
					
					// APPEND TEXT
					contentNode.innerText = content.value[language];
					
					// APPEND CONTENT
					blockNode.append(contentNode);
					
				}
				
				// CHECK TYPE
				if (content.type === 'two-column-list') {
					
					// CREATE NODE
					const contentNode = this.createNode({tag: 'div', className: 'document__content two-column-list'});
					
					// LOOP OVER INFOS
					content.value[language].infos.map((info) => {
						
						// CREATE COLUMN NODE
						const columnNode = this.createNode({tag: 'div', className: 'two-column-list__column'});
						
						// LOOP OVER ROWS
						info.map((text) => {
							
							// CREATE ROW NODE
							const rowNode = this.createNode({tag: 'p', className: 'two-column-list__row'});
							
							// APPEND TEXT
							rowNode.innerText = text;
							
							// APPEND ROW-NODE TO COLUMN-NODE
							columnNode.append(rowNode);
							
						});
						
						// APPEND COLUMN-NODE TO CONTENT-NODE
						contentNode.append(columnNode);
						
					});
					
					// APPEND CONTENT-NODE TO BLOCK-NODE
					blockNode.append(contentNode);
					
				}
				
				// CHECK TYPE
				if (content.type === 'list') {
					
					// CREATE NODE
					const contentNode = this.createNode({tag: 'ul', className: 'document__content list'});
					
					// LOOP OVER ROWS
					content.value[language].infos.map((text) => {
						
						// CREATE ROW NODE
						const rowNode = this.createNode({tag: 'li', className: 'list__row'});
						
						// APPEND TEXT
						rowNode.innerText = text;
						
						// APPEND ROW-NODE TO COLUMN-NODE
						contentNode.append(rowNode);
						
					});
					
					// APPEND CONTENT-NODE TO BLOCK-NODE
					blockNode.append(contentNode);
					
				}
				
				// CHECK TYPE
				if (content.type === 'two-column-signatures') {
					
					// CREATE NODE
					const contentNode = this.createNode({tag: 'div', className: 'document__content signatures'});
					
					// LOOP OVER COLUMNS
					content.value[language].map((column) => {
						
						// CREATE NODES
						const columnNode = this.createNode({tag: 'div', className: 'signatures__column'});
						const imageNode = this.createNode({tag: 'img', className: 'signatures__image'});
						const lineNode = this.createNode({tag: 'figure', className: 'signatures__line'});
						
						// SET SOURCE
						imageNode.setAttribute('src', column.image.value);
						
						// APPEND IMAGE-NODE AND FIGURE-NODE TO COLUMN-NODE
						columnNode.append(imageNode);
						columnNode.append(lineNode);
						
						// CREATE INFOS-NODE
						const infosNode = this.createNode({tag: 'div', className: 'signatures__infos'});
						
						// LOOP OVER INFOS
						column.infos.map((text) => {
							
							// CREATE INFOS-NODE
							const rowNode = this.createNode({tag: 'div', className: 'signatures__info'});
							
							// APPEND TEXT
							rowNode.innerText = text;
							
							// APPEND ROW-NODE TO INFOS-NODE
							infosNode.append(rowNode);
							
						});
						
						// APPEND INFO-NODE TO COLUMN-NODE
						columnNode.append(infosNode);
						
						// APPEND CONTENT-NODE TO COLUMN-NODE
						contentNode.append(columnNode);
						
						// APPEND COLUMN-NODE TO BLOCK-CONTENT-NODE
						blockNode.append(contentNode);
						
					});
					
					// APPEND CONTENT-NODE TO BLOCK-NODE
					blockNode.append(contentNode);
					
				}
				
			});
			
			// APPEND ELEMENT
			document.appendChild(blockNode);
			
		});
		
		// RETURN
		this.document = document;
		
	};
	
}

// EXPORTS
export default NdaDomCreator;