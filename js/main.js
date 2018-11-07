/*
    BRINDA DHIREN SHAH
    6TH NOV. 2018
    AJAX
*/


document.addEventListener("DOMContentLoaded", init);

let pages = [];

function init() {

    pages = document.querySelectorAll(".page");
    console.log(pages);

    document.getElementById("btnSend").addEventListener("click", function () {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
    });

    document.getElementById("btnBack").addEventListener("click", function () {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
    });



    document.getElementById("btnSend").addEventListener("click", getData);
    document.getElementById("btnBack").addEventListener("click", Again);
}

function Again() {
    document.getElementById("digits").value = "";
    document.getElementById("max").value = "";
}
let returnNum;

function getData() {

    let url = "https://davidst.edumedia.ca/mad9014/nums.php";


    let formData = new FormData();

    formData.append("digits", document.getElementById("digits").value);
    formData.append("max", document.getElementById("max").value);


    let customSettings = {
        mode: "cors",
        method: "POST",
        body: formData
    };

    let request = new Request(url, customSettings);

    console.log(customSettings);

    console.log(request);
    fetch(request)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            returnNum = data.numbers;
            let ul = document.querySelector('.num_list');
            ul.innerHTML = "";
            console.log(returnNum);
            returnNum.forEach(function (num) {
                let li = document.createElement("li");
                li.innerHTML = num;
                ul.appendChild(li);
                li.style.listStyleType = "none";
                li.style.border = "solid 1.5rem pink";
                console.log(num);
            });
        })
        .catch(function (error) {
            alert(error);
        });
}
