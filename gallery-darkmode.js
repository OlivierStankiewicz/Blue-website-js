let isDark = localStorage.getItem("isDark");
if(isDark == "true"){
    isDark = true;
}
else {
    isDark = false;
}

let tlo = document.getElementById('body');
let tytul = document.getElementById('header');
let lightButton = document.createElement("button");
lightButton.className = "lightButton";
lightButton.textContent = "TRYB CIEMNY";
let darkButton = document.createElement("button");
darkButton.className = "darkButton";
darkButton.textContent = "TRYB JASNY";
document.getElementById('darkButton').appendChild(darkButton);
document.getElementById('darkButton').appendChild(lightButton);
darkButton.addEventListener("click", ChangeToLight);
lightButton.addEventListener("click", ChangeToDark);

if ( isDark == false){
    darkButton.style.display = 'none';
    tlo.classList.remove('dark');
    tlo.classList.add('light');
    tytul.classList.remove('dark-header');
    tytul.classList.add('light-header');
}
else{
    lightButton.style.display = 'none';
    tlo.classList.remove('light');
    tlo.classList.add('dark'); 
    tytul.classList.remove('light-header');
    tytul.classList.add('dark-header');
}

function ChangeToDark(){
    lightButton.style.display = 'none';  
    darkButton.style.display = 'initial';
    localStorage.setItem("isDark", true);
    tlo.classList.remove('light');
    tlo.classList.add('dark');
    tytul.classList.remove('light-header');
    tytul.classList.add('dark-header');
}

function ChangeToLight(){
    darkButton.style.display = 'none';
    lightButton.style.display = 'initial';
    localStorage.setItem("isDark", false);
    tlo.classList.remove('dark');
    tlo.classList.add('light');
    tytul.classList.remove('dark-header');
    tytul.classList.add('light-header');
}