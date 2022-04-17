document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("ramen-menu")

    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            loadMenu(element)
        });
    })

    function loadMenu(item) {
        let image = document.createElement("img")
        image.setAttribute("src", `${item.image}`)
        menuContainer.append(image)

        image.addEventListener("click", () => {
            displayInfo(item)
        })
    }

    function displayInfo(item) {
        console.log(item)
    }
})
