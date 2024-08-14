function toggleText() {
    const aboutText = document.getElementById('aboutText');
    const button = document.querySelector('button');

    if (button.textContent === "Show More") {
        aboutText.textContent += " In my free time, I enjoy coding and reading.";
        button.textContent = "Show Less";
    } else {
        aboutText.textContent = "Hi, I'm a passionate learner who loves exploring new things and taking on challenges.";
        button.textContent = "Show More";
    }
}
