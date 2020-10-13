//BTN OPEN
const btnopen = document.querySelector('#open').addEventListener('click', openModal)

function openModal() {
    let create = document.querySelector('.modalOpen')
    create.setAttribute("id", "modalOpen")

    let h2 = document.createElement("h2");
    h2.innerText = 'Hello!';
    document.querySelector(".modalOpen").appendChild(h2)
}

//BTN CLOSE
const btnclose = document.getElementById('close').addEventListener('click', closeModal)

function closeModal() {
    document.querySelector('.modalOpen').removeAttribute("id")
    let h2 = document.getElementsByTagName('h2')[0]
    h2.remove()
}

