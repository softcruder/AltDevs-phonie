function startApp() {

  //DOM Manipulation
  const input = document.getElementById('phone-num')

  const airtel = ["0802", "0808", "0812", "0708", "0701", "0902", "0901", "0907"];
  const glo = ["0805", "0807", "0811", "0815", "0705", "0905"];
  const mtn = ["0703", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906", "0913"];
  const nineMobile = ["0809", "0817", "0818", "0908", "0909"];


  // Array to store all Nigerian number prefixes
  let prefixStore = airtel.concat(glo, mtn, nineMobile);

  input.addEventListener('change', (e) => {
    let phoneNum = e.target.value;

    checkNumber(phoneNum, airtel, glo, mtn, nineMobile);
  });
}

/* === Verify phone number function === */

function checkNumber(phoneNum, airtel, glo, mtn, nineMobile) {

  // Removing all white spaces
  phoneNum = phoneNum.replace(/\s/g, "");

  let prefix;
  let numberLength;
  let countryCode;

  const img = document.getElementById("provider");
  let img_src
  //console.log("checkNumber", phoneNum)
  if (phoneNum[0] === "+") {
    numberLength = 14;
    countryCode = phoneNum.slice(0, 4);
    prefix = phoneNum.slice(4, 7)
    prefix = `0${prefix}`
  } else {
    prefix = phoneNum.slice(0, 4);
    numberLength = 11;
    /*  if (phoneNum[4] === "0") {
       prefix = phoneNum.slice(4, 8);
       //numberLength = 15;
     } else {
       prefix = "0" + phoneNum.slice(4, 7);
     }; */
  };

  const invalidNumber = (phoneNum.length > numberLength) || (phoneNum.length >= 4 && countryCode !== "+234" && phoneNum[0] === "+");

  // Logo display

  if (invalidNumber) {
    img_src = "";
  } else if (airtel.includes(prefix)) {
    img_src = "/images/logo-airtel.svg";
  } else if (glo.includes(prefix)) {
    img_src = "/images/logo-glo.svg";
  } else if (mtn.includes(prefix)) {
    img_src = "/images/logo-mtn.svg";
  } else if (nineMobile.includes(prefix)) {
    img_src = "/images/logo-9mobile.svg";
  };
  console.log("img::", img);
  const nase_img = document.createElement('IMG');
  nase_img.setAttribute('src', img_src);
  nase_img.setAttribute('width', 50);
  nase_img.setAttribute('height', 30)
  img.appendChild(nase_img)

  /* img.innerHTML = `<img style="width: 50px; height: 30px;" src = ${img_src}/>` */
};

/* function check(imgPath) {
  img.style.display = 'inline';
  img.src = imgPath
} */
// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= /