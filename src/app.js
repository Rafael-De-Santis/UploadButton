let upBtn = document.getElementById("fileBtn");
let filesChosen = document.getElementById("filesChosen");
let fileList = document.getElementById("fileList");


upBtn.addEventListener("change", () => {
    const files = upBtn.files;
    fileList.innerHTML = "";
    filesChosen.textContent = `${files.length} Files Selected`;
    

    Array.from(files).forEach(element => {
        console.log(element);
        fileList.innerHTML += `<li>${element.name}<li/>`
});


});

