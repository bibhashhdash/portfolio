function sendmail(){
    var First_name = $('#Firstname').val();
    var Last_name = $('#Lastname').val();
    var Email = $('#emailid').val();
    var Phone = $('#phone').val();
    var message = $('#message').val();
  }

  var body = "First Name: "+First_name+"<br>Last Name: "+Last_name+"<br>Email: "+Email+"<br>Mobile Number: "+Phone+"<br>Message: "+message;

Email.send({
Host : "smtp.gmail.com",
Username : "bibhashdash522@gmail.com",
Password : "Bibhashh123",
To : 'bibhashdash522@gmail.com',
From : "bibhashdash522@gmail.com",
Subject : "New mail from website from "+First_name,
Body : body
}).then(
message =>{
if(message=='OK'){
  alert('Your mail has been successfully sent. Thank you for contacting me.')
}
else{
  console.error (message);
  alert('There was an error in sending the mail!')
}
}
);