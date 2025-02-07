function searchByUsername() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let table = document.getElementById("quizTable");
  let rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    let username = rows[i].getElementsByTagName("td")[1]?.textContent.toLowerCase();

    if (username.includes(input)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}