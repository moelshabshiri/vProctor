 
var header=document.querySelector(".btns");
var head=document.querySelector("#head");
var sel=document.querySelector("#sel");
var img=document.querySelector("#case");
let flg;
 
// document.getElementById("rep").onclick = function () {
//    // header.remove();
//    // sel.remove();
//    // img.remove();
//    head.innerHTML="Case has been reported";
// };
 
// document.getElementById("dis").onclick = function () {
//    // header.remove();
//    // sel.remove();
//    // img.remove();
//    head.innerHTML="Case has been dismissed";
// };
 
// document.getElementById('endSession').addEventListener("click", function()
//  {
//     document.querySelector(".alert_box").style.display="flex";
 
 
//  })
let ltime;
var current = new Date();
ltime=current.toLocaleTimeString();
 let tm=document.getElementById('time');
 tm.innerText="Current Time: "+ltime;
const button = document.querySelector("button"),
     toast = document.querySelector(".toast")
     closeIcon = document.querySelector(".close"),
     progress = document.querySelector(".progress");
 
     let timer1, timer2;
 
   //    timer1 = setTimeout(() => {
       //    toast.classList.add("active");
                    
   //    }, 1000); //1s = 1000 milliseconds
 
      closeIcon.addEventListener("click", () => {
       toast.classList.remove("active");
      
       // setTimeout(() => {
       //   progress.classList.remove("active");
       // }, 3000);
 
       // clearTimeout(timer1);
       // clearTimeout(timer2);
     });
 // let jsondata = "";
// let case_id_glob="";
// let apiurl='http://classroommonitoring.herokuapp.com/api/user/get_recent_case';
// async function getJson(url) {
//    let response = await fetch(url);
//    let data = await response.json()
//    return data.caseID;
// }
// jsondata= await getJson(apiurl);
// case_id_glob=jsondata.data.case_details[0].case_id;
 
// var link=image.getAttribute('src');
let inst_id=localStorage.getItem('instance');

let caseid;
let stuNum;
function fetchRep()
{

console.log(inst_id);
fetch('http://classroommonitoring.herokuapp.com/api/user/get_recent_case/'+inst_id)
.then(res => res.json())
.then(out =>{
   if(out.msg=="Recent Case Retreived successfully")
   {
       toast.classList.add("active");
   }
   caseid=out.data.case_details[0].case_id;
   stuNum=out.data.case_details[0].student_number;

   document.getElementById('cid').innerText= "New Case, Case ID: "+caseid;
   return fetch("http://classroommonitoring.herokuapp.com/api/user/get_frames_links/"+"/"+caseid+"/"+inst_id+"/"+stuNum)
 
})
    .then(response => response.json())
   .then(json =>{
       let cnt=json.data;
     let i=0;
       // console.log(json.urls[1]);
   // document.getElementById("case").src=json.data[0];
   document.getElementById("case").src=json.data[i];
 
   document.getElementById("case").onclick = function () {
                
               document.getElementById("case").src=json.data[i++];
              if(i==cnt.length)
              {
                  document.getElementById("case").alt="No more detected frames in this case";
              }
 
   }
 
   document.getElementById("dis").onclick = function () {

// return fetch('http://classroommonitoring.herokuapp.com/api/user/dismiss_case', {
//     method: "POST",
//     mode: 'no-cors',
//     headers: {
//        "Accept": "application/json, text/plain, */*",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//           caseID: caseid,
     
//       })
//     })

return fetch("http://classroommonitoring.herokuapp.com/api/user/dismiss_case", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        caseID:caseid
    }),
  })
    }
}).then(resu =>
        {
            document.getElementById("rep").onclick = function () {

                return fetch("http://classroommonitoring.herokuapp.com/api/user/report_case",{
                    method: "POST",
                    headers: {
                      Accept: "application/json, text/plain, */*",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        caseID:caseid
                    }),
                  })
                
                    }
                 }
        
        );
 
                }
 
//    document.getElementById("dis").onclick = function () {
 

   
 
//    document.getElementById("rep").onclick = function () {
 
//        fetch('http://classroommonitoring.herokuapp.com/api/user/report_case/', {
//            method: "POST",
//           headers: {
//              Accept: "application/json, text/plain, */*",
//              "Content-Type": "application/json",
//            },
//            body: JSON.stringify({
//                caseID: case_id_glob,
          
//            }),
//          }); 
//    }
 
 
  
window.addEventListener('load', function () {
    // Your document is loaded.
    var fetchInterval = 8000; // 5 seconds.
  
    // Invoke the request every 5 seconds.
    setInterval(fetchRep, fetchInterval);
  });
 
 
 
 
document.getElementById('close').addEventListener("click", function()
{
   document.querySelector(".alert_box").style.display="none";
})
 
//  document.getElementById('toast').addEventListener("click",function(){
 
//     document.querySelector(".alert_box").style.display="flex";
//  })
 
 
 

