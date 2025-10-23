const formEl = document.querySelector("form");

// Genero una lista per il form
const listEl = document.createElement("ul");
listEl.classList.add("list-group", "mt-4")

// Generazione button type=submit
const submitEl = document.createElement("button");
const typeSubmit = document.createAttribute("type");
typeSubmit.value = "submit";
submitEl.innerHTML = "Refresh";
submitEl.classList.add("form-control", "btn", "btn-dark", "mt-4")
submitEl.setAttributeNode(typeSubmit);

// Ciclo 10 volte l'endpoint e pusho il risultato nell'array
for (let i = 0; i < 10; i++) {

    
    const url = `https://flynn.boolean.careers/exercises/api/random/mail`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let randomEmails = [];
            const { success, response } = data;
            randomEmails.push(response)

            

            randomEmails.forEach(email => {
                itemEl = document.createElement("li");
                itemEl.textContent = email;
                itemEl.classList.add("list-group-item")
                listEl.append(itemEl);
            });

            formEl.append(listEl);
            formEl.append(submitEl);
        })
}
console.log(randomEmails);

