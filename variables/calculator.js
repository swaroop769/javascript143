function append(val)
{
   document.getElementById('wwe').value += val;
}
function clearDisplay()
{
   document.getElementById('wwe').value='';
}
function result()
{
  let x = document.getElementById('wwe')
  try
  {
    x.value = eval(x.value);
  }
  catch
  {
    x.value='error';
  }
}