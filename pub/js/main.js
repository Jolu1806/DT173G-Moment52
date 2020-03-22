"use strict";

const url = "http://localhost/old/mom5v2/courselist.php/courses";

function getCourses() {
  fetch(url).then(t => t.json()).then(t => {
    let e = "";
    t.forEach(t => {
      e += `<tr><td>${t.code}</td><td>${t.namn}</td><td>${t.progression}</td><td>\n        <a href='${t.syllabus}' title='Kursplan för ${t.code}' target='_blank'>Webblänk</a></td></tr>`;
    }), document.getElementById("coursesOutput").innerHTML = e;
  });
}

window.onload = getCourses;