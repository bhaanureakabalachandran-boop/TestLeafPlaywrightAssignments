class MethodOverloading{

// Overload signatures
reportStep(msg:string,status:string):void
reportStep(msg:string,status:string,snap:boolean):void


// Overload signatures
reportStep(msg:string,status:string,snap?:boolean){
    console.log(`Message: ${msg}`);
    console.log(`Status: ${status}`);

    if (snap) {
      console.log('Snapshot taken');
    }
}

}

function testComp(): void {

let obj=new MethodOverloading()
obj.reportStep("Message1","Approved")
obj.reportStep("Message2","Accepted",true)
}

// Run the test
testComp();
