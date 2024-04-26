//function getPerson {
//

let listPeople = [ {
    img: "/Our_People/images/alona_720.jpg",
    name: "Alona",
    age: 18,
    eyeColour: "blue",
},
{
    img: "/Our_People/images/ana_720.jpg",
    name: "Ana",
    age: 18,
    eyeColour: "Brown",
},
{
    img: "/Our_People/images/burak_720.jpg",
    name: "Burak",
    age: 18,
    eyeColour: "Brown",
},
{
    img: "/Our_People/images/kateryna_720.jpg",
    name: "Katya",
    age: 18,
    eyeColour: "Brown",
},
{
    img: "/Our_People/images/khalid_720.jpg",
    name: "Khalid",
    age: 18,
    eyeColour: "Brown",
},
{
    img: "/Our_People/images/lu_720.jpg",
    name: "Lu",
    age: 18,
    eyeColour: "Brown",
},
{
    img: "/Our_People/images/maksym_720.jpg",
    name: "Maksym",
    age: 18,
    eyeColour: "Brown",
},
{
    img: "/Our_People/images/mariia_720.jpg",
    name: "Maria",
    age: 18,
    eyeColour: "Brown",
},
{
    img: "/Our_People/images/olesia_720.jpg",
    name: "Olesia",
    age: 18,
    eyeColour: "Brown",
},
{
    img: "/Our_People/images/taha_720.jpg",
    name: "Taha",
    age: 18,
    eyeColour: "Brown",
}
]

function showInfo (){
    for (let i = 0; i < listPeople.length; i++) {
        const element = listPeople[i];

        let parentElement = document.createElement("div");

        parentElement.classList.add("grid-container");

        let name = document.createElement("h2");
        name.classList.add("names")
        let img = document.createElement("img");
        img.src = element.img;
        name.innerHTML = element.name;
        
        let eyeColour = document.createElement("p");
        eyeColour.innerHTML = element.eyeColour;

        parentElement.appendChild(name);
        parentElement.appendChild(img);
        parentElement.appendChild(eyeColour);
        
        let htmlList = document.getElementById("allPeople"); 
        
        htmlList.appendChild(parentElement);
        
    }
}
showInfo();


