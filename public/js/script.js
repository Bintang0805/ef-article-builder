
// Smooth scroll
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

// Scroll to top button
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

// Mobile menu toggle (basic)
const mobileMenuBtn = document.querySelector('.md\\:hidden button');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
        alert('Mobile menu akan segera hadir!');
    });
}

// Initialize EF Article Editor Demo
let demoEditor;
window.addEventListener('DOMContentLoaded', function () {
    // Check if EfArticleBuilder is loaded
    if (typeof EfArticleBuilder !== 'undefined') {
        demoEditor = new EfArticleBuilder('#demo-editor', {
            editorTheme: 'glassmorphism',
            contentTheme: 'simple-modern',
            displayMode: 'inline',
            maxHeight: '600px',
            locale: 'id',
            onChange: function (html) {
                console.log('Content changed:', html);
            },
            onReady: function (editor) {
                console.log('Demo editor ready!');
                // Load sample content
                const sampleContent = [{
                    tag: 'h2',
                    text: 'Selamat Datang di EF Article Editor!',
                    class: '',
                    layout: 'column'
                },
                {
                    tag: 'p',
                    text: 'Coba drag komponen dari sidebar ke canvas untuk membuat artikel Anda. Klik pada komponen untuk mengedit kontennya.',
                    class: '',
                    layout: 'column'
                }
                ];
                editor.import(sampleContent);
            }
        });
    } else {
        // Show error message if library not loaded
        document.getElementById('demo-editor').innerHTML = `
                    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
                        <i class="fas fa-exclamation-triangle text-yellow-600 text-4xl mb-4"></i>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Library Belum Dimuat</h3>
                        <p class="text-gray-600 mb-4">Silakan pastikan file <code class="bg-yellow-100 px-2 py-1 rounded">ef-article-editor.js</code> sudah dimuat dengan benar.</p>
                        <a href="#get-started" class="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            Download Library
                        </a>
                    </div>
                `;
    }
});