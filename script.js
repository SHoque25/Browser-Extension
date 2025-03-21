alert('Nuh Uh, No Looking! >:/');
function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
       element.textContent = element.textContent.replace(/Harry Potter/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/Harry/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/Potter/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/J. K. Rowling/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/Rowling/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/J.K. Rowling/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/JK Rowling/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/Hogwarts/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/j.k. Rowling/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/J.k. Rowling/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/JK Rowling/gi, 'Nu Uh');
       element.textContent = element.textContent.replace(/JK/gi, 'Nu Uh');
    }
  }
  
  replaceText(document.body);
