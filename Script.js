const textToType = "I build robust web applications, configure cloud environments, and develop custom code compilers.Passionate about solving complex technical challenges and turning ideas into efficient digital products.";
const speed = 40; 
let i = 0;

function typeWriter() {
  if (i < textToType.length) {
    document.getElementById("typing-paragraph").innerHTML += textToType.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;