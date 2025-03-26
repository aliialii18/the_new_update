// app.js

// تبديل القائمة الجانبية
function toggleDrawer() {
    var drawer = document.getElementById("drawer");
    var mainContent = document.querySelector(".main-content");
    drawer.classList.toggle("open");
    mainContent.classList.toggle("shifted");
  }
  
  // تمييز الرابط النشط في القائمة الجانبية
  function markActiveLink() {
    var params = new URLSearchParams(window.location.search);
    var day = params.get("day") || "1";
    var links = document.querySelectorAll("#drawer a");
    links.forEach(function(link) {
      if (link.getAttribute("href") === "?day=" + day) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  
  // إظهار/إخفاء الحل الصحيح (إن وُجد في بعض الصفحات)
  function toggleSolution() {
    var solDiv = document.getElementById("expectedSolutionDiv");
    solDiv.style.display = (solDiv.style.display === "block") ? "none" : "block";
  }
  
  // يمكنك استدعاء markActiveLink() عند تحميل الصفحة إذا كانت القائمة الجانبية موجودة
  document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("drawer")) {
      markActiveLink();
    }
  });
  