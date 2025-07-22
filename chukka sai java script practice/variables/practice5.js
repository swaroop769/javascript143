function swaroop()
{
  let user = document.getElementById('user').value;
  
  let pass = document.getElementById('password').value;

  let status = document.getElementById('output')

  if( user==='admin' && pass==='1234')
  {
    status.textContent='login sucess';
  }
  else{
    status.textContent='wrong details';
  }
}