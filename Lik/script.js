// SMOOTH SCROLL
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

//faq
let currentOpenBtn = null;

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.nextElementSibling;

    // If clicking the already-open question → close it
    if (currentOpenBtn === btn) {
      ans.style.display = 'none';
      btn.classList.remove('open');
      currentOpenBtn = null;
      return;
    }

    // Otherwise, close the previously open one (if any)
    if (currentOpenBtn) {
      const prevAns = currentOpenBtn.nextElementSibling;
      prevAns.style.display = 'none';
      currentOpenBtn.classList.remove('open');
    }

    // Open the clicked one
    ans.style.display = 'block';
    btn.classList.add('open');
    currentOpenBtn = btn;
  });
});



// LOAD MORE FAQ (dummy)
document.getElementById('loadMoreFaqs').addEventListener('click', () => {
  alert('Loading more FAQs...');
});

// FORM SUBMISSIONS
['miniDemoForm','fullDemoForm','footerDemoForm'].forEach(id => {
  document.getElementById(id).addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! We will reach out soon.');
    e.target.reset();
  });
});

// WHATSAPP BUTTON
document.getElementById('whatsappBtn').addEventListener('click', () => {
  window.open('https://wa.me/your-number', '_blank');
});

// SCROLL ANIMATIONS
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('animate');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .promo-text, .hero-text').forEach(el => {
  el.classList.add('pre-animate');
  observer.observe(el);
});
