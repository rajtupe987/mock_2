function displaymembers(){

    fetch("https://coffee-rattlesnake-wig.cyclic.app/users").then((res)=>{
        return res.json();
    }).then((users)=>{
     
        console.log(users);

        // for(let i=0;i<users.length;i++){
        //     console.log(users[i])
        // }

       let x=users.length;

       document.querySelector("#user_container").textContent=null;
        document.querySelector("#total_guest").innerText=x;
      let y=0;
      let totalstd=0;
      let totalworkprop=0;
        

      

        users.forEach((el,i)=>{
            // console.log(el)
            let div=document.createElement("div");

        let name=document.createElement("h3");
        name.innerText=el.student_name

        let age=document.createElement("number");
        age.innerHTML=`age : ${el.age}`;

        y+=Math.floor(+(el.age)/x)
        

        let Place=document.createElement("h5");
        Place.innerHTML=`Place : ${el.place}`

        let Batch=document.createElement("h4");
        Batch.innerHTML=`Batch : ${el.batch}`

        let Profession=document.createElement("h4");
        Profession.innerHTML=`Prfession : ${el.profession}`;

        if(el.profession=="Frontend" || el.profession=="Backend" || el.profession=="FSD"){
            totalworkprop++;
        }else if(el.profession=="Student"){
            totalstd++
        }
        let delbtn=document.createElement("button");
        delbtn.className="deletedtn"
        delbtn.innerHTML="Delete";

        let editbtn=document.createElement("button");
        editbtn.innerHTML="Edit"


        div.append(name,age,Place,Batch,Profession,delbtn,editbtn);

        document.querySelector("#user_container").append(div);
        });

        document.querySelector("#ave_age").innerText=y;
        // document.querySelector("#working_prp").innerText=totalworkprop;
        document.querySelector("#totalstd").innerText=totalstd;
        //displaymembers(users)
        
    }).catch((err)=>{
        console.log("err");
        console.log(err)
    })
}



// let deletegust=(id)=>{

//     fetch(`http://localhost:3000/${id}`,{
//         method:"DELETE",

//     }).then((res)=>{
//         return res.json()
//     }).then((data)=>{
//         console.log(data);
//         displaymembers()
        
//     }).catch((err)=>{
//         console.log(err)
//     })
// }

// document.querySelector(".deletedtn").addEventListener("click",()=>{
//     console.log("asdfsdf")
// })





displaymembers()



