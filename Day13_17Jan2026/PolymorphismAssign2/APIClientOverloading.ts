class APIClientOverloading{

// Overload signatures
sendRequest(endpoint:string):void
sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean):void


// Overload signature
sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean){
    console.log(`Message: ${endpoint}`);
    console.log(`Status: ${requestBody}`);

    if (requestStatus) {
      console.log('Snapshot taken');
    }
}

}

function APIOverloading(): void {

let obj=new APIClientOverloading()
obj.sendRequest("Message1")
obj.sendRequest("Message3","Accepted",true)
}

// Run the test
APIOverloading();
