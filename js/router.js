const $router = document.querySelector('#router')
const $root = document.querySelector('#root')

const getPage = (url)=>{
    fetch(url)
    .then(res=>{return res.text()})
    .then(page=>{
        $root.innerHTML=page
})
}


window.addEventListener('load',()=>{
    if (window.location.pathname==='/index.html'){
        window.location.pathname='/'
    }
    if(window.location.hash){
        getPage(`docs${window.location.hash.replace('#','')}.html`)
    }
}) 

$router.addEventListener('click',(e)=>{
    e.preventDefault()
    if (e.target.getAttribute('href')&&e.target.getAttribute('route')){
        console.log(e.target)
        window.location.hash = e.target.getAttribute('route')
        getPage(e.target.getAttribute('href'))
    }
    
})