

fetch("https://pizzaexpress.free.beeceptor.com/api/pizze")
    .then(response => response.json())
    .then(PIZZE => {
    
        const ARTICLE_LISTA_PIZZE = document.getElementById("LISTA_PIZZE");

        PIZZE.forEach((PIZZA) => {

            const DIV_PIZZA = document.createElement("div");
            DIV_PIZZA.innerText = PIZZA.name + " " + PIZZA.prezzo;
            ARTICLE_LISTA_PIZZE.appendChild(DIV_PIZZA);

        });
    });
