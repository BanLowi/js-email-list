const formEl = document.querySelector("form");

//Generazione button type=submit
const submitEl = document.createElement("button");
const typeSubmit = document.createAttribute("type");
typeSubmit.value = "submit";
submitEl.innerHTML = "Refresh";
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

            // Creo una lista con dentro
            randomEmails.forEach(email => {
                const listEl = document.createElement("ul");
                listEl.innerHTML = `<li>${email}</li>`;
                formEl.append(listEl);
            });

            formEl.append(submitEl);
        })

}
console.log(randomEmails);

