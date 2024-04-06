const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"] ;

/* Declaring the alternative text for each image file */
const alttext =["eye", "sea wave", " flower", "art", "butterfly"]

/* Looping through images */
for (let i = 0; i< imageArray.length; i++) {

const newImage = document.createElement('img');
newImage.setAttribute('src', "images" + imageArray[i]);
newImage.setAttribute('alt', alttext[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener ("click", (e) => 
(
    displayedImage.src = e.target.src 
)

)

};

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    const btnclass = btn.getAttribute("class");
    if (btnclass === "dark" ) {
        btn.setAttribute("class", " Light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,1)";
    }

    else
 {
        btn.setAttribute("class", "dark");
        btn.textContent ="darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";


    }

    }






)
