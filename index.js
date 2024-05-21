const { to } = require("color-string");

function hambering() {
  const togle=document.querySelector('.sidebar');
const button=document.querySelector('.menu');
  const closing=document.querySelector('.close');
  togle.style.display='flex';
  closing.style.display='block';
  button.style.display='none'; 

}
function closeBack() {
  const togle=document.querySelector('.sidebar');
const button=document.querySelector('.menu');
  const closing=document.querySelector('.close');
  togle.style.display='none';
closing.style.display='none';
button.style.display='block'; 
}
function backToMain() {

  const togle=document.querySelector('.sidebar');
const button=document.querySelector('.menu');
  const closing=document.querySelector('.close');
togle.style.display='none';
closing.style.display='none';
button.style.display='block';
}