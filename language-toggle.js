const languageToggle = document.getElementById("language-toggle");

// Перевірка, чи є збережена мова у localStorage
let currentLanguage = localStorage.getItem("language") || "en";

// Функція для оновлення тексту на сторінці
function updateLanguage() {
    document.querySelectorAll("[data-language]").forEach((element) => {
        const key = element.getAttribute("data-language");
        element.textContent = translations[currentLanguage][key];
    });

    // Оновлюємо текст на кнопці перемикання мови
    languageToggle.textContent = currentLanguage === "en" ? "Перемкнути на українську" : "Switch to English";
}

// Зберігаємо вибір мови в localStorage
languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "uk" : "en";
    localStorage.setItem("language", currentLanguage); // Зберігаємо мову
    updateLanguage();
});

// Оновлюємо мову при завантаженні сторінки
updateLanguage();
