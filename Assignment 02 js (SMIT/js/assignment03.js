function addParagraph(text) {
    const newParagraph = document.createElement("p"); // create a new paragraph element
    newParagraph.textContent = text; // set the text content of the new paragraph
    document.body.appendChild(newParagraph); // add the new paragraph to the end of the document body
  }
  addParagraph("This is a new paragraph");
