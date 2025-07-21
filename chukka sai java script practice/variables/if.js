function swaroop()
{
  let a = document.getElementById('wwe')
  let b = a.value.trim();

 let marks = b;
 marks=Number(marks);


 if (marks > 90) {
  console.log("Excellent");
} else if (marks >= 75 && marks <= 90) {
  console.log("Very Good");
} else if (marks >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}
    let c = document.getElementById('output')
    let li = document.createElement('li')
    li.textContent=b;
    c.appendChild(li)
    a.value='';
  }
  