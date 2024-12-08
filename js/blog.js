document.addEventListener("DOMContentLoaded", function () {
    // Define the list of IDs for headers and corresponding content
    const sections = [
      { headerId: "document-object", contentId: "document-object-text" },
      { headerId: "document-object-select", contentId: "document-object-select-text" },
      { headerId: "delegate-context", contentId: "delegate-context-text" },
      { headerId: "manipulate-attributes", contentId: "manipulate-attributes-text" },
    ];
  
    sections.forEach(section => {
      const header = document.getElementById(section.headerId);
      const content = document.getElementById(section.contentId);
  
      header.addEventListener("click", function () {
        // Close any currently open content
        const activeContent = document.querySelector("p:not(.hidden)");
        if (activeContent && activeContent !== content) {
          activeContent.classList.add("hidden");
        }
  
        // Toggle the visibility of the clicked content
        content.classList.toggle("hidden");
      });
    });
  });
  