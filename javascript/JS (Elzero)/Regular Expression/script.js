// let myString = "Hello ahmed I Love Ahmed";
// let regex = /ahmed/gi;
// console.log(myString.match(regex));

///////////////////////////////////////////////

// let tld = "Com Net Org Info Code Io";
// let tldReg = /(info|org|io)/i;
// console.log(tld.match(tldReg));

// let nums = "12345678910";
// let numsReg = /[0-2]/g;
// console.log(nums.match(numsReg));

// let nums2 = "12345678910";
// let numsReg2 = /[^0-2]/g;
// console.log(nums2.match(numsReg2));

// let specialNums = "1!2@3#4$5%678910";
// let spec = /[^0-9]/g;
// console.log(specialNums.match(spec));

// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /Os[5-9]Os/ig;
// console.log(practice.match(practiceRe));

///////////////////////////////////////////////

// let myString = "AaBbcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let numsAndSpecials = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(numsAndSpecials));
// console.log(myString.match(specials));

///////////////////////////////////////////////

// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g;
// let word = /\w/g;
// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));

///////////////////////////////////////////////

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let re = /(\bspam|spam\b)/ig;

// console.log(names.match(re));
// console.log(re.test(names));

///////////////////////////////////////////////

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150 05120 0560 350 00";
// let numsRe = /0\d*0/ig;
// console.log(nums.match(numsRe));

// let urls = "https://google.com http://www.website.net web.com";
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));

///////////////////////////////////////////////

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

///////////////////////////////////////////////

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(names));
// console.log(/^\d/ig.test(names));

// console.log(names.match(/\d\w{5}(?=Z)/ig));
// console.log(names.match(/\d\w{8}(?!Z)/ig));

///////////////////////////////////////////////

// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "js"));
// console.log(txt.replaceAll("@", "js"));

// let regex = /@/gi;
// console.log(txt.replaceAll(regex, "js"));

///////////////////////////////////////////////

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//   let validationResult = phoneRe.test(phoneInput);
//   return validationResult;
// };

///////////////////////////////////////////////
