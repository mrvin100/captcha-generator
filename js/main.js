/* Selecting necessary DOM elements */

const captchaTextBox = document.querySelector('.captch_box input'),
	  refreshButton = document.querySelector('.refresh_btn'),
	  captchaInputBox = document.querySelector('.captch_input input'),
	  message = document.querySelector('.message'),
	  submitButton = document.querySelector('.btn');

/* Variable to store generated captcha */

let captchaText = null;

/* Function to generate captcha */


const generateCaptcha = () => {
	const randomString = Math.random().toString(36).substring(2, 7),
		  randomStingArray = randomString.split(""),
		  changeString = randomStingArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
	captchaText = changeString.join("   ");
	captchaTextBox.value = captchaText;
	console.log(captchaText);
};

const refreshBtnClick = () => {
	generateCaptcha();
	captchaInputBox.value = "";
	captchaKeyUpValidate();
};

const captchaKeyUpValidate = () =>{
	// Toggle submit button disable class based on captcha input field.
	submitButton.classList.toggle('disabled', !captchaInputBox.value);
	
	if(!captchaInputBox.value) message.classList.remove('active');
};

/* Function to validate entered captcha */

const submitBtnClick = () => {
	captchaText = captchaText
	.split("")
	.filter((char) => char !== " ")
	.join("");
	message.classList.add('active');
	/* check if the entered captcha text is correct or not */
	if(captchaInputBox.value === captchaText){
		message.innerText = 'Entered captcha is correct';
		message.style.color = '#826afb';
	}else{
		message.innerText = 'Entered captcha is not correct';
		message.style.color = '#ff2525';
	}
};

/* Add event listeners for the refresh button, captchaInputBox, submit button */

refreshButton.addEventListener('click', refreshBtnClick);
captchaInputBox.addEventListener('keyup', captchaKeyUpValidate);
submitButton.addEventListener('click', submitBtnClick);

// Generate a captcha when the page loads

generateCaptcha();
































