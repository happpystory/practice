let togglerBtn = document.getElementById('sidebar-toggler');
let sidebar = document.getElementById('main')
let menuItem = document.querySelectorAll('.list-group-item')

togglerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('toggled')
})



const handleActiveMenuItem = (index) => {
    for(let i = 0; i < menuItem.length; i++) { 
        menuItem[i].classList.remove('active')
        menuItem[i].classList.add('text-muted')
    }
    menuItem[index].classList.add('active')
    menuItem[index].classList.remove('text-muted')
}

for(let i = 0; i < menuItem.length; i++ ) { 
    menuItem[i].addEventListener('click', () => handleActiveMenuItem(i))
}