document
  .querySelector(".request-compliments")
  .addEventListener("click", function() {
    fetch("/compliments")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".text").innerText = data.compliment;
      })
      .catch(function(err) {
        console.error(err);
      });
  });