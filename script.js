function kelDoc() {
    window.location.href = 'https://www.keldoc.com/';
}

function goToSection(){
    const section = document.getElementById('nosServicesSection');
    // section.scrollIntoView({ behavior: 'smooth' });
    smoothScroll('nosServicesSection');
}

function smoothScroll(targetId, duration = 1000) {
    const target = document.getElementById(targetId);
    const targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

