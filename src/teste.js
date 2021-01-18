const PdfPrinter = require('pdfmake');
const fs = require('fs');

const fontpath1 = (__dirname+'/fonts/Roboto-Regular.ttf');
const fontpath2 = (__dirname+'/fonts/Roboto-Medium.ttf');
const fontpath3 = (__dirname+'/fonts/Roboto-Italic.ttf');
const fontpath4 = (__dirname+'/fonts/Roboto-MediumItalic.ttf');


let fonts = {
	Roboto: {
		normal: fontpath1,
		bold: fontpath2,
		italics: fontpath3,
		bolditalics: fontpath4
	}
};

const printer = new PdfPrinter(fonts);

let docDefinition = {
  content: [
    {text: 'Relatório', style: ''},
    {
      style: '',
      table: {
        widths: [100, 80, 50, 100, 100],
        body: [
          [{text: 'Coluna1', style: 'header'}, {text: 'Coluna1', style: 'header'}, {text: 'Coluna1', style: 'header'}, {text: 'Coluna1', style: 'header'}, {text: 'Coluna1', style: 'header'}, ],
          [{text: 'dado1', style: 'registro'}, {text: 'dado1'}, {text: 'dado1'}, {text: 'dado1'},  {text: 'dado1'}],
          ['dado1', 'dado1', 'dado1', 'dado1', 'dado1'],
          ['dado2', 'dado2', 'dado2', 'dado2', 'dado2'],
          ['dado3', 'dado3', 'dado3', 'dado3', 'dado3'],
          ['dado4', 'dado4', 'dado4', 'dado4', 'dado4']
        ]
      }
    }
  ],
  styles: {
    header: {
      fontSize: 14,
			bold: true,
			margin: [0, 0, 0, 10]
    },
    registro: {
      color: '#F51504',
      bold: true
    }
  }
};

const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream(__dirname + '/outputs' + '/teste.pdf'));
pdfDoc.end();
