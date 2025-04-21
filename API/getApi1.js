var thead = document.getElementById("thead")
thead.style.display = "none"
var button = document.getElementById("button")

const getData = async () => {
    button.style.display = "none"

    thead.style.display = ""

    const response = await fetch("https://reqres.in/api/users?page=2", {
        method: "GET"
    })

    const res = await response.json()

    // console.log(res.data);

    // for(let i=0;i<res.data.length;i++)
    // {
    //     console.log(res.data[i]);

    // }

    // console.log(response);

    const tbody = document.getElementById("tbody")

    for (let i = 0; i < res.data.length; i++) {
        const tr = document.createElement("tr")
        const idTd = document.createElement("td")
        const emailTd = document.createElement("td")
        const firstTd = document.createElement("td")
        const lastTd = document.createElement("td")
        const avatarTd = document.createElement("td")
        const img = document.createElement("img")

        idTd.innerHTML = res.data[i].id
        emailTd.innerHTML = res.data[i].email 
        firstTd.innerHTML = res.data[i].first_name 
        lastTd.innerHTML = res.data[i].last_name 
        img.src = res.data[i].avatar
        


        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(emailTd)
        tr.appendChild(firstTd)
        tr.appendChild(lastTd)
        tr.appendChild(avatarTd)
        avatarTd.appendChild(img)
    }


}