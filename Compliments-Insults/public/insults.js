document
  .querySelector(".request-insults")
  .addEventListener("click", function() {
    fetch("/insults")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".text").innerText = data.insult;
      })
      .catch(function(err) {
        console.error(err);
      });
  });