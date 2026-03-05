(function () {
    var TRANSLATIONS = {
        en: {
            'gate-subtitle':    'May 16, 2026 &nbsp;·&nbsp; Temecula',
            'gate-notice-title':'A note before you enter',
            'gate-notice-1':    'There will be audio playing right after you enter your code.',
            'gate-notice-2':    'Turn your volume up, or put your earbuds in.',
            'gate-placeholder': 'enter your code',
            'gate-btn':         'Enter',
            'gate-error':       "That code doesn't seem right. Try again.",
            'couple-label':     'Meet Us',
            'story-next':       'Next',
            'letter-back':      'Back',
            'letter-next':      'Will you join us?',
            'menu-coming-soon': 'Coming Soon',
            'menu-date':        'May 16th',
            'menu-rsvp':        'RSVP',
            'menu-temecula':    'Temecula',
            'menu-restart':     'Restart',
            'rsvp-back':        'Back',
            'rsvp-directories': 'Directories',
            'tem-directories':  'Directories',
            'couple-back':      'Back',
            'couple-next':      'Next',
        },
        kr: {
            'gate-subtitle':    '2026년 5월 16일 &nbsp;·&nbsp; 테메큘라',
            'gate-notice-title':'입장 전 안내',
            'gate-notice-1':    '코드를 입력하시면 바로 음악이 재생됩니다.',
            'gate-notice-2':    '볼륨을 높이거나 이어폰을 꽂아주세요.',
            'gate-placeholder': '코드를 입력하세요',
            'gate-btn':         '입장',
            'gate-error':       '코드가 맞지 않습니다. 다시 시도해주세요.',
            'couple-label':     '만나보기',
            'story-next':       '다음',
            'letter-back':      '뒤로',
            'letter-next':      '함께해 주실 건가요?',
            'menu-coming-soon': '곧 공개됩니다',
            'menu-date':        '5월 16일',
            'menu-rsvp':        'RSVP',
            'menu-temecula':    '테메큘라',
            'menu-restart':     '처음으로',
            'rsvp-back':        '뒤로',
            'rsvp-directories': '메뉴',
            'tem-directories':  '메뉴',
            'couple-back':      '뒤로',
            'couple-next':      '다음',
        }
    };

    function applyLang(lang) {
        var t = TRANSLATIONS[lang] || TRANSLATIONS['en'];

        // Text content
        document.querySelectorAll('[data-lang-key]').forEach(function (el) {
            var key = el.dataset.langKey;
            if (t[key] !== undefined) el.textContent = t[key];
        });

        // HTML content (handles &nbsp; etc.)
        document.querySelectorAll('[data-lang-html]').forEach(function (el) {
            var key = el.dataset.langHtml;
            if (t[key] !== undefined) el.innerHTML = t[key];
        });

        // Placeholder
        document.querySelectorAll('[data-lang-placeholder]').forEach(function (el) {
            var key = el.dataset.langPlaceholder;
            if (t[key] !== undefined) el.placeholder = t[key];
        });

        // Toggle button active state
        var btnEN = document.getElementById('btnEN');
        var btnKR = document.getElementById('btnKR');
        if (btnEN) btnEN.classList.toggle('active', lang === 'en');
        if (btnKR) btnKR.classList.toggle('active', lang === 'kr');
    }

    window.setLang = function (lang) {
        localStorage.setItem('wedding-lang', lang);
        applyLang(lang);
    };

    document.addEventListener('DOMContentLoaded', function () {
        var saved = localStorage.getItem('wedding-lang') || 'en';
        applyLang(saved);
    });
})();
