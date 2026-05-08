// LOAD DASHBOARD
window.onload = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/status");
    const data = await res.json();

    document.getElementById("node").textContent = data.node;
    document.getElementById("status").textContent = data.status;
    document.getElementById("deadline").textContent = data.deadline;
  } catch (e) {
    console.log(e);
  }
};

// SEARCH FUNCTION
async function search() {
  const query = document.getElementById("searchInput").value;

  const res = await fetch(`http://localhost:5000/api/search?q=${query}`);
  const data = await res.json();

  let html = "";

  data.results.forEach(item => {
    html += `
      <div class="item">
        <h3>${item.title}</h3>
        <p>${item.type}</p>
      </div>
    `;
  });

  document.getElementById("results").innerHTML = html;
}