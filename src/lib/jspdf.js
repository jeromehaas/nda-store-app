// IMPORTS
import {jsPDF} from 'jspdf';

// SETUP COLORS
jsPDF.API.colors = {
	white: '#FFFFFF',
	black: '#000000',
	bordeaux: '#8C072F',
	grey: '#ECECEC',
};

// ADD CUSTOM FUNCTION TO TRACK HEIGHT
jsPDF.API.height = 0;

// ADD CUSTOM FUNCTION TO CHECK SPACE
jsPDF.API.checkSpace = function(text) {
	
	// GET AMOUNT OF LINES
	const textLines = this.splitTextToSize(text, 385);
	
	// CHECK SPACE
	if ((textLines.length * 10) + this.getFontSize() + this.height > 620) {
		
		// ADD PAGE
		this.addPage('a4', 'portrait');
		
		// RESET HEIGHT
		this.height = 0;
		
		// ADD SPACER
		this.height += 40;
		
	}
	
};

// ADD CUSTOM FUNCTION TO UPDATE STYLE
jsPDF.API.setStyle = function(styles) {
	
	// GET ATTRIBUTES
	const {font, line, fill, draw} = styles;
	
	// UPDATE FONT
	if (font) {
		if (font.family && font.style) this.setFont(font.family, font.style);
		if (font.color) this.setTextColor(font.color);
		if (font.size) this.setFontSize(font.size);
	}
	
	// UPDATE LINE
	if (line) {
		if (line.width) this.setLineWidth(line.width);
		if (line.dashPattern) this.setLineDashPattern(line.dashPattern);
	}
	
	// UPDATE FILL
	if (fill) {
		if (fill.color) this.setFillColor(fill.color);
	}
	
	// UPDATE DRAW
	if (draw) {
		if (draw.color) this.setDrawColor(draw.color);
	}
	
};

// ADD CUSTOM FUNCTION TO ADD TWO-COLUMN-LIST
jsPDF.API.twoColumnList = function(value) {
	
	// UPDATE STYLE
	this.setStyle({
		font: {family: 'times', style: 'normal', size: 10, color: this.colors.black},
		draw: {color: this.colors.black},
	});
	
	// LOOP OVER ROWS
	value.infos[0].map((text) => {
		
		// PRINT TEXT
		this.text(text, 30, this.height, 'justify');
		
		// UPDATE HEIGHT
		this.height += 10;
		
	});
	
	// UPDATE HEIGHT
	this.height -= (5 * 10);
	
	// LOOP OVER ROWS
	value.infos[1].map((text) => {
		// PRINT TEXT
		this.text(text, 210, this.height, 'justify');
		
		// UPDATE HEIGHT
		this.height += 10;
		
	});
	
};

// ADD CUSTOM FUNCTION TO ADD TWO-COLUMN-LIST
jsPDF.API.twoColumnSignature = function(value) {
	
	this.setStyle({
		font: {family: 'times', style: 'normal', size: 10, color: this.colors.black},
		draw: {color: this.colors.black},
		fill: {color: this.colors.black},
		line: {dashPattern: [2, 2]},
	});
	
	// DRAW SIGNATURE
	this.addImage('/signature.png', 'png', 30, this.height, 80, 40);
	
	// UPDATE HEIGHT
	this.spacer(45);
	
	// DRAW LINE
	this.line(30, this.height, 180, this.height);
	
	// UPDATE HEIGTH
	this.spacer(10);
	
	// DRAW COMPANY NAME
	this.text(value[0].infos[0], 30, this.height);
	
	// DRAW DATE
	this.text(value[0].infos[1], 180, this.height, {align: 'right'});
	
	// ADD SPACE
	this.spacer(10);
	
	// DRAW NAME
	this.text(value[0].infos[2], 30, this.height);
	
	// UPDATE HEIGHT
	this.spacer(-65);
	
	// DRAW SIGNATURE
	this.addImage(value[1].image.value, 'png', 210, this.height, 80, 40);
	
	// UPDATE HEIGHT
	this.spacer(45);
	
	// DRAW LINE
	this.line(210, this.height, 360, this.height);
	
	// UPDATE HEIGHT
	this.spacer(10);
	
	// DRAW COMPANY NAME
	this.text(value[1].infos[0], 210, this.height);
	
	// DRAW DATE
	this.text(value[1].infos[1], 360, this.height, {align: 'right'});
	
	// ADD SPACE
	this.spacer(10);
	
	// DRAW NAME
	this.text(value[1].infos[2], 210, this.height);
	
};

// ADD CUSTOM FUNCTION TO ADD TWO-COLUMN-LIST
jsPDF.API.list = function(value) {
	
	// UPDATE STYLE
	this.setStyle({
		font: {family: 'times', style: 'normal', size: 10, color: this.colors.black},
		draw: {color: this.colors.black},
	});
	
	// LOOP OVER ROWS
	value.infos.map((text) => {
		// PRINT TEXT
		this.listItem(text, 30, this.height, 'justify');
		
		// UPDATE HEIGHT
		this.height += 5;
		
	});
	
};

// ADD CUSTOM FUNCTION TO JSPDF
jsPDF.API.textBlock = function(text) {
	
	// UPDATE STYLE
	this.setStyle({
		font: {family: 'times', style: 'normal', size: 10, color: this.colors.black},
		draw: {color: this.colors.black},
	});
	
	// CHECK SPACE
	this.checkSpace(text);
	
	// GET AMOUNT OF LINES
	const textLines = this.splitTextToSize(text, 385);
	
	// DRAW
	for (let i = 0; i < textLines.length; i++) {
		
		// PRINT TEXT
		this.text(textLines[i], 30, this.height, 'justify');
		
		// UPDATE HEIGHT
		this.height += 10;
		
	}
	
	// UPDATE HEIGHT
	this.height += 5;
	
};

// ADD CUSTOM FUNCTION TO JSPDF
jsPDF.API.listItem = function(text) {
	
	// UPDATE STYLE
	this.setStyle({
		font: {family: 'times', style: 'normal', size: 10, color: this.colors.black},
		draw: {color: this.colors.black},
		fill: {color: this.colors.black},
	});
	
	// CHECK SPACE
	this.checkSpace(text);
	
	// GET AMOUNT OF LINES
	const textLines = this.splitTextToSize(text, 365);
	
	// DRAW
	for (let i = 0; i < textLines.length; i++) {
		
		// PRINT BULLET
		if (i === 0) {
			this.circle(40, this.height - 2, 1);
		}
		
		// PRINT TEXT
		this.text(textLines[i], 50, this.height, 'justify');
		
		// UPDATE HEIGHT
		this.height += 10;
		
	}
	
	// UPDATE HEIGHT
	this.height += 5;
	
};

// ADD CUSTOM FUNCTION TO PRINT TITLE
jsPDF.API.spacer = function(value) {
	
	// UPDATE HEIGHT
	this.height += value;
	
};

// ADD CUSTOM FUNCTION TO PRINT TITLE
jsPDF.API.header = function(text) {
	
	// UPDATE STYLE
	this.setStyle({
		font: {family: 'times', style: 'bold', size: 16, color: this.colors.black},
		line: {width: 0.5},
		fill: {color: this.colors.grey},
		draw: {color: this.colors.black},
	});
	
	// GET PARAMS
	const titleWidth = this.getStringUnitWidth(text) * 12;
	const pageWidth = this.internal.pageSize.getWidth();
	const pageCenter = (pageWidth - titleWidth) / 2;
	
	// CHECK SPACE
	this.checkSpace(text);
	
	// PRINT TITLE
	this.text(text, pageCenter, this.height, 'left');
	
	// UPDATE HEIGHT
	this.height += 30;
	
};

// ADD CUSTOM FUNCTION TO PRINT TITLE
jsPDF.API.title = function(text) {
	
	// UPDATE STYLE
	this.setStyle({
		font: {family: 'times', style: 'bold', size: 12, color: this.colors.black},
		line: {width: 0.5},
		fill: {color: this.colors.grey},
		draw: {color: this.colors.black},
	});
	
	// CHECK SPACE
	this.checkSpace(text);
	
	// PRINT TITLE
	this.text(text, 30, this.height + 12, 'left');
	
	// UPDATE HEIGHT
	this.height += 25;
	
};
// ADD CUSTOM FUNCTION TO SET FILENAME
jsPDF.API.setFilename = function(filename) {
	
	// SET FILENAME
	this.filename = filename;
	
};

// EXPORTS
export {
	jsPDF,
};
