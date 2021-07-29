document.addEventListener('DOMContentLoaded',() => {

}) 


const imageCard = document.getElementsByClassName('image-card')
const fgTitle = document.getElementById ('fg-title')
const fgImage = document.getElementById ('fg-image')
const fgComments = document.getElementById('fg-comments')
const fgLikes = document.getElementById('fg-likes')
const fgLikeButton = document.getElementById('fg-like-button')


fetch ('http://localhost:3000/images')
.then(res => res.json())
.then(insertImage)

fetch ('http://localhost:3000/comments')
.then(res => res.json())
.then(insertInfo)

function insertImage(pic){
    console.log(pic)

    fgImage.src = pic[0].image
    fgTitle.innerHTML = pic[0].title

     // fgImage.src = "./assets/coder-dog.png"
    //fgImage.src = pic.image
    // fgTitle.innerHTML = "Woofing those bugs away"
       // fgTitle.innerHTML = pic.title
       


    //Struggling to set it to the parameter




    fgLikeButton.addEventListener("click", () => {
        pic[0].likes++
        fgLikes.innerHTML = `${pic[0].likes} likes`
    
    })

    // fgLikeButton.addEventListener("click", (counter) => {
        // parseInt(fgLikes) + 1;
        // fgLikes.value = +1
        // fgLikes.value = counter++
    // })


 }





function insertInfo(info) {
    console.log(info)
    // fgComments.InnerHTML = `
    //     "What a cute dog!"
    //     "He's got a nose for bugs!"
    //     "Woof!"
    // `;

    fgComments.InnerHTML = info.content



 
}