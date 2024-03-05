const search = () => {
  fetch(
    "https://api.dataforsyningen.dk/adgangsadresser?vejnavn=Rødkildevej"
  ).then((response) =>
    response.json().then((data) => {
      console.log(data);
      let html = "<ul>";
      data.forEach((element) => {
        html += "<li>" + element.adressebetegnelse + "</li>";
      });
      html += "</ul>";
      document.getElementById("found").innerHTML = html;
    })
  );
};

window.onload = () => {
  document.getElementById("searchButton").addEventListener("click", search);
};
