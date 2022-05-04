 let iID="test1";

fetch('http://classroommonitoring.herokuapp.com/api/user/generate_exam_report', {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        exam_instance_id:iID
    }),
  }).then(res => res.json())
  .then(nat =>{
      
  })
