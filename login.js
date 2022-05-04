 let input = document.getElementById("submit");

  let button =input.addEventListener("click", (e) => {
    console.log('here');
    let form = {
      email: document.querySelector("#userID"),
      password: document.querySelector("#password"),
      submit: document.querySelector("#submit"),
    };
   var usID=document.getElementById('userID').value;
    console.log(document.getElementById('userID').value);
    console.log(form);
    localStorage.setItem('val',usID);

    e.preventDefault();
    const login = " https://classroommonitoring.herokuapp.com/api/user/login_proctor";
  
    fetch(login, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        national_id: form.email.value,
        password: form.password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status);
        if (data.status =="success") {
          
          window.location.href="confirm.html";
              
        } else {
            alert("Invalid User ID or Password"); /*displays error message*/

        }
      })
      .catch((err) => {
        console.log(err);
      });
  });