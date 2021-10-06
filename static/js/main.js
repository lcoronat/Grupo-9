function buscar() {
    var input, filter, table, li, i, txtValue;
    input = document.getElementById("search-box");
    filter = input.value;
  
    table = document.getElementById("tabla");
    li = table.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++) {
      r = li[i].getElementsByTagName("p")[1];
      if (r) {
        txtValue = r.textContent || r.innerText;
        if (txtValue.indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }       
    }
  }