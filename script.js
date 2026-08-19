/*/const mywebsitebg = document.getElementById("mywebsitebg")/*/

const textbox = document.getElementById("text-box")

const overlay = document.getElementById("overlay");

const backbtngroup =document.getElementsByClassName("backbtn");

const backButton = document.querySelector('.backbtn');

const aboutbtn = document.getElementById("about-btn");

const aboutme=document.getElementById("aboutme");

const performance=document.getElementById("performance");

const performancebtn = document.getElementById("performance-btn");

const digitalart = document.getElementById("digitalart");

const digitalartlist = document.getElementById("digitalartlist");

const detailthreed=document.getElementById("detailthreed");

const threedmodel = document.getElementById("threedmodel");

const conceptart = document.getElementById("conceptart");

const detailconceptart = document.getElementById("detailconceptart");

const characterdesign = document.getElementById("characterdesign");

const detailcharacterdesign = document.getElementById("detailcharacterdesign");

const detailanimation = document.getElementById("detailanimation");

const animation = document.getElementById("animation");

const certificatebtn = document.getElementById("certificate-btn");

const certificate = document.getElementById("certificate");

const gellerynext = document.querySelector("#gallery .next");

const gelleryprev = document.querySelector("#gallery .prev");









/*/mywebsitebg.addEventListener("click",onmywebsitebgclick)/*/

overlay.addEventListener("click",onoverlayclick);

overlay.addEventListener('click', onhideGallery);

aboutbtn.addEventListener("click",onaboutclick);

performancebtn.addEventListener("click",onperformanceclick);

digitalart.addEventListener("click",ondigitalartclick);

threedmodel.addEventListener("click",onthreedmodelclick);

conceptart.addEventListener("click",onconceptartclick);

characterdesign.addEventListener("click",oncharacterdesignclick);

animation.addEventListener("click",onanimationclick);

certificatebtn.addEventListener("click",oncertificatebtnclick);

gellerynext.addEventListener("click",ongellerynextclick);

gelleryprev.addEventListener("click",ongelleryprevclick);

backButton.addEventListener('click', onhideGallery);




const gallery1=[
    "/image/performance/scaledown/conceptartscaledown/CrimsonHorn_full.png",
    "/image/performance/scaledown/conceptartscaledown/Blank_full.png",
    "/image/performance/scaledown/conceptartscaledown/seleus final fight_full.png",
    "/image/performance/scaledown/conceptartscaledown/Spine_full.png",
    "/image/performance/scaledown/conceptartscaledown/Knight_full.png",
    "/image/performance/scaledown/conceptartscaledown/Jounal_full.png",
    "/image/performance/scaledown/conceptartscaledown/EchoesOfADying Civilization_full.png",
    "/image/performance/scaledown/conceptartscaledown/DreamCastle_full.png",
    "/image/performance/scaledown/conceptartscaledown/JustADream_full.png",
]

const gallery2=[
    "/image/performance/scaledown/characterdesign scaledown/DragonFruit.png",
    "/image/performance/scaledown/characterdesign scaledown/DragonxWixardposter.png",
    "/image/performance/scaledown/characterdesign scaledown/SpaceFox.png",
    "/image/performance/scaledown/characterdesign scaledown/Stingray.png"
]

const gallery3=[
    "/image//performance/scaledown/3Dscaledown/Bridge.png",
    "/image/performance/scaledown/3Dscaledown/Chest.png",
    "/image/performance/scaledown/3Dscaledown/ICTmushroom.png"

]

const galler4=[
    "/image//performance/scaledown/animationscaledown/RedSky.png",
    "/image/performance/scaledown/animationscaledown/Emily.png"
]

const allGalleries = {
    1: gallery1,
    2: gallery2,
    3: gallery3
}


const gallery = document.getElementById("gallery");
const galleryimage = document.querySelector("#gallery img");
let galleryindex = 0;
let gallerynumber = 1;



function onoverlayclick(){
    hideAboutMe();
    hidePerformance();
    hideDigitalArtList();
    hideDetailThreeD();
    hideOverlay();
    hideDetailConceptArt();
    hidedetailcharacterdesign();
    hidedetailanimation();
    hidecertificate();

}

/*/function onmywebsitebgclick(){
    hidemywebsitebg();
    hidetextbox();

}

function hidemywebsitebg(){
    mywebsitebg.classList.remove("show");
}/*/

function hidetextbox(){
    console.log("in");
    textbox.classList.remove("show");
    console.log(textbox.children[0]);
}



function showOverlay (){
    overlay.classList.add("show");
}

function hideOverlay(){
    overlay.classList.remove("show");
}

function onbackbtnclick (){
    hideDetailThreeD();
    showPerformance();
    hideDigitalArtList();
    hideDetailConceptArt();
    hidedetailcharacterdesign();
    hidedetailanimation();
    onhideGallery();
}

function onaboutclick(){
    console.log("click");
    if (aboutme.classList.contains("show")){
        hideAboutMe();
    }
    else{
        hidePerformance();
        hideDetailThreeD();
        showAboutMe();
        showOverlay();
    }

}

function hideAboutMe(){
    aboutbtn.children[0].src="/image/aboutme.icon.png";
    aboutme.classList.remove("popup");
    setTimeout(() => {
        console.log("in");
        aboutme.classList.remove("show");
    }, 500);
}

function showAboutMe(){
    aboutbtn.children[0].src="/image/aboutmeyellow.icon.png";
    aboutme.classList.add("show");
    setTimeout(() => {
        console.log("in");
        aboutme.classList.add("popup");
    }, 100);
}

function onperformanceclick(){
    console.log("click");
    if (performance.classList.contains("show")){
        hidePerformance();
    }
    else{
        hideAboutMe();
        hideDetailThreeD();
        hideDigitalArtList();
        hidedetailcharacterdesign();
        showPerformance();
        showOverlay();
        
    }
}

function hidePerformance(){
    performancebtn.children[0].src="/image/performance.icon.png";
    performance.classList.remove("popup");
    
    console.log("in");
    performance.classList.remove("show");
    console.log(performance.children[0]);
    performance.children[0].classList.remove("active");
}

function showPerformance(){
    performancebtn.children[0].src="/image/performanceyellow.icon.png";
    performance.classList.add("show");
    console.log("in");
    performance.classList.add("popup");
    console.log(performance.children[0]);
    performance.children[0].classList.add("active");
}



document.addEventListener("DOMContentLoaded", onLoaded);

function onLoaded() {
    var detailconceptArtGrid = document.querySelector('#detailconceptart .grid');

    var detailonceptMsnry = new Masonry( detailconceptArtGrid, {
        itemSelector: '.grid-item',
        columnWidth: 470,
        percentPosition: true,
        gutter:10
    });

    imagesLoaded( detailconceptArtGrid ).on( 'progress', function() {
    // layout Masonry after each image loads
        detailonceptMsnry.layout();
    });


    var detailcharacterdesignArtGrid = document.querySelector('#detailcharacterdesign .grid');

    var detailcharacterdesignMsnry = new Masonry( detailcharacterdesignArtGrid, {
        itemSelector: '.grid-item',
        columnWidth: 470,
        percentPosition: true,
        gutter:10
    });

    imagesLoaded( detailcharacterdesignArtGrid ).on( 'progress', function() {
    // layout Masonry after each image loads
        detailcharacterdesignMsnry.layout();
    });


    var detailthreedArtGrid = document.querySelector('#detailthreed .grid');

    var detailthreedMsnry = new Masonry( detailthreedArtGrid, {
        itemSelector: '.grid-item',
        columnWidth: 470,
        percentPosition: true,
        gutter:10
    });

    imagesLoaded( detailthreedArtGrid ).on( 'progress', function() {
    // layout Masonry after each image loads
        detailthreedMsnry.layout();
    });


     var detailanimationArtGrid = document.querySelector('#detailanimation .grid');

    var detailanimationMsnry = new Masonry( detailanimationArtGrid, {
        itemSelector: '.grid-item',
        columnWidth: 470,
        percentPosition: true,
        gutter:10
    });

    imagesLoaded( detailanimationArtGrid ).on( 'progress', function() {
    // layout Masonry after each image loads
        detailanimationMsnry.layout();
    });

    document.querySelectorAll(".grid-item img").forEach((image) => {
        console.log(image);
        image.addEventListener("click", onShowGallery);
    });
}
/**end of load */

function onShowGallery(event) {
    console.log(event.target);

    gallerynumber = parseInt(event.target.getAttribute("data-gallery"));
    galleryindex = parseInt(event.target.getAttribute("data-index"));

    if (gallerynumber == 1){
        galleryimage.src = gallery1[galleryindex];
    }else if (gallerynumber == 2){
        galleryimage.src = gallery2[galleryindex];
    }
    gallery.classList.add("show");
}

const currentGallery = allGalleries[gallerynumber];
if (currentGallery) {
        galleryimage.src = currentGallery[galleryindex];
        gallery.classList.add("show");
    }

for (i = 0; i < backbtngroup.length; i++) {
    backbtngroup[i].addEventListener("click",onbackbtnclick);
}


function onhideGallery(event) {
    
    gallery.classList.remove("show");
}




function ongellerynextclick(){
    galleryindex += 1;
    const currentGallery = allGalleries[gallerynumber];

    if (currentGallery) {
        if (galleryindex >= currentGallery.length) {
            galleryindex = 0; // วนกลับไปรูปแรก
        }
        galleryimage.src = currentGallery[galleryindex];
    }
}


function ongelleryprevclick(){
    galleryindex -= 1;
    const currentGallery = allGalleries[gallerynumber];

    if (currentGallery) {
        if (galleryindex < 0) {
            galleryindex = currentGallery.length - 1; // ไปรูปสุดท้าย
        }
        galleryimage.src = currentGallery[galleryindex];
    }
}


    if (gallerynumber==1){

        if(galleryindex<0){
            galleryindex=gallery1.length-1;
        }
        galleryimage.src = gallery1[galleryindex];
    }
    else if (gallerynumber == 2){
        if(galleryindex < 0){
            galleryindex = gallery2.length - 1;
        }
        galleryimage.src = gallery2[galleryindex];
        
    }











function ondigitalartclick(){
    console.log("click");
    if (digitalartlist.classList.contains("show")){
        hideDigitalArtList();
    }
    else{
        hideAboutMe();
        hideDetailThreeD();
        showDigitalArtList();
        showOverlay();
        hidePerformance();
    }
}

function hideDigitalArtList(){
    console.log("in");
    digitalartlist.classList.remove("popup");
    console.log(digitalartlist.children[0]);
    digitalartlist.children[0].classList.remove("active");
    
}


function showDigitalArtList(){
    setTimeout(() => {
        console.log("in");
        digitalartlist.classList.add("popup");
        console.log(digitalartlist.children[0]);
        digitalartlist.children[0].classList.add("active");
    }, 100);
}

function onconceptartclick(){
    console.log("click");
    if(detailconceptart.classList.contains("show")){
        hidedetailconceptart();
    }
    else{
        showDetailConceptArt();
        showOverlay();
        hideDigitalArtList();
    }
}

function hideDetailConceptArt(){
    console.log("in");
    detailconceptart.classList.remove("popup");
    console.log(detailconceptart.children[0]);
    detailconceptart.children[0].classList.remove("active");
}

function showDetailConceptArt(){
    setTimeout(() => {
        console.log("in");
        detailconceptart.classList.add("popup");
        console.log(detailconceptart.children[0]);
        detailconceptart.children[0].classList.add("active");
    }, 100);
}

function onthreedmodelclick(){
    console.log("click");
    if (detailthreed.classList.contains("show")){
        hideDetailThreeD();
    }
    else{
        hidePerformance();
        showDetailthreed();
    }
}

function hideDetailThreeD(){
    console.log("in");
    detailthreed.classList.remove("popup");
    console.log(detailthreed.children[0]);
    detailthreed.children[0].classList.remove("active");
   
}


function showDetailthreed(){
    setTimeout(() => {
        console.log("in");
        detailthreed.classList.add("popup");
        console.log(detailthreed.children[0]);
        detailthreed.children[0].classList.add("active");
    }, 100);
}


function oncharacterdesignclick(){
    console.log("click");
    if (detailcharacterdesign.classList.contains("show")){
        hidedetailcharacterdesign();
    }
    else{
        hideAboutMe();
        hideDetailThreeD();
        showdetailcharacterdesign();
        showOverlay();
        hidePerformance();
        hideDigitalArtList();
    }
}

function hidedetailcharacterdesign(){
    console.log("in");
    detailcharacterdesign.classList.remove("popup");
    console.log(detailcharacterdesign.children[0]);
    detailcharacterdesign.children[0].classList.remove("active");
    
}


function showdetailcharacterdesign(){
    setTimeout(() => {
        console.log("in");
        detailcharacterdesign.classList.add("popup");
        console.log(detailcharacterdesign.children[0]);
        detailcharacterdesign.children[0].classList.add("active");
    }, 100);
}



function onanimationclick(){
    console.log("click");
    if (detailanimation.classList.contains("show")){
        hidedetailanimation();
    }
    else{
        hideAboutMe();
        hideDetailThreeD();
        showdetailanimation();
        showOverlay();
        hidePerformance();
        hideDigitalArtList();
        hidedetailcharacterdesign();
    }
}

function hidedetailanimation(){
    console.log("in");
    detailanimation.classList.remove("popup");
    console.log(detailanimation.children[0]);
    detailanimation.children[0].classList.remove("active");
    
}


function showdetailanimation(){
    setTimeout(() => {
        console.log("in");
        detailanimation.classList.add("popup");
        console.log(detailanimation.children[0]);
        detailanimation.children[0].classList.add("active");
    }, 100);
}

function oncertificatebtnclick(){
    console.log("click");
    if (certificate.classList.contains("show")){
        hidecertificate();
    }
    else{
        showcertificate();
        showOverlay();
    }
}

function hidecertificate(){
    certificate.classList.remove("popup");
    setTimeout(() => {
        console.log("in");
        certificate.classList.remove("show");
    }, 500);
    
}


function showcertificate(){
    certificate.classList.add("show");
    setTimeout(() => {
        console.log("in");
        certificate.classList.add("popup");
    }, 100);
}

gallery.classList.remove("show");