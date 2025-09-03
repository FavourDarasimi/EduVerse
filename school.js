const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

function activateTab(tab) {
  // Reset all tabs
  tabs.forEach((t) => {
    t.classList.remove(
      "text-black",
      "border-green-500",
      "border-orange-500",
      "border-purple-500"
    );
    t.classList.add("text-gray-500", "border-transparent");
  });

  // Hide all tab contents
  tabContents.forEach((content) => {
    content.classList.add("hidden");
  });

  // Add active styles depending on which tab is clicked
  if (tab.id === "actv1") {
    tab.classList.add("text-black", "border-green-500");
    document.getElementById("clubs").classList.remove("hidden");
  } else if (tab.id === "actv2") {
    tab.classList.add("text-black", "border-orange-500");
    document.getElementById("sports").classList.remove("hidden");
  } else if (tab.id === "actv3") {
    tab.classList.add("text-black", "border-purple-500");
    document.getElementById("cultural-activities").classList.remove("hidden");
  }

  tab.classList.remove("text-gray-500", "border-transparent");
}

// Add click listeners
tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab));
});

// Set default active tab
activateTab(document.getElementById("actv1"));

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
