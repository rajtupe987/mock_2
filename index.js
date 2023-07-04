

document.getElementById("user_form").addEventListener("submit", (e) => {

   e.preventDefault();

   const student_name = document.querySelector("#name").value;
   let age = document.querySelector("#age").value;
   let place = document.querySelector("#place").value;
   let batch = document.querySelector("#batch_name").value;
   let profession = document.querySelector("#profession").value;

   const std_obj = {
      student_name,
      age,
      place,
      batch,
      profession
   }
   fetch("https://coffee-rattlesnake-wig.cyclic.app/users", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(std_obj)
   }).then((res) => {
      res.json()
   }).then((data) => {
      alert("user registred successfully")
      //   console.log(data.users)
   }).catch((err) => {
      alert("error accure while resitering")
      console.log(err)
   })
});



