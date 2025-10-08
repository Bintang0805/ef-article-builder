// Smooth scroll
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top
    const scrollTop = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTop.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            scrollTop.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Active sidebar link
    const sections = document.querySelectorAll('section[id]');
    const sidebarLinks = document.querySelectorAll('aside a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('bg-purple-50', 'text-purple-600', 'font-semibold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('bg-purple-50', 'text-purple-600', 'font-semibold');
            }
        });
    });

    // FAQ toggle
    document.querySelectorAll('.faq-open').forEach(item => {
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('i');
        item.addEventListener('click', () => {
            content.classList.toggle('hidden');
            icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' :
                'rotate(180deg)';
        });
    });

    // Copy code functionality
    function copyCode(button) {
        const codeBlock = button.closest('.bg-gray-900').querySelector('code');
        const text = codeBlock.textContent;

        navigator.clipboard.writeText(text).then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check mr-1"></i>Copied!';
            button.classList.add('text-green-400');

            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('text-green-400');
            }, 2000);
        });
    }
})