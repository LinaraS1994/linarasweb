// Get the toggle link and icons by their IDs
const toggleLink = document.getElementById("toggleLink");
const plusIcon = document.getElementById("plusIcon");
const xIcon = document.getElementById("xIcon");

const toggleLink2 = document.getElementById("toggleLink2");
const plusIcon2 = document.getElementById("plusIcon2");
const xIcon2 = document.getElementById("xIcon2");

const toggleLink3 = document.getElementById("toggleLink3");
const plusIcon3 = document.getElementById("plusIcon3");
const xIcon3 = document.getElementById("xIcon3");

const toggleLink4 = document.getElementById("toggleLink4");
const plusIcon4 = document.getElementById("plusIcon4");
const xIcon4 = document.getElementById("xIcon4");

// Add a click event listener to the toggle link
toggleLink.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the link from navigating

// Toggle the visibility of the icons
if (plusIcon.style.display === "none") {
plusIcon.style.display = "inline";
xIcon.style.display = "none";
} else {
plusIcon.style.display = "none";
xIcon.style.display = "inline";
}
});

toggleLink2.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the link from navigating

// Toggle the visibility of the icons
if (plusIcon2.style.display === "none") {
plusIcon2.style.display = "inline";
 xIcon2.style.display = "none";
} else {
plusIcon2.style.display = "none";
xIcon2.style.display = "inline";
}
});

toggleLink3.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the link from navigating

// Toggle the visibility of the icons
if (plusIcon3.style.display === "none") {
plusIcon3.style.display = "inline";
 xIcon3.style.display = "none";
} else {
plusIcon3.style.display = "none";
xIcon3.style.display = "inline";
}
});

toggleLink4.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the link from navigating

// Toggle the visibility of the icons
if (plusIcon4.style.display === "none") {
plusIcon4.style.display = "inline";
 xIcon4.style.display = "none";
} else {
plusIcon4.style.display = "none";
xIcon4.style.display = "inline";
}
});