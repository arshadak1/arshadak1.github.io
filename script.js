
// themes variables
const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

// icons
const lightIcon = document.getElementById('theme-btn-light')
const darkIcon = document.getElementById('theme-btn-dark')

// icon toggling
const iconToggle = () => {
    lightIcon.classList.toggle('display-none')
    darkIcon.classList.toggle('display-none')
}

// svg arrow color change

const arrowColor = (color) => {
    document.querySelectorAll('.arrow-g').forEach((arrow) => {
        arrow.setAttribute('stroke', color)
    })
}
// initial theme check 
const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark')
        arrowColor('#FFFFFF')
        darkIcon.classList.add('display-none')
        return
    }
    arrowColor('#475569')
    lightIcon.classList.add('display-none')
}

// Manual theme switch

const themeSwitch = () => {
    if(document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        arrowColor('#475569')
        iconToggle()
        return
    }
    document.documentElement.classList.add('dark')
    arrowColor('#FFFFFF')
    localStorage.setItem('theme', 'dark')
    iconToggle()
}

// call theme switch on button click

lightIcon.addEventListener('click', () => {
    themeSwitch()
})

darkIcon.addEventListener('click', () => {
    themeSwitch()
})

// invoke theme on load
themeCheck()


// PROJECT details release 
const project_detail_open = document.querySelectorAll('.project-detail-open')
const project_detail_close = document.querySelectorAll('.project-detail-close')
const overlay = document.querySelector('.overlay')


const getProject = (e) => {
    let project_id = e.target.dataset.projectId
    console.log(e.target)
    const project = document.querySelector(`[data-project="${project_id}"]`)
    return project
}

const openProjectDetails = (e) => {
    overlay.classList.add('active')
    project = getProject(e)
    setTimeout(() => {project.classList.add('active')}, 1000)
    
}

const closeProjectDetails = (e) => {
    project = getProject(e)
    project.classList.remove('active')
    setTimeout(() => {overlay.classList.remove('active')}, 2000)
}

project_detail_open.forEach((project) => {
    project.addEventListener('click', openProjectDetails)
})

project_detail_close.forEach((btn) => {
    btn.addEventListener('click', closeProjectDetails)
})

// on scroll animations
const reveal_scroll = document.querySelectorAll('.reveal-scroll')

let options = {
    rootMargin: '5%',
    threshold: 0.0
}


const showItem = (entries) => {
    // console.log(entries)
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
    })
}

let observer = new IntersectionObserver(showItem, options)


reveal_scroll.forEach((item) => {
    observer.observe(item)
})