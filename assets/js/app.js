//alert("hiii");
cl= console.log;

const digitalClock = document.getElementById("digitalClock");

function createDitigalClock(){
	let d = new Date();
cl(d);

let dhr= d.getHours(); 
cl(dhr);

let dmin = d.getMinutes();
cl(dmin);

let dsec = d.getSeconds()
cl(dsec);

let session = "AM";
cl(session);

if(dhr >= 12){
session =  "AM"
}
if(dhr>12){
	dhr= dhr-12
}
if(dhr < 10){
dhr =  "0" + dhr
}
if(dmin < 10){
dmin =  "0" + dmin
}
if(dsec < 10){
dsec =  "0" + dsec
}


result = `${dhr} : ${dmin} : ${dsec}  : ${session}`

 

//cl(result);

digitalClock.innerHTML = result;
setTimeout(createDitigalClock, 1000);
};

createDitigalClock();


