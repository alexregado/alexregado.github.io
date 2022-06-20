// CREATE THE ELEMENT
let goHome = document.createElement("div");
goHome.classList.add("goHome");
goHome.innerHTML = "<a href='./index.html' title='Go to Homepage'><img src='./images/home.png' alt='Home Icon' title='Go to Homepage'></a><p class='openWidget'>&nbsp;&nbsp;&nbsp;&nbsp;></p>";

// APPEND ELEMENT
let mc = document.querySelector(".mainContainer")
mc.appendChild(goHome) 


// BEHAVIOUR ON GOHOME BUTTON


function openOrClose(){
    setInterval(() => {
        let openWidget = document.querySelector(".openWidget");
        if(openWidget){
        openWidget.addEventListener('click', ()=>{
            openWidget.classList.replace("openWidget", "closeWidget");
            openWidget.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<";
            goHome.style.left = "-19px";
        });
        }
        let closeWidget = document.querySelector(".closeWidget");
        if(closeWidget){
            closeWidget.addEventListener('click', ()=>{
                closeWidget.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;>";
                goHome.style.left = "-111px";
                closeWidget.classList.replace("closeWidget", "openWidget");
            });
        }
    }, 1000);
}

openOrClose();

