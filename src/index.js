document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("ramen-menu")
    const detailContainer = document.getElementById("ramen-detail")

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
        detailContainer.querySelector("img").setAttribute("src", `${item.image}`);
        detailContainer.querySelector("h2").innerText = item.name;
        detailContainer.querySelector("h3").innerText = item.restaurant;
        document.getElementById("rating-display").innerText = item.rating;
        document.getElementById("comment-display").innerText = item.comment;
    }
})
