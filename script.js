document.addEventListener("DOMContentLoaded", function() {
    var text = "Welcome to my digital sanctuary.";
    var typingEffect = document.getElementById("typing-effect");
    var index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed (milliseconds)
        } else {
            setTimeout(erase, 1000); // Delay before erasing
        }
    }

    function erase() {
        if (index > 0) {
            typingEffect.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
        } else {
            index = 0;
            setTimeout(type, 1000); // Delay before retyping
        }
    }

    type();
});
