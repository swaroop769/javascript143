/*function swaroop(name)
{
  console.log('hello My name is '+ name +' good morning')
}
swaroop('swaroop')*/

function welcomemessage(name,time)
{
  console.log('hello ' +name+ ' good ' +getmessage())
  
  function getmessage()
  {
    if(time < 12)
    {
      return 'morning';
    }
    else if(time < 18)
    {
      return 'afternoon';
    }
    else if(time < 20)
    {
        return 'evening';
    }
    else if (time < 24)
    {
      return ' night';
    }
}

}
welcomemessage('swaroop',0.01)
welcomemessage('sai', 17.59)
welcomemessage('venky', 20.01)
welcomemessage('yaswanth', 23.59)

