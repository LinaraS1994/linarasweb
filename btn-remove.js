function toggleProjects() {
    var projectsToToggle = ['project4', 'project5', 'project6', 'project7'];

    projectsToToggle.forEach(function(id) {
      var element = document.getElementById(id);
      if (element) {
        element.style.display = 'block';
      }
    });

    removeButton('showMoreButton');
  }

  function removeButton(buttonId) {
    var button = document.getElementById(buttonId);
    if (button) {
      button.parentNode.removeChild(button);
    }
  }