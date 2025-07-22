/*function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText == "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.add("done");
  });

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}*/

/*let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;
}*/
/*let x = document.getElementById('main')
let count = 0;
function increase()
{
  
  count++;
x.textContent=count
}
function decrease()
{
  count--;
  x.textContent=count
}
function reset()
{
  count = 0;
  x.textContent = count
}*/
function addTask()
{
const assignValue = document.getElementById('step1')
const finalValue = assignValue.value.trim();


const output = document.getElementById('output')
const li = document.createElement('li')
//li.className = 'taskItem';
li.textContent = finalValue;
//li.addEventListener('dblclick',function()
//{
  //output.removeChild(li);
//});
li.addEventListener('dblclick',function()
{
  li.style.height='130px';
  li.style.width='360px';
  li.style.borderRadius='10px';
  li.style.textAlign='center';
  li.style.backgroundColor='#1e293b';
  li.style.padding='10px';
  li.style.color='white';
  
});

output.appendChild(li);

assignValue.value = '';
}

/*function wwe()
{
  let parent = document.getElementById('parent');
  let child = document.getElementById('child');
  parent.removeChild(child);
}*/
