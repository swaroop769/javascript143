function todo()
{
  const a = document.getElementById('wwe')
  const b = a.value.trim();
  
  const output = document.getElementById('output')

 
  
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
}

