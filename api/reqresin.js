'use strict';

const peeps = document.querySelector("#peeps");
const username = document.querySelector(`#name`);
const job = document.querySelector(`#job`);

const printNameToScreen = (name) => {
    let user = document.createElement("p");
    let text = document.createTextNode(`${name}`);
    user.appendChild(text);
    peeps.appendChild(user);
} 

const retrieveData = () => {
    fetch("https://reqres.in/api/users")
        .then((response) => {
            // check that the response is OK (i.e. 200)
            if (response.status !== 200) {
                throw new Error("I don't have a status of 200");
            } else {
                console.log(response);
                // json-ify it, which returns a promise
                response.json().then((infoFromServer) => {
                    console.log(infoFromServer);
                    for (let user of infoFromServer.data) {
                        console.log(user.first_name);
                        printNameToScreen(user.first_name);
                    }
                });
            }
        }).catch((error) => {
            console.error(error);
        })
}

const createUsers = () => {
    const userValue = username.value;
    const jobValue = job.value;

    let data = {
        name: userValue,
        job: jobValue
    }

    fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(info => console.log(info))
    .catch(err => console.error(`error ${err}`));
}

retrieveData();
createUsers();