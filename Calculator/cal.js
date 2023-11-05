document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById('display');  // saving different elements using dom into a variable, so we can use it further in the code
  const btns = document.querySelectorAll('.btn'); // there are too many buttons , show we have to select all , that's why we will use querySelectorAll , btn is class , we will use .btn

  btns.forEach(button => {    // we will write a arrow function for all btns
    button.addEventListener('click', function() {   // function for each btn
      const buttonText = this.textContent;   // this refers to the specific element that was clicked , so it's capturing the text content of the specific button that was clicked.
      
      if (buttonText === '=') {
          display.value = eval(display.value);  // eval will evaluate the equation , 
      } else if (buttonText === 'C') {
        display.value = '';
      } else {
        display.value += buttonText;
      }
    });
  });
});

