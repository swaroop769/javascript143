const  user = {
   userName: 'swaroop',
   email: 'pra.swaroop1991@gmail.com',
   password: 'cricket',
   
}
console.log(user)
document.getElementById('loginForm').addEventListener('submit',function(a)
{

  a.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(email,password)
  if(email=== user.email && password === user.password)
  {
     document.getElementById('result').innerText=`welcome ${user.userName}`;
  }
  else{
     document.getElementById('result').innerText='user not found';
  }
})
