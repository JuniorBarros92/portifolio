const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-card').forEach((el) => {
        el.classList.add('scroll-reveal', 'reveal-scale');
        revealObserver.observe(el);
    });

    document.querySelectorAll('.project-card').forEach((el) => {
        el.classList.add('scroll-reveal', 'reveal-up');
        revealObserver.observe(el);
    });

    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    
    if (aboutImage) {
        aboutImage.classList.add('scroll-reveal', 'reveal-left');
        revealObserver.observe(aboutImage);
    }
    
    if (aboutText) {
        aboutText.classList.add('scroll-reveal', 'reveal-right');
        revealObserver.observe(aboutText);
    }

    document.querySelectorAll('.stat-item').forEach((el) => {
        el.classList.add('scroll-reveal', 'reveal-up');
        revealObserver.observe(el);
    });

    document.querySelectorAll('.contact-info, .contact-form').forEach((el, index) => {
        el.classList.add('scroll-reveal', index === 0 ? 'reveal-left' : 'reveal-right');
        revealObserver.observe(el);
    });
});

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

function enviarWhats(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5561981974009";

    const texto = `Olá! Me Chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, "_blank");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const typewriterText = document.querySelector('.typewriter');
if (typewriterText) {
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                i = 0;
                typewriterText.textContent = '';
                typeWriter();
            }, 2000);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

const scrollDownBtn = document.querySelector('.scroll-down');
if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
