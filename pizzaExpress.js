async function caricaPizze() {
  const url = "https://fastapi-pizza-backend.fastapicloud.dev/pizze";
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Errore: ${response.status}`);

    const pizze = await response.json();
    const articleListaPizze = document.getElementById("LISTA_PIZZE");
    articleListaPizze.innerHTML = "";

    if (pizze.length === 0) {
      articleListaPizze.innerHTML = "<div class='status-messaggio'>Nessuna pizza nel menu al momento.</div>";
      return;
    }

    pizze.forEach((pizza) => {
      // Creiamo la card principale
      const divPizza = document.createElement("div");
      divPizza.className = "pizza-card"; 

      // Creiamo l'elemento per il Nome
      const nomeEl = document.createElement("div");
      nomeEl.className = "pizza-nome";
      nomeEl.innerText = pizza.nome;

      // Creiamo l'elemento per gli Ingredienti
      const ingEl = document.createElement("div");
      ingEl.className = "pizza-ingredienti";
      ingEl.innerText = pizza.ingredienti;

      // Creiamo l'elemento per il Prezzo
      const prezzoEl = document.createElement("div");
      prezzoEl.className = "pizza-prezzo";
      prezzoEl.innerText = `€${pizza.prezzo.toFixed(2)}`;

      // Appendiamo i pezzi dentro la card, e la card dentro la lista
      divPizza.appendChild(nomeEl);
      divPizza.appendChild(ingEl);
      divPizza.appendChild(prezzoEl);
      articleListaPizze.appendChild(divPizza);
    });

  } catch (error) {
    console.error("Impossibile caricare le pizze:", error);
    const articleListaPizze = document.getElementById("LISTA_PIZZE");
    if (articleListaPizze) {
      articleListaPizze.innerHTML = "<div class='status-messaggio' style='color: #e74c3c;'>Si è verificato un errore nel caricamento del menu.</div>";
    }
  }
}

document.addEventListener("DOMContentLoaded", caricaPizze);