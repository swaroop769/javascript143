/*function todo()
{
  const a = document.getElementById('wwe')
  const b = a.value.trim();
  
  const output = document.getElementById('output')
  output.style.display='flex';
  output.style.justifyContent='space-evenly';
  output.style.border='1px solid black';
  output.style.width='270px';
  
  const checkbox = document.createElement('input')
  checkbox.type='checkbox';

  
  const p = document.createElement('p')
  p.style.color='green';
  p.appendChild(checkbox)

  const text = document.createTextNode(b)
  p.appendChild(text)

  const delbtn = document.createElement('button')
  delbtn.textContent ='x';
  delbtn.style.marginLeft='30px';
  delbtn.style.background='silver';
  delbtn.style.color='blue';
  
  p.appendChild(delbtn)


  let d = output.querySelectorAll('p') 
  for(let i=0;i<d.length;i++)
  {
   let e = d[i].textContent.replace('x','').trim();
   if (e === b)
   {
    alert('message repeated')
    a.value='';
    return;
   }
   }


  checkbox.addEventListener('change',function()
{
  if(checkbox.checked)
  {
    p.style.textDecoration ='line-through';
    p.style.color='red';
  }
  else{
    p.style ='none';
    p.style.color='green';
  }
})

delbtn.addEventListener('click',function()
{
  output.removeChild(p)
},);

  output.appendChild(p)
  a.value='';
}*/



function addElement()
{
  const nameInput = document.getElementById('addText')
  const nameResult=nameInput.value.trim();

  const output = document.getElementById('output')

  const checkbox = document.createElement('input')
  checkbox.type='checkbox';
  checkbox.classList.add('todo-checkbox')
  const li = document.createElement('li')
  li.classList.add('todo-item')
  li.appendChild(checkbox)
  
  const text = document.createTextNode(nameResult)
  li.appendChild(text)

  const delbtn = document.createElement('button')
 
  delbtn.textContent='x';
  delbtn.classList.add('delBtn')
  li.appendChild(delbtn)


  //p.textContent=nameResult;
  output.appendChild(li)
  nameInput.value='';
}

















