// Interaction on homepage with the fun facts section.

// Setting variables for index.html file.
let revealFunFactsButton = document.querySelector('#reveal-fun-facts');
let hideFunFactsButton = document.querySelector('#hide-fun-facts');
let funFacts = document.querySelector('#fun-facts');

// Function to reveal fun facts and then replace button with option to hide fun facts.
function revealFunFacts () {
    funFacts.style.display = "block";
    revealFunFactsButton.style.display = "none";
    hideFunFactsButton.style.display = "block";
}

// Function to hide fun facts and then replace the hide button with the reveal button.
function hideFunFacts () {
    funFacts.style.display = "none";
    revealFunFactsButton.style.display = "block";
    hideFunFactsButton.style.display = "none";
}

// Call on functions.
revealFunFactsButton.addEventListener('click', revealFunFacts);
hideFunFactsButton.addEventListener('click', hideFunFacts);


// Interaction to underline navigation elements on a mouseover.
// Defining the variables.
const firstNavPage = document.querySelector('.home');
const secondNavPage = document.querySelector('.favbooks');
const thirdNavPage = document.querySelector('.violin');
const fourthNavPage = document.querySelector('.recipes');
const fifthNavPage = document.querySelector('.crochet');
const sixthNavPage = document.querySelector('.contact');

// Creating the function to underline the navigation elements and the reset function so that the element will have no underline once the user's mouse leaves.

function resetUnderlineForFirstPage() {
    firstNavPage.style.textDecoration = "none";
}
function underlineFirstNav () {
    firstNavPage.style.textDecoration = 'underline';
}
function resetUnderlineForSecondPage() {
    secondNavPage.style.textDecoration = "none";
}
function underlineSecondNav () {
    secondNavPage.style.textDecoration = 'underline';
}
function resetUnderlineForThirdPage() {
    thirdNavPage.style.textDecoration = "none";
}
function underlineThirdNav () {
    thirdNavPage.style.textDecoration = 'underline';
}
function resetUnderlineForFourthPage() {
    fourthNavPage.style.textDecoration = "none";
}
function underlineFourthNav () {
    fourthNavPage.style.textDecoration = 'underline';
}
function resetUnderlineForFifthPage() {
    fifthNavPage.style.textDecoration = "none";
}
function underlineFifthNav () {
    fifthNavPage.style.textDecoration = 'underline';
}
function resetUnderlineForSixthPage() {
    sixthNavPage.style.textDecoration = "none";
}
function underlineSixthNav () {
    sixthNavPage.style.textDecoration = 'underline';
}

// Calling on the functions.
firstNavPage.addEventListener('mouseover', underlineFirstNav);
firstNavPage.addEventListener('mouseout', resetUnderlineForFirstPage);

secondNavPage.addEventListener('mouseover', underlineSecondNav);
secondNavPage.addEventListener('mouseout', resetUnderlineForSecondPage);

thirdNavPage.addEventListener('mouseover', underlineThirdNav);
thirdNavPage.addEventListener('mouseout', resetUnderlineForThirdPage);

fourthNavPage.addEventListener('mouseover', underlineFourthNav);
fourthNavPage.addEventListener('mouseout', resetUnderlineForFourthPage);

fifthNavPage.addEventListener('mouseover', underlineFifthNav);
fifthNavPage.addEventListener('mouseout', resetUnderlineForFifthPage);

sixthNavPage.addEventListener('mouseover', underlineSixthNav);
sixthNavPage.addEventListener('mouseout', resetUnderlineForSixthPage);
