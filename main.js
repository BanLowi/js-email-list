let randomEmails = [];
const formEl = document.querySelector("form");

// Ciclo 10 volte l'endpoint e pusho il risultato nell'array
for (let i = 0; i < 10; i++) {
    
    const url = `https://flynn.boolean.careers/exercises/api/random/mail`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const { success, response } = data;
    
            randomEmails.push(response)
        })

}
console.log(randomEmails);

randomEmails.forEach(email => {
    document.createElement("li")
    
});