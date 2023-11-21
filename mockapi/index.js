const button=document.getElementById('button');
const nameinp=document.getElementById('nameinput');
const surnameinp=document.getElementById('surnameinput');
const ageinp=document.getElementById('ageinput')
const studentidinp=document.getElementById('studentidinput')
const submit=document.getElementById('myform')



submit.addEventListener("submit", function (event) {
    event.preventDefault();
        fetch('https://655c2fe4ab37729791aa011f.mockapi.io/swp102/students', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: nameinp.value,
                surname: surnameinp.value,
                age:ageinp.value,
               studentid:studentidinp.value,
               }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("data is send" + data);
              });
    })
