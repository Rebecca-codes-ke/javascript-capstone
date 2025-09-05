document.addEventListener("DOMContentLoaded", function () {
    // Navbar
  
  let currentPage = window.location.pathname.split("/").pop();
  let navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("text-blue-600", "font-bold");
    } else {
      link.classList.remove("text-blue-600", "font-bold");
    }
  });
  
    window.addEventListener("load", () => {
      const hero = document.getElementById("hero-content");
      hero.classList.remove("opacity-0", "-translate-y-20");
    });
//service

  let serviceForm = document.getElementById("serviceForm");
  let openServiceBtn = document.getElementById("openServiceBtn"); 
  let closeBtns = document.querySelectorAll(".closeServiceBtn");  
  let form = document.getElementById("offerForm"); 

  if (openServiceBtn) {
    openServiceBtn.addEventListener("click", function () {
      serviceForm.classList.remove("hidden");
    });
  }

  closeBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      serviceForm.classList.add("hidden");
    });
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let location = document.getElementById("location").value.trim();
      let rate = document.getElementById("rate").value.trim();

      if (name === "" || phone === "" || location === "" || rate === "") {
        alert(" Please fill in all required fields!");
      } else {
        alert(" Thank you " + name + "! Your service has been submitted.");
        serviceForm.classList.add("hidden");
        form.reset();
      }
    });
  }

  //walker
    const walkForm = document.getElementById("walkForm");

  if (walkForm) {
    walkForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let petName = document.getElementById("petName").value.trim();
      let petType = document.getElementById("petType").value;
      let duration = document.getElementById("duration").value;
      let walkDate = document.getElementById("walkDate").value;
      let walkTime = document.getElementById("walkTime").value;
      let address = document.getElementById("address").value.trim();
      let phone = document.getElementById("phone").value.trim();

      let walkerResult = document.getElementById("walkerResult");

      if (petName && petType && duration && walkDate && walkTime && address && phone) {
        walkerResult.innerText = `🐾 Walk request submitted for ${petName} (${petType}) on ${walkDate} at ${walkTime}. 
        Duration: ${duration} minutes. We’ll contact you at ${phone}.`;
        walkerResult.className = "mt-4 p-4 bg-green-100 text-green-800 rounded-lg";
        walkForm.reset();
      } else {
        walkerResult.innerText = " Please fill in all required fields.";
        walkerResult.className = "mt-4 p-4 bg-red-100 text-red-800 rounded-lg";
      }
    });
  }
});