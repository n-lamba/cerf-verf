function generatePDF() {
  // Create a new PDF document
  const pdf = new jsPDF();

  // Get the content of the web page
  const content = document.getElementById("cerf");;

  // Add the content to the PDF
  pdf.html(content, {
    callback: function (pdf) {
      // Save the PDF to the user's device
      pdf.save('webpage.pdf');
    }
  });
}

// Attach the function to the button click event
document.getElementById('generate-pdf').addEventListener('click', generatePDF);// Get the button and the div element
 