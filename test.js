// var basicFormScript = document.createElement('iframe');
// // basicFormScript.setAttribute("type", "text/javascript");			
// basicFormScript.src = "https://forms.zohopublic.com/breakoutiq1/form/QuestInquiryForm/jsperma/J1mA5fHBe1f902fAe12_DK452";
// // basicFormScript.setAttribute("id", "ZFScript");
// document.body.appendChild(basicFormScript);	

var basicFormFrame = document.createElement("div");
basicFormFrame.innerHTML = `<iframe frameborder="0" style="height:800px;width:99%;border:none;" src='https://forms.zohopublic.com/breakoutiq1/form/Contact/formperma/38G1MDAJ5mDd4kA2274kf35Cj'></iframe>`
document.querySelector("#questForm").appendChild(basicFormFrame);	