const tabs = [
    {
        id: 1,
        title: 'Javascript',
        content: "JavaScript — прототипно-ориентированный сценарный язык программирования. Является реализацией языка ECMAScript. " + `<br><br>` +
            "JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.",
        tabindex: 'tabContent1'
    },
    {
        id: 2,
        title: 'Jquery',
        content: "jQuery — библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. Также библиотека jQuery предоставляет удобный API для работы с AJAX. Сейчас разработка jQuery ведётся командой jQuery во главе с Джоном Резигом.",
        tabindex: 'tabContent2'
    },
    {
        id: 3,
        title: 'DOM',
        content: "DOM — это не зависящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML-, XHTML- и XML-документов, а также изменять содержимое, структуру и оформление таких документов.",
        tabindex: 'tabContent3'
    },
    {
        id: 4,
        title: "CSS", //название табы
        content: "CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки.", // содержимое внутри табы
        tabindex: 'tabContent4'
    }
]

const tabsNav = document.getElementById('tabsNav');
const tabsContent = document.getElementById('tabsContent');

tabsNav.innerHTML = '';
tabs.forEach(tab => {
    const navs = `<li class="tab-links" id="${tab.id}" onclick="selectTab(${tab.id})">${tab.title}</li>`
    const content = `<div class="tabs-content" id="${tab.tabindex}">
                        <p>${tab.content}</p>
                     </div>`
    tabsNav.innerHTML += navs;
    tabsContent.innerHTML += content;
})

document.getElementById(`tabContent1`).classList.add('select');
document.getElementById("1").classList.add('select');

function selectTab(tabIndex) {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`${i}`).classList.remove('select');
        document.getElementById(`tabContent${i}`).classList.remove('select');
    }

    document.getElementById(tabIndex).classList.add('select');
    document.getElementById(`tabContent${tabIndex}`).classList.add('select');
}
