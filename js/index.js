


function copyText(event) {
    event.preventDefault(); // For page not reload

    const link = event.target;
    const text = link.innerText;

    navigator.clipboard.writeText(text)
      .then(() => {
        link.innerText = "Copiado!";
        link.style.color = "green";

        setTimeout(() => {
          link.innerText = text;
          link.style.color = "";
        }, 1000);
      })
      .catch(err => console.error("Error to copy:", err));
  }