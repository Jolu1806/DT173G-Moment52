'use strict';

const url = 'http://localhost/old/mom5v2/courselist.php/courses';

//Händelsehanterare
window.onload = getCourses;



function getCourses() {

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let output = "";
        data.forEach(course => {
        output += `<tr><td>${course.code}</td><td>${course.namn}</td><td>${course.progression}</td><td>
        <a href='${course.syllabus}' title='Kursplan för ${course.code}' target='_blank'>Webblänk</a></td></tr>`;
      });
      document.getElementById('coursesOutput').innerHTML = output;
    })
};


