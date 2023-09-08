addEventListener("DOMContentLoaded", ()=>{
  fetch(`https://rickandmortyapi.com/api/character/1`)
      .then((resposta)=>{
        return resposta.json()
      })
      .then((resposta)=>{
        let img = document.querySelector(".img")
        let nome = document.querySelector(".name")
        img.setAttribute("src",`${resposta.image}`)
        nome.innerHTML = resposta.name
      })
    
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const input = document.querySelector("#input").value
      fetch(`https://rickandmortyapi.com/api/character/${input}`)
      .then((resposta)=>{
        return resposta.json()
      })
      .then((resposta)=>{
        let img = document.querySelector(".img")
        let nome = document.querySelector(".name")
        img.setAttribute("src",`${resposta.image}`)
        nome.innerHTML = resposta.name
      })
      })
})