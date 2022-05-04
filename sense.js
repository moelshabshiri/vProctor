
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// output.innerHTML = slider.value + " %"; // Display the default slider value



let inst=localStorage.getItem('instance');
let flg=true;

let but= document.getElementById('sub');
let lowSense=document.getElementById('Low');
console.log(lowSense.checked)
let midSense=document.getElementById('Medium');
let highSense=document.getElementById('High');
let senseVal=0;


// but =input.addEventListener("click", (e) => 
but.addEventListener("click", (e) => {
  if(lowSense.checked)
  {
    senseVal=25;
    flg=true;
  }
  else if(midSense.checked)
  {
    senseVal=50;
    flg=true;
  }
  else if (highSense.checked)
  {
    senseVal=75;
    flg=true;
  }
  else{
    flg=false;
  }


  console.log('senseVal');
console.log(senseVal);
console.log(flg);
console.log('senseVal');
 var usID=document.getElementById('userID').value;
 var user_ID=localStorage.getItem('val');

  e.preventDefault();
  if(flg==true)
  {
    console.log('here');
    const sense = " https://classroommonitoring.herokuapp.com/api/user/assign_model_sensitivity";


    fetch(sense, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proctor_national_id: user_ID,
        exam_instance_id: inst,
        model_sensitivity: senseVal,
      }),
    })
  
  }
  else
  {
    alert("enter a value");
  }

      
});



let but2= document.getElementById('start');

but2.addEventListener("click", (e) => {

  console.log("here");


 
   e.preventDefault();
 
 fetch("http://10.40.32.236:5000/runmodel/"+senseVal+"/"+inst,{
  method: "POST",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
  // body: JSON.stringify({
  
  // }),


})

//  .then(cd =>{

//  })
 console.log("here");
  // window.location.href="mainPage.html";
  console.log("after window");


  // window.location.href="mainPage.html";
       
 });
//  window.location.href="mainPage.html";


// fetch("http://192.168.164.242:5000/runmodel/")
// .then(response => response.json())
// .then(out => {
//   console.log(out)
// })





  // fetch(sense, {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json, text/plain, */*",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     proctor_national_id: user_ID,
  //     exam_instance_id: inst,
  //     model_sensitivity: senseVal,
  //   }),
  // })
  //   .then((response) => response.json())
  //   .catch((err) => {
  //     console.log(err);
  //   });