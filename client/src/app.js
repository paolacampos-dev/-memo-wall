//TODO: collect users' data and send to the server:

const memowallForm = document.getElementById("memowall-form");

memowallForm.addEventListener("submit", handleForm);

function handleForm(event)  {
    event.preventDefault();
    const formDataTemplate = new FormData(memowallForm);
    const formValues = Object.fromEntries(formDataTemplate);
    // console.log(formValues);
    fetch("https://memo-wall-client.onrender.com", {
        method: "POST",
        headers:    {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ formValues }),
    });
}


//TODO: render users' data on the interface:
//fetch the GET route from the server
async function getMemoWall ()   {
    const response = await fetch("https://memo-wall-server.onrender.com/memowall");
    const data = await response.json();
    console.log(data);
    // render the data using DOM elements (one per piece of data)
    const memowallDB = document.getElementById("memowall-DB");
    for (let i=0; i<data.length; i++)   {
        const div = document.createElement("div");
        memowallDB.appendChild(div);
        const name = document.createElement("strong");
        name.textContent = data[i].name;
        div. appendChild(name);
        const comment = document.createElement("p");
        comment.textContent = data[i].comment;
        div.appendChild(comment);
    }
}
getMemoWall();


