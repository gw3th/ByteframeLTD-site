/* ==========================================
   LOADING SCREEN JAVASCRIPT
   ========================================== */

// Prevent scrolling while loading
document.body.classList.add('loading');

// Simulated progress bar animation
let progress = 0;
let progressInterval;

function updateProgress() {
    const progressBar = document.querySelector('.loader-progress');
    if (!progressBar) return;
    
    progressInterval = setInterval(() => {
        if (progress >= 90) {
            clearInterval(progressInterval);
        } else {
            // Increment progress with random jumps for natural feel
            progress += Math.random() * 15;
            progressBar.style.width = Math.min(progress, 90) + '%';
        }
    }, 200);
}

// Start progress animation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateProgress);
} else {
    updateProgress();
}

// Hide loader when everything is loaded
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    const progressBar = document.querySelector('.loader-progress');
    
    if (loader && progressBar) {
        // Clear any existing interval
        if (progressInterval) {
            clearInterval(progressInterval);
        }
        
        // Complete the progress bar
        progressBar.style.width = '100%';
        
        // Wait a moment then hide the loader
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
            
            // Remove loader from DOM after fade out
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 300);
    }
});

// Fallback: Hide loader after 5 seconds if page hasn't fully loaded
setTimeout(() => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader && !loader.classList.contains('hidden')) {
        console.warn('Loader timeout - forcing hide');
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        setTimeout(() => loader.remove(), 500);
    }
}, 5000);



// ==========================================
// INITIALIZATION - Mark that JavaScript is enabled
// ==========================================
document.documentElement.classList.add('js-enabled');
document.body.classList.add('js-enabled');

// ==========================================
// NAVIGATION FUNCTIONALITY
// ==========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for shadow
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll (optional - commented out for now)
    // if (currentScroll > lastScroll && currentScroll > 100) {
    //     navbar.style.transform = 'translateY(-100%)';
    // } else {
    //     navbar.style.transform = 'translateY(0)';
    // }
    
    lastScroll = currentScroll;
});


// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ==========================================
// SMOOTH SCROLLING
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// SCROLL ANIMATIONS - DISABLED FOR NOW
// ==========================================
// All content is visible by default
// Scroll animations can be re-enabled later if needed
/*
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
animatedElements.forEach(el => {
    if (isInViewport(el)) {
        el.classList.add('visible');
    } else {
        observer.observe(el);
    }
});
*/

// ==========================================
// ADD ANIMATION CLASSES TO ELEMENTS (DISABLED - Content visible by default)
// ==========================================
// Animations disabled to ensure all content is visible
// You can re-enable by uncommenting and fixing the logic if needed
/*
function initScrollAnimations() {
    // About section features
    const aboutFeatures = document.querySelectorAll('.feature-card');
    aboutFeatures.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Work items - alternate slide directions
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach((item, index) => {
        const image = item.querySelector('.work-image');
        const content = item.querySelector('.work-content');
        
        if (index % 2 === 0) {
            image.classList.add('slide-in-left');
            content.classList.add('slide-in-right');
        } else {
            image.classList.add('slide-in-right');
            content.classList.add('slide-in-left');
        }
    });
    
    // Process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.classList.add('fade-in');
        step.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('fade-in');
    });
}
*/

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations disabled for now - all content visible by default
    console.log('🚀 Byteframe website loaded successfully!');
});

// ==========================================
// PARALLAX EFFECT FOR HERO
// ==========================================
const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');
const heroStats = document.querySelector('.hero .hero-stats'); // Only stats inside hero section

window.addEventListener('scroll', () => {
    if (!heroSection) return;
    
    const scrolled = window.pageYOffset;
    const heroRect = heroSection.getBoundingClientRect();
    const heroBottom = heroRect.bottom;
    const windowHeight = window.innerHeight;
    
    // Check if the BOTTOM of the hero section is in view
    // This means we've scrolled enough to see the bottom edge
    const isHeroBottomInView = heroBottom <= windowHeight;
    
    // Only apply parallax when bottom of hero is visible (we've scrolled down enough)
    if (isHeroBottomInView) {
        const parallaxSpeed = 0.5;
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            heroContent.style.opacity = 1 - (scrolled / 600);
        }
        
        // Only apply parallax to stats if they're in the hero section
        if (heroStats) {
            heroStats.style.transform = `translateY(${scrolled * parallaxSpeed * 0.7}px)`;
        }
    } else {
        // Reset transforms when bottom isn't in view yet
        if (heroContent) {
            heroContent.style.transform = 'translateY(0)';
            heroContent.style.opacity = '1';
        }
        
        if (heroStats) {
            heroStats.style.transform = 'translateY(0)';
        }
    }
});

// ==========================================
// FORM HANDLING
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', data);
        
        // Show success message (you can customize this)
        alert('Thank you for your message! We\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In production, you would integrate with a backend service or email API
        // Example with a service like Formspree, EmailJS, or your own backend:
        /*
        fetch('YOUR_BACKEND_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
        })
        .catch(error => {
            alert('Sorry, there was an error sending your message. Please try again.');
            console.error('Error:', error);
        });
        */
    });
}

// ==========================================
// COUNTER ANIMATION FOR STATS
// ==========================================
function animateCounter(element, targetText, duration = 2000) {
    // Check if it's a fraction format like "24/7"
    if (targetText.includes('/')) {
        const parts = targetText.split('/');
        const firstNum = parseInt(parts[0]);
        const secondNum = parseInt(parts[1]);
        
        // Animate both numbers
        const increment1 = firstNum / (duration / 16);
        const increment2 = secondNum / (duration / 16);
        let current1 = 0;
        let current2 = 0;
        
        const timer = setInterval(() => {
            current1 += increment1;
            current2 += increment2;
            
            if (current1 >= firstNum && current2 >= secondNum) {
                element.textContent = targetText;
                clearInterval(timer);
            } else {
                const display1 = Math.floor(current1);
                const display2 = Math.floor(current2);
                element.textContent = display1 + '/' + display2;
            }
        }, 16);
    } else {
        // Standard number with possible suffix
        const numericValue = parseInt(targetText);
        const suffix = targetText.replace(/[0-9]/g, '');
        
        const increment = numericValue / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                element.textContent = targetText;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const statNumber = entry.target.querySelector('.stat-number');
            const targetText = statNumber.textContent.trim();
            
            animateCounter(statNumber, targetText);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

const statItems = document.querySelectorAll('.stat-item');
statItems.forEach(item => statsObserver.observe(item));

// ==========================================
// ACTIVE SECTION HIGHLIGHTING IN NAVIGATION
// ==========================================
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ==========================================
// CURSOR TRAIL EFFECT (Optional Enhancement)
// ==========================================
// Uncomment this section if you want a subtle cursor trail effect
/*
const cursor = document.createElement('div');
cursor.className = 'cursor-trail';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add this CSS for cursor trail:
// .cursor-trail {
//     position: fixed;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background: var(--color-primary);
//     opacity: 0.3;
//     pointer-events: none;
//     transition: transform 0.2s ease;
//     z-index: 9999;
//     mix-blend-mode: difference;
// }
*/

// ==========================================
// LOADING ANIMATION
// ==========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger hero animations after a short delay
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounced scroll handlers for better performance
window.addEventListener('scroll', debounce(highlightNav, 10));

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Focus management for mobile menu
navToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        // Focus first link when menu opens
        setTimeout(() => {
            const firstLink = navMenu.querySelector('.nav-link');
            if (firstLink) firstLink.focus();
        }, 100);
    }
});

// ==========================================
// LAZY LOADING IMAGES (if you add real images)
// ==========================================
// Uncomment when you have actual images
/*
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
*/

console.log('🚀 Byteframe website initialized successfully!');