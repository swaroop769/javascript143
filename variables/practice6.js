/*function swaroop()
{
  let a = document.getElementById('wwe')
  let b = a.value.trim();

  let output = document.getElementById('output')
  
  let radio = document.createElement('input')
  radio.type='radio'; 
  let p= document.createElement('p')
  p.appendChild(radio);
  
  //p.textContent=b;
  
 let text = document.createTextNode(' ' +b);
 p.appendChild(text)

radio.addEventListener('change',function()
{
  if (radio.checked)
  {
    p.style.textDecoration='line-through';
  }
  else
  {
    p.style.textDecoration='none';
    
  }
  //output.style.textDecoration='line-through';
  
});
  output.appendChild(p)
 a.value='';
}*/



























/*function swaroop()
{
  let a = document.getElementById('wwe')
  let b = a.value.trim();
  
  if (b ==='') return;
  
  let output = document.getElementById('output')

  let allTexts = output.querySelectorAll('p')
  for(let i=0; i<allTexts.length; i++)
 {
   let x = allTexts[i].textContent.replace('🗑️','').trim();
   if(x === b)
   {
    alert('This item already exits');
    a.value ='';
    return;
   }
}
 
 let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  let p = document.createElement('p')
  
  p.appendChild(checkbox)
  
  let text = document.createTextNode(b)
  p.appendChild(text)

  let delbtn = document.createElement('button')
  delbtn.textContent='🗑️';
  delbtn.style.marginLeft='30px'
  p.appendChild(delbtn)

  checkbox.addEventListener('change',function()
{
  if(checkbox.checked)
  {
    p.style.textDecoration ='line-through';
  }
  else{
    p.style.textDecoration='none';
  }
},);

  delbtn.addEventListener('click',function()
{
  output.removeChild(p);
},);

output.appendChild(p)
a.value ='';
}*/






function swaroop()
{
  let a = document.getElementById('wwe')
  let b = a.value.trim();

  let output = document.getElementById('output')
  
  let checkbox = document.createElement('input')
  checkbox.type ='checkbox';
  let p = document.createElement('p')
  p.appendChild(checkbox)

  let text = document.createTextNode(b)
  p.appendChild(text)

  let delbtn = document.createElement('button')
  delbtn.textContent ='-';
  delbtn.style.marginLeft='30px';
  p.appendChild(delbtn)

  let d = output.querySelectorAll('p') 
  for(let i=0;i<d.length;i++)
  {
   let e = d[i].textContent.replace('-','').trim();
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
  p.style.textDecoration='line-through';
  }
  else{
    p.style='none';
  }
},);

delbtn.addEventListener('click',function()
{
   output.removeChild(p)
})


 // p.textContent = b;

  output.appendChild(p)
  a.value ='';

  
}