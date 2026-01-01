document.getElementById("container").style.display = "grid";
document.getElementById("container").style.gridTemplateColumns = "repeat(3,1fr)";
document.getElementById("container").style.gap = "20px";

const folderStructure = {
  "madhurianalytics": ["index.html"],
  "Pixel Perfect Portfolio": ["index.html"],
  "Portfolio-V1":["index.html"],
  "Portfolio-V2":["index.html"],
  "Portfolio-V3": ["index.html"],
  "Portfolio-V4": ["index.html"],
  "Portfolio-Website": ["index.html"],
  "Unika - Responsive One Page HTML5 Template": ["index.html"],
  "videograph-master": ["index.html"]
};

// -------------------------------
// BUILD UI
// -------------------------------
const container = document.getElementById("container");

Object.keys(folderStructure).forEach(folder => {
  const wrapper = document.createElement("div");
  wrapper.className = "category";

  const title = document.createElement("div");
  title.className = "category-title";
  title.textContent = folder;

  wrapper.appendChild(title);

  const children = folderStructure[folder];

  // CASE 1: Folder directly contains index.html → Show Button
  if (children.includes("index.html")) {
    const btn = document.createElement("a");
    btn.className = "btn";
    btn.textContent = folder;
    btn.href = `${folder}/index.html`;
    btn.target = "_blank";
    wrapper.appendChild(btn);
  } 
  else {
    // CASE 2: Folder contains subfolders → Show dropdown
    const dropdown = document.createElement("select");
    dropdown.innerHTML = `<option selected disabled>Select Component</option>`;

    children.forEach(sub => {
      dropdown.innerHTML += `<option value="${sub}">${sub}</option>`;
    });

    dropdown.addEventListener("change", e => {
      const selected = e.target.value;
      window.open(`${folder}/${selected}/index.html`, "_blank");
    });

    wrapper.appendChild(dropdown);
  }

  container.appendChild(wrapper);
});
