function openLink(url){
  if(!url || url === "#"){
    alert("Este acceso todavía no tiene un enlace configurado.");
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

function render(){
  const quick = document.getElementById("quickActions");
  const cats = document.getElementById("categories");

  quick.innerHTML = APP_CONFIG.quickActions.map(a =>
    `<button class="action-btn" onclick='openLink(${JSON.stringify(a.url)})'>${a.icon || ""} ${a.label}</button>`
  ).join("");

  cats.innerHTML = APP_CONFIG.categories.map(c => `
    <article class="category">
      <h3>${c.icon || ""} ${c.title}</h3>
      <div class="links">
        ${c.links.map(l => `
          <button class="link-btn" onclick='openLink(${JSON.stringify(l.url)})'>
            <span class="icon">${l.icon || "🔗"}</span>${l.label}
          </button>
        `).join("")}
      </div>
    </article>
  `).join("");
}

document.getElementById("resetBtn").addEventListener("click", () => {
  render();
});

render();