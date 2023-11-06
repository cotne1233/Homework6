let div1 = document.getElementById("div1")
let img1 = document.createElement("img")
let h2new = document.createElement("h2")
let div3 = document.querySelector(".div3")
div1.classList.add("wrapper")
div1.appendChild(img1)
div1.appendChild(h2new)
h2new.classList.add("title")
h2new.textContent = "image title"
div3.textContent = "hello"