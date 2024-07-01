function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuBar = document.querySelector(".menu-bar");

    if (menu.style.right === "-200px") {
        menu.style.right = "0";
        menuBar.classList.add("change");
    } else {
        menu.style.right = "-200px";
        menuBar.classList.remove("change");
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const topicSelect = document.getElementById('select-menu1');
    const languageSelect = document.getElementById('select-menu2');
    const publicationSelect = document.getElementById('select-menu3');

    function showAllOption(selectElement) {
        const allOption = selectElement.querySelector('option[value="All"]');
        if (!allOption) {
            const option = document.createElement('option');
            option.value = "All";
            option.text = "All";
            selectElement.add(option);
        }
    }

    function filterArticles() {
        const selectedTopic = topicSelect.value;
        const selectedLanguage = languageSelect.value;
        const selectedPublication = publicationSelect.value;
        const articles = document.querySelectorAll('.grid-item');

        articles.forEach(article => {
            const articleTopics = article.getAttribute('data-topic').split(', ');
            const articleLanguage = article.getAttribute('data-language');
            const articlePublication = article.getAttribute('data-publication');

            const matchesTopic = selectedTopic === "All" || !selectedTopic || articleTopics.includes(selectedTopic);
            const matchesLanguage = selectedLanguage === "All" || !selectedLanguage || articleLanguage === selectedLanguage;
            const matchesPublication = selectedPublication === "All" || !selectedPublication || articlePublication === selectedPublication;

            if (matchesTopic && matchesLanguage && matchesPublication) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    topicSelect.addEventListener('change', (event) => {
        showAllOption(topicSelect);
        filterArticles();
    });

    languageSelect.addEventListener('change', (event) => {
        showAllOption(languageSelect);
        filterArticles();
    });

    publicationSelect.addEventListener('change', (event) => {
        showAllOption(publicationSelect);
        filterArticles();
    });
});