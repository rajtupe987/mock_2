

document.getElementById("admin_login").addEventListener("submit", (e) => {

   e.preventDefault();

   let a_email = document.querySelector("#email").value;
   let a_password = document.querySelector("#password").value;

   fetch("https://coffee-rattlesnake-wig.cyclic.app/admin").then((res) => {
      return res.json();
   }).then((admin) => {
      console.log(admin)
      const u_admin = admin.find((u) => u.email === a_email && u.password == a_password);
      console.log(u_admin)

      if (u_admin) {
         alert("success");

         window.location.href = "../frontend/masaiverse/adminpage.html"

      } else {
         alert("somthing went wrong please enter cradentials correctly")
      }

   }).catch((err) => {
      alert("err accure while login")
      console.log(err)
   })
})