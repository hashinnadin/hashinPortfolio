// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Animate skill bars on scroll
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-fill');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    };
    
    // Initialize skill bars when skills section is in view
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Typing effect for hero subtitle
    const typingText = document.querySelector('.typing-text');
    const titles = ['React Developer', 'Frontend Developer'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function typeWriter() {
        if (isPaused) return;
        
        const currentTitle = titles[titleIndex];
        
        if (!isDeleting && charIndex <= currentTitle.length) {
            typingText.textContent = currentTitle.substring(0, charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        } else if (isDeleting && charIndex >= 0) {
            typingText.textContent = currentTitle.substring(0, charIndex);
            charIndex--;
            setTimeout(typeWriter, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                titleIndex = (titleIndex + 1) % titles.length;
            }
            setTimeout(typeWriter, 1500);
        }
    }
    
    // Start typing effect after page loads
    setTimeout(() => {
        typeWriter();
    }, 1000);
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionText = section.textContent.toLowerCase();
                if (sectionText.includes(searchTerm)) {
                    section.style.opacity = '1';
                    section.style.transform = 'scale(1)';
                } else if (searchTerm.length > 0) {
                    section.style.opacity = '0.3';
                    section.style.transform = 'scale(0.98)';
                } else {
                    section.style.opacity = '1';
                    section.style.transform = 'scale(1)';
                }
            });
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container') && window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    }
    
    // Project card animations
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Initialize animations
    animateSkillBars();
});