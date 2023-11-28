
const childSelectors = [
    {
        button:'hover-button',
        circlesContainerClass:'example-1',
        childClass:'first-child'
    },
    {
        button:'hover-button-2',
        circlesContainerClass:'example-2',
        childClass:'last-child'
    },
    {
        button:'hover-button-3',
        circlesContainerClass:'example-3',
        childClass:'only-child'
    },
    {
        button:'hover-button-4',
        circlesContainerClass:'example-4',
        childClass:'nth-child-2'
    },
    {
        button:'hover-button-5',
        circlesContainerClass:'example-5',
        childClass:'nth-child-odd'
    },
    {
        button:'hover-button-6',
        circlesContainerClass:'example-6',
        childClass:'nth-child-even'
    },
    {
        button:'hover-button-7',
        circlesContainerClass:'example-7',
        childClass:'nth-child-3n-0'
    },
    {
        button:'hover-button-8',
        circlesContainerClass:'example-8',
        childClass:'nth-child-3n-1'
    },
];

const whiteClass = 'white'
const circlesHTML = `
    <div class="circle">1</div>
    <div class="circle">2</div>
    <div class="circle">3</div>
    <div class="circle">4</div>
    <div class="circle">5</div>
    <div class="circle">6</div>
    <div class="circle">7</div>
`

const mapCircles = () => {
    childSelectors.forEach((element)=>{
        document.getElementsByClassName(element.circlesContainerClass)[0].insertAdjacentHTML("beforeend",circlesHTML);
    });
    mapElements();
}

const mapElements = () => {
    childSelectors.forEach((element)=>{
        document.getElementById(element.button).addEventListener("mouseover", function() {
            var circles = document.querySelectorAll(`.${element.circlesContainerClass} div`);
            circles.forEach(function(circle) {
                circle.classList.add(element.childClass);
                circle.classList.add(whiteClass);
            });
        });
        document.getElementById(element.button).addEventListener("mouseout", function() {
            var circles = document.querySelectorAll(`.${element.circlesContainerClass} div`);
            circles.forEach(function(circle) {
                circle.classList.remove(element.childClass);
                circle.classList.remove(whiteClass);
            });
        });
    });
}

mapCircles();