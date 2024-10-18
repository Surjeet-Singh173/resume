// Target and current value initally is 0 and will be used for smooth scroll event 
var target=0;
var current=0;

// This is for the edge case of tolerance 
const sectionTolerances=[9,250];

var check=0

// adding the nav list id's in js to control the scrollbar from top
var home=document.getElementById("HomeLink")
var about=document.getElementById("AboutLink");
var skills=document.getElementById("SkillLink");
var experience=document.getElementById("ExperienceLink");
var education=document.getElementById("EducationLink");
var certificate=document.getElementById("CertificatesLink");
var contact=document.getElementById("ContactLink");

// adding the scetion id's where we want to navigate on click of nav list according to name;
var homesection=document.getElementById("body-header");
var aboutsection=document.getElementById('about-section');
var skillsection=document.getElementById('skills-section');
var experiencesection=document.getElementById('experience-section');
var educationsection=document.getElementById('education-section');
var certificatesection=document.getElementById('certificate-section');
var contactsection=document.getElementById('contact-section')

function scrollEvent(){
    function scrollyby(){
        const tolarance=sectionTolerances[check];
        var diff=target-current
        if (diff<=tolarance){
            clearInterval(interval);
            
        }else{
            window.scrollBy(0,50);
            current=scrollY;
        }
        
    }
    var interval=setInterval(scrollyby,10);
}

function homeClicked(){
    check=0;
    target=homesection.offsetTop;
    current=window.scrollY;
    scrollEvent();
};

function aboutClicked(){
    check=0;
    target=aboutsection.offsetTop;
    current=window.scrollY;
    scrollEvent();
};

function skillsClicked(){
    check=0;
    target=skillsection.offsetTop;
    current=window.scrollY;
    scrollEvent();
};

function experienceClicked(){
    check=0;
    target=experiencesection.offsetTop;
    current=window.scrollY;
    scrollEvent();
};

function educationClicked(){
    check=0;
    target=educationsection.offsetTop;
    current=window.scrollY;
    scrollEvent();
};

function certificateClicked(){
    check=0;
    target=certificatesection.offsetTop;
    current=window.scrollY;
    scrollEvent();
};

function contactClicked(){
    check=1;
    target=contactsection.offsetTop;
    current=window.scrollY;
    scrollEvent();
};

home.addEventListener('click',homeClicked);
about.addEventListener('click',aboutClicked);
skills.addEventListener('click',skillsClicked);
experience.addEventListener('click',experienceClicked);
education.addEventListener('click',educationClicked);
certificate.addEventListener('click',certificateClicked);
contact.addEventListener('click',contactClicked);

// Skills editing 
var firstTime=false;
var skillContainer=document.getElementById("DivSkillContainer");
var progressBars=document.querySelectorAll('.skills-div>div');
var SkillsHolder=document.querySelectorAll('.skillnameholder>span');
function initialBars(){
    for (let bar of progressBars){
        bar.style.width=0+'%';
    };
    for ( var i of SkillsHolder){
       i.style.color='lightgrey';
    }
}
function fillBars(){
    for (let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';

        },10)
    };
    for ( var i of SkillsHolder){
        i.style.color='white'
    }
}
var count=0;
function WindowScrolled(){
    var visibleScreen=window.innerHeight;
    var content=skillContainer.getBoundingClientRect();
    if (firstTime==false && content.top>=0 && content.bottom<=visibleScreen){
        firstTime=true;
        fillBars()
        count=0;
    };
    if (content.top>=visibleScreen && count<=0){
        initialBars();
        count=1
        firstTime=false;
    }
};
window.addEventListener('scroll',WindowScrolled)