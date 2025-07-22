 function studentDetails()
 {
      const name = document.getElementById('name').value.trim();
      const roll = document.getElementById('roll').value.trim();
      const marksInput = document.getElementById('marks').value.trim();

      // Check for empty inputs
      if (name === '' || roll === '' || marksInput === '') {
        alert('Please fill in all fields.');
        return;
      }
      const marks = Number(marksInput);
      const status = marks >= 50 ? 'PASS' : 'FAIL';

      // Create list item
      const li = document.createElement('li');
      li.textContent = `Name: ${name}, Roll No: ${roll}, Marks: ${marks} → ${status}`;

      // Optional: add color based on pass/fail
      li.style.color = (status == 'PASS') ? 'green' : 'red';

      // Append to list
      document.getElementById('output').appendChild(li);

      // Clear inputs
      document.getElementById('name').value = '';
      document.getElementById('roll').value = '';
      document.getElementById('marks').value = '';
    }
    