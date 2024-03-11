function search() {
  fetch(
    "https://api.dataforsyningen.dk/adgangsadresser?vejnavn=Rødkildevej"
  ).then((response) =>
    response.json().then((data) => {
      console.log(data);
      let html = "<div class='container'><div class='row'>";
      data.forEach((element) => {
        html +=
          "<div class='col-6 col-sm-4 col-md-3 col-xl-2' >" +
          element.adressebetegnelse +
          "</div>";
      });
      html += "</div><div>";
      document.getElementById("found").innerHTML = html;
    })
  );
}

window.onload = () => {
  document.getElementById("searchButton").addEventListener("click", search);
};
