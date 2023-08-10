function read(){
    const names=document.getElementById("name").value;
    let roll=document.getElementById("roll").value;
    let password=document.getElementById("password").value;
    let clg=document.getElementById("clg").value;
    clg=clg.toUpperCase();
    let department=document.getElementById("department").value;
    let gender= document.getElementsByName("genders")[0].value;
   
    let dob=document.getElementById("dob").value;
    let adress=document.getElementById("addr").value;
   // alert("THANKS FOR REGISTERING");
  
 //  document.write("HI");
 const details=names;
 alert(`Thank's for Registering ${names}`);
 //document.getElementById("resultu").innerHTML=details;
//document.getElementById("showw").innerHTML=`THANKS FOR REGISTERING ${details}`;
   
 
}


