
//Check and Print the Browser is chrome using If-Else
function launchBrowser(browser){

  if(browser == "chrome"){
   console.log("Browser Name is:" +browser);
  }else{
    console.log("Browser Name is:" +browser);
  }

}


let browserName = "chrome";
launchBrowser(browserName);

//Check and Print the testType is regression using Switch-Case

function runTests(testType){

switch(testType){
    case "smoke":
        console.log("This is a smoke suite");
        break;
    case "sanity":
        console.log("This is a sanity suite");
        break;
    case "regression":
        console.log("This is a regression suite");
        break;
    default:
        console.log("This is a Default smoke suite");
        break;

}
}

let testType = "regression";
runTests(testType);