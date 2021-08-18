const tabs = [
    {
        id: 1,
        title: 'Javascript',
        content: "JavaScript — прототипно-ориентированный сценарный язык программирования. Является реализацией языка ECMAScript. " + `<br><br>` +
            "JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.",
        tabIndex: 'tabContent1'
    },
    {
        id: 2,
        title: 'Jquery',
        content: "jQuery — библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. Также библиотека jQuery предоставляет удобный API для работы с AJAX. Сейчас разработка jQuery ведётся командой jQuery во главе с Джоном Резигом.",
        tabIndex: 'tabContent2'
    },
    {
        id: 3,
        title: 'DOM',
        content: "DOM — это не зависящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML-, XHTML- и XML-документов, а также изменять содержимое, структуру и оформление таких документов.",
        tabIndex: 'tabContent3'
    },
    {
        id: 4,
        title: "CSS",
        content: "CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки.",
        tabIndex: 'tabContent4'
    }
];

const tabsNav = document.getElementById('tabsNav');
const tabsContent = document.getElementById('tabsContent');

tabsNav.innerHTML = '';
tabs.forEach(tab => {
    const navs = `<li class="tab-links" id="${tab.id}" onclick="selectTab(${tab.id})">${tab.title}</li>`
    const content = `<div class="tabs-content" id="${tab.tabIndex}">
                        <p>${tab.content}</p>
                     </div>`
    tabsNav.innerHTML += navs;
    tabsContent.innerHTML += content;
})

window.onload = function () {
    selectTab(1);
};

function selectTab(index) {
    for (let i = 1; i <= 4; i++) {
        if (document.getElementById(`${i}`).classList.contains('selected')) {
            document.getElementById(`${i}`).classList.remove('selected');
        }
        if (document.getElementById(`tabContent${i}`).classList.contains('selected')) {
            document.getElementById(`tabContent${i}`).classList.remove('selected');
        }
    }
    document.getElementById(index).classList.add('selected');
    document.getElementById(`tabContent${index}`).classList.add('selected');
}
