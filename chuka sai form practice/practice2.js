document.getElementById('signupForm').addEventListener('submit',function(a)
{
  a.preventDefault();
  const userName = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPwd = document.getElementById('cnfPassword').value;
  console.log(userName,email,password,confirmPwd)
 
  if(password === confirmPwd)
  {
  document.getElementById('signupResult').innerText='signup sucessfull';
 }
 else{
    document.getElementById('signupResult').innerText='signup failed';
 }
})