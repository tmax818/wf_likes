console.log('test')

function like(el){
    console.log(el)
    const likes = document.querySelector(".count-0")
    let num = parseInt(likes.innerHTML)
    likes.innerHTML = num + 1;

}