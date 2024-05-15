(function(){
    emailjs.init({
        publicKey: ("4kXtXBE9dVIV6-5me"),
    });
  })();
  
  
  function sendMail () {
    var params = {
        name: document.getElementById("name").value.trim() ,
        email : document.getElementById("email").value.trim() ,
        subject: document.getElementById("subject").value.trim() ,
        message: document.getElementById("message").value.trim(),
      };
    const serviceID = "service_zru87si";
    const templateId = "template_83wg03i";
  
    if (params.name === '' || params.email === '' || params.message === '') {
      alert('Please fill out all fields.');
      return;
  }
  
  
  // let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailRegex.test(params.email)) {
  //       document.getElementById('emailError').style.display = 'inline';
  //       return;
                      
  //     } else {
  //        document.getElementById('emailError').style.display = 'none';
  //     }
  
    emailjs.send (serviceID,templateId,params)
    .then(
      res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your Message Sent Successfully")
      }
    ).catch ((err) => {
      console.log(err);
      alert('Oops! Something went wrong, please try again later.');
    })
  }
  