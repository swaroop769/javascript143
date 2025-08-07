/*function addElements()
{


const nameInput = document.createElement('input')
nameInput.type='text';
nameInput.id='userName';
nameInput.placeholder='userName';
nameInput.value='';

const passwordInput = document.createElement('input')
passwordInput.type='password';
passwordInput.id='password';
passwordInput.placeholder='password';
passwordInput.value='';

const emailInput = document.createElement('input')
emailInput.type='email';
emailInput.id='email';
emailInput.placeholder='Email';
emailInput.value='';


const addBtn = document.createElement('button')
addBtn.textContent='clickme';
addBtn.id='addTask';

document.body.appendChild(nameInput);
document.body.appendChild(emailInput)
document.body.appendChild(passwordInput)
document.body.appendChild(addBtn)
}
function displayData()
{
const userNameEle = document.getElementById('userName')
const passwordEle = document.getElementById('password')
const emailEle = document.getElementById('email')*/

/*const userInfo ={
  userName: userNameEle.value().trim(),
  password: passwordEle.value().trim(),
  email: emailEle.value().trim()
}
console.log(userInfo)*/

//}
//addElements();
//const  addBtn = document.getElementById('addTask')
//addBtn.addEventListener('click',function()
//{
  //displayData();
//})
function addElements()
{
const nameInput = document.createElement('input')
nameInput.type='text';
nameInput.id='userName';
nameInput.placeholder='userName';
document.body.appendChild(nameInput);


const passwordInput = document.createElement('input')
passwordInput.type='password';
passwordInput.id='password';
passwordInput.placeholder='password';
document.body.appendChild(passwordInput);


const emailInput = document.createElement('input')
emailInput.type='email';
emailInput.id='email';
emailInput.placeholder='Email';
document.body.appendChild(emailInput);


const addBtn = document.createElement('button')
addBtn.textContent='clickme';
addBtn.id='addTask';
//addBtn.onclick='displayData';
addBtn.addEventListener('click',displayData)
document.body.appendChild(addBtn)

const div = document.createElement('div')
div.id='output';
document.body.appendChild(div)
}


function displayData()
{

const userNameEle = document.getElementById('userName');
const userResult=userNameEle.value.trim();
console.log(userResult)
const passwordEle = document.getElementById('password');
const passwordResult=passwordEle.value.trim();
console.log(passwordResult)
const emailEle = document.getElementById('email');
const emailResult=emailEle.value.trim();
console.log(emailResult)

const output=document.getElementById('output');
const p = document.createElement('p')


const formData = {
userName:userResult,
password:passwordResult,
email:emailResult
}
//console.log(formData)
const text = document.createTextNode(JSON.stringify(formData))
  p.appendChild(text)


output.appendChild(p)

}
addElements();
//displayData();