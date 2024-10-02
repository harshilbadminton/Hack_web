

let hosting = document.getElementById("hosting")
let port_scanner = document.getElementById("port")
let web_scrapper = document.getElementById("web_scrap")
let harshil_theme = document.getElementById("harshil_theme")


hosting.addEventListener("click", () => {
    window.location.href = 'http://localhost:3000/hosting_server.html';
})
port_scanner.addEventListener("click", () => {
    window.location.href = 'http://localhost:3000/port_scanner.html';
})
web_scrapper.addEventListener("click", () => {
    window.location.href = 'http://localhost:3000/webscrapper.html';
})
harshil_theme.addEventListener("click", () => {
    window.location.href = 'http://localhost:3000/Harshil_theme_blog.html';
})