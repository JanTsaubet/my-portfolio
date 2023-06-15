const pdfURL = "http://127.0.0.1:5500/assets/documents/CV.pdf";
const filename = "CV.pdf";
function downloadCV() {
  const link = document.createElement("a");

  // Set the 'href' attribute of the anchor element to the PDF file URL
  link.href = pdfURL;

  // Set the 'download' attribute of the anchor element to specify the file name
  link.download = filename;

  // Simulate a click event on the anchor element
  link.click();
}
