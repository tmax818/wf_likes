console.log('test')

const likes_arr = [9, 12, 9]

function like(el){
    let num = parseInt(el.value)
    likes_arr[num] += 1
    const likes = document.querySelector(`.count-${num}`)
    likes.innerHTML = likes_arr[num];


}