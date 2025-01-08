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
    const articlesContainer = document.getElementById('articles-container');

    function showAllOption(selectElement) {
        const allOption = selectElement.querySelector('option[value="All"]');
        if (!allOption) {
            const option = document.createElement('option');
            option.value = "All";
            option.text = "All";
            selectElement.add(option);
        }
    }

    // Function to render the articles dynamically
    function renderArticles() {
        //articlesContainer.innerHTML = ''; // Clear the existing articles
        articles.forEach(article => {
            const articleElement = document.createElement('a');
            articleElement.classList.add('grid-item');
            articleElement.setAttribute('data-topic', article.topic);
            articleElement.setAttribute('data-language', article.language);
            articleElement.setAttribute('data-publication', article.publication);
            articleElement.setAttribute('href', article.href);
            articleElement.setAttribute('target', article.target);

            articleElement.innerHTML = `
                <img class="image" src="${article.imgSrc}" alt="${article.imgAlt}">
                <div class="content">
                    <p class="details">${article.details.publicationName} &#46 <span>${article.details.day}</span>${article.details.suffix} ${article.details.month} <span>${article.details.year}</span></p>
                    <p class="title">${article.title}</p>
                    <p class="description">${article.description}</p>
                </div>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }

    // Initially render the articles
    renderArticles();

    // Filter function for selecting articles
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