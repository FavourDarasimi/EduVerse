const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Tab functionality
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Add active class to clicked tab
    tab.classList.add("active");

    // Hide all tab contents
    tabContents.forEach((content) => content.classList.add("hidden"));

    // Show corresponding tab content
    if (tab.id === "actv1") {
      document.getElementById("clubs").classList.remove("hidden");
    } else if (tab.id === "actv2") {
      document.getElementById("sports").classList.remove("hidden");
    } else if (tab.id === "actv3") {
      document.getElementById("cultural-activities").classList.remove("hidden");
    }
  });
});
