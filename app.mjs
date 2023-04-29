function startApp() {

  //DOM Manipulation
  const input = document.getElementById('phone-num')
  
  // Array to store all Nigerian number prefixes
  const airtel = ["0802", "0808", "0812", "0708", "0701", "0902", "0901", "0907"];
  const glo = ["0805", "0807", "0811", "0815", "0705", "0905"];
  const mtn = ["0703", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906", "0913"];
  const nineMobile = ["0809", "0817", "0818", "0908", "0909"];

  let prefixStore = airtel.concat(glo, mtn, nineMobile);

  input.addEventListener('input', (e) => {
    let phoneNum = e.target.value;

    checkNumber(phoneNum, airtel, glo, mtn, nineMobile);
  });
}

// Check phone number

function checkNumber(phoneNum, airtel, glo, mtn, nineMobile) {

  // Removing all white spaces and any non-digit characters
  phoneNum = phoneNum.replace(/\D/g, "");

  let prefix;
  let numberLength;
  let countryCode;
  let prefixFromNumber;

  const img = document.getElementById("provider");
  let img_src;

  // Check if the phone number starts with a valid country code
  if (phoneNum.slice(0, 3) === "234") {
    // Default country code is Nigeria (+234)
    countryCode = "+234";
    prefixFromNumber = phoneNum.slice(3, 5);
    prefix = `0${prefixFromNumber}`;
    numberLength = 11;
  } else if (phoneNum.slice(0, 4) === "+234") {
    countryCode = "+234";
    prefixFromNumber = phoneNum.slice(4, 6);
    prefix = `0${prefixFromNumber}`;
    numberLength = 14;
  } else {
    // Default country code is Nigeria (+234)
    countryCode = "+234";
    prefix = phoneNum.slice(0, 4);
    numberLength = 11;
  }

  const invalidNumber = (phoneNum.length > numberLength);

  // Logo display

  if (invalidNumber) {
    img_src = "";
  } else if (airtel.includes(prefix)) {
    img_src = "/images/logo-airtel.svg";
    countryCode = "+234";
  } else if (glo.includes(prefix)) {
    img_src = "/images/logo-glo.svg";
    countryCode = "+234";
  } else if (mtn.includes(prefix)) {
    img_src = "/images/logo-mtn.svg";
    countryCode = "+234";
  } else if (nineMobile.includes(prefix)) {
    img_src = "/images/logo-9mobile.svg";
    countryCode = "+234";
  } else {
    img_src = "";
  };
  
  // Set the source of the image element based on the logo URL
  img.setAttribute("src", img_src);


  // Show the country code next to the phone number input
  // const countryCodeElement = document.getElementById("country-code");
  // countryCodeElement.textContent = countryCode;

};


// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= END DO NOT EDIT ========= /