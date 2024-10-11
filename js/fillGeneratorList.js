const genDiv = document.getElementById("genList");

window.onload = function(){
    generatorList.forEach(element => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<h3>${element.name}</h3>`
        newDiv.innerHTML = `${newDiv.innerHTML} <p>${element.desc}</p>`
        newDiv.innerHTML = `${newDiv.innerHTML} <a href="${element.link}">${element.name}</a>`
        genDiv.append(newDiv);
    })

}