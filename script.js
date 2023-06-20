fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the category, score, and icon elements
    const categoryElements = [
      document.getElementById("reaction"), // Category element for reaction
      document.getElementById("memory"), // Category element for memory
      document.getElementById("verbal"), // Category element for verbal
      document.getElementById("visual"), // Category element for visual
    ];
    const scoreElements = [
      document.getElementById("reaction-score"), // Score element for reaction
      document.getElementById("memory-score"), // Score element for memory
      document.getElementById("verbal-score"), // Score element for verbal
      document.getElementById("visual-score"), // Score element for visual
    ];
    const iconElements = [
      document.getElementById("reaction-img"), // Icon element for reaction
      document.getElementById("memory-img"), // Icon element for memory
      document.getElementById("verbal-img"), // Icon element for verbal
      document.getElementById("visual-img"), // Icon element for visual
    ];

    // Iterate over the data array and update the elements
    data.forEach((item, i) => {
      categoryElements[i].innerHTML = item.category; // Update category
      scoreElements[i].innerHTML = item.score; // Update score
      iconElements[i].src = item.icon; // Update icon

      // Create a span element to display the "/ 100" text
      const spanElement = document.createElement("span");
      spanElement.textContent = " / 100";
      scoreElements[i].appendChild(spanElement); // Append the span element to the score element
    });
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
