// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

/**
 * Returns nothing.
 *
 * Utility function that applies the theme matching whatever it stored in LocalStorage.
 */
const applyTheme = () => {
    const toggleBtn = document.getElementById('theme_toggle');
    const rootDoc   = document.documentElement;

    if (localStorage.theme === 'dark') {
        rootDoc.classList.add('dark');
        toggleBtn.textContent = 'Light Mode';
    } else {
        rootDoc.classList.remove('dark');
        toggleBtn.textContent = 'Dark Mode';
    }
}

const buildThemeToggle = () => {
    document.getElementById('theme_toggle').addEventListener('click', () => {
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light';
        } else {
            localStorage.theme = 'dark';
        }

        applyTheme()
    });


    // User may have already selected a theme that may or may not match whatever OS theme they've chosen.
    // In the case they do, let's respect that choice and display it accordingly.
    if (localStorage.theme) {
        applyTheme();
        return;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.theme = 'dark';
    }
    else {
        localStorage.theme = 'light';
    }

    applyTheme();
};

document.addEventListener('turbo:load', buildThemeToggle);