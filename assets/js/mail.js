function sendMail() {
   
  var params = {
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value
  };
  const serviceID = "service_86u7efl";
const templateID = "template_9fxtnzf"

emailjs.send(serviceID,templateID,params)
.then(
  (res ) => {
     document.getElementById("name").value = "";
     document.getElementById("email").value = "";
     document.getElementById("message").value ="";
     console.log(res);
     alert("your message send success");
  })

.catch((err)=>console.log(err));
  // emailjs.send("service_bn1hmh7","template_9zg3skf", params).then(function(res){
  //   alert ("success!" + res.status);
  // })
}
