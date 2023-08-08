const email = document.querySelector('.inputholder');
const form = document.querySelector('.wrapper_form')
const errorMsg = document.querySelector('.errMsg')

// FORM VALIDATION

form.addEventListener('submit', function(e) {

      let emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      let emailIsValidated = email.value;

      e.preventDefault();

      if (!emailIsValidated) {
        setMessage(`valid email required`, form)
      } else if (!emailRegEx.test(email.value)) {
        setMessage(`Please provide a valid email`, form)
      }

      // Set message
      function setMessage(errMsg) {
        errorMsg.style.color = 'red';
        errorMsg.style.fontStyle = 'italic'
        errorMsg.textContent = errMsg;
        errorMsg.style.display = 'flex';
        email.style.border = '2px solid red'
        setTimeout(() => {
          errorMsg.style.display = 'none';
          email.style.border = '1px solid hsl(0, 36%, 70%)';
        }, 3000);
      }
});