const getData = async () => {
    button.style.display = "none";
    thead.style.display = "";

    const response = await fetch("https://node5.onrender.com/user/user", {
        method: "GET"
    });

    var res = await response.json();
    console.log("res....", res);

    const tbody = document.getElementById("tbody");

    // ✅ Clear previous table data
    tbody.innerHTML = "";

    for (let i = 0; i < res.data.length; i++) {
        const tr = document.createElement("tr");
        const idTd = document.createElement("td");
        const nameTd = document.createElement("td");
        const emailTd = document.createElement("td");
        const ageTd = document.createElement("td");
        const statusTd = document.createElement("td");
        const actionTd = document.createElement("td");
        const btn = document.createElement("button");

        idTd.innerHTML = res.data[i]._id;
        nameTd.innerHTML = res.data[i].name;
        emailTd.innerHTML = res.data[i].email;
        ageTd.innerHTML = res.data[i].age;
        statusTd.innerHTML = res.data[i].isActive ? "Active" : "Not Active";
        btn.innerHTML = "DELETE";
        btn.setAttribute("class", "btn btn-danger");

        btn.addEventListener("click", async () => {
            await fetch("https://node5.onrender.com/user/user/" + res.data[i]._id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // ✅ Refresh the table after deletion
            getData();
        });

        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(ageTd);
        tr.appendChild(statusTd);
        actionTd.appendChild(btn);
        tr.appendChild(actionTd);

        tbody.appendChild(tr);
    }
}
