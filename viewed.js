let otwarty = document.getElementsByClassName('active')[0].id;
sessionStorage.setItem(otwarty, true);

function changeToViewed(){
    sessionStorage.setItem('instagram', true);
}
let instagramButton = document.getElementById('instagram');
instagramButton.addEventListener("click", changeToViewed);
instagramButton.addEventListener("auxclick", changeToViewed);

let index = sessionStorage.getItem('index');
let about = sessionStorage.getItem('about');
let gallery = sessionStorage.getItem('gallery');
let instagram = sessionStorage.getItem('instagram');
let contact = sessionStorage.getItem('contact');

function isViewed(viewed, name){
    if(viewed == "true"){
        viewed = true;
        document.getElementById(name).innerHTML += " ☑";
    }
    else {
        viewed = false;
    }}

isViewed(index, "index");
isViewed(about, "about");
isViewed(gallery, "gallery");
isViewed(instagram, "instagram");
isViewed(contact, "contact");