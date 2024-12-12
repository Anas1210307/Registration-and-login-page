$(document).ready(function () {
    $(".button").mouseenter(function () {
        $(this).addClass("highlight").fadeIn(500);
    });

    $(".button").mouseleave(function () {
        $(this).removeClass("highlight");
    });

    let typingTimer; 
    const typingDelay = 2000;

    $("input[type").each(function () {
        const typingMessage = $('<sub class="typing-message"><br>Typing...</sub>');
        $(this).after(typingMessage);
    });

    $("input").on("keypress", function () {
        const message = $(this).next(".typing-message"); 
        clearTimeout(typingTimer); 
        message.fadeIn(300);

        typingTimer = setTimeout(function () {
            message.fadeOut(300);
        }, typingDelay);
    });

    $("input").on("blur", function () {
        const message = $(this).next(".typing-message");
        clearTimeout(typingTimer);
        message.fadeOut(300);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const title = "Welcome Back 👋";
    const text = "Today is a new day. It's your day. You shape it.\nSign in to start managing your projects.";

    const titleElement = document.getElementById("typing-title");
    const textElement = document.getElementById("typing-text");

    function typeEffect(element, text, speed, callback) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text[index++];
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    typeEffect(titleElement, title, 100, () => {
        typeEffect(textElement, text, 50);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const title = "Welcome 👋";
    const text = "Today is a new day. It's your day. You shape it.\nSign up to start managing your projects.";

    const titleElement = document.getElementById("typing-title-1");
    const textElement = document.getElementById("typing-text-1");

    function typeEffect(element, text, speed, callback) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text[index++];
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    typeEffect(titleElement, title, 100, () => {
        typeEffect(textElement, text, 50);
    });
});

function validatePasswords() {
    var passOne = document.getElementById("txt2").value;
    var passTwo = document.getElementById("txt3").value;

    if (passOne !== passTwo) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
};

document.addEventListener("DOMContentLoaded", function () {
    const title = "Welcome to the Password Recovery page. 👋";
    const text = "we'll work to resolve your issue as quickly as possible.";

    const titleElement = document.getElementById("typing-title-1-c");
    const textElement = document.getElementById("typing-text-1-c");

    function typeEffect(element, text, speed, callback) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text[index++];
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    typeEffect(titleElement, title, 100, () => {
        typeEffect(textElement, text, 50);
    });
});

function Verification(event) {

    event.preventDefault();

    var Verification = document.getElementById("txt1").value;

    var url = "forgetpass.html?email=" + encodeURIComponent(Verification);

    window.location.href = url;
};

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var email = urlParams.get('email');

    if (email) {
        document.getElementById("reemail").innerText = email;
    }
};

let currentIndex = 0;
const images = document.querySelectorAll('#con-r img');
const totalImages = images.length;

setInterval(() => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
}, 3000);







