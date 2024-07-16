// get image, subheading and paragraph tags to display content below

//image
const image = document.getElementById('display')
//subheading
const subhead = document.getElementById('subhead')
//paragraph
const text = document.getElementById('text')

//buttons
const left = document.getElementById('left')
const middle = document.getElementById('middle')
const right = document.getElementById('right')


const content = [
    {
        heading: `Bookmark in one click`,
        paragraph: `Organize your bookmarks however you like.
         Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`,
        img: `./images/illustration-features-tab-1.svg`
    },

    {
        heading: `Intelligent search`,
        paragraph: `Our powerful search feature will help you find saved sites in no time at all.
 No need to trawl through all of your bookmarks.`,
        img: `./images/illustration-features-tab-2.svg`
    },

    {
        heading: `Share your bookmarks`,
        paragraph: `Easily share your bookmarks and collections with others. Create a shareable
 link that you can send at the click of a button.`,
        img: `./images/illustration-features-tab-3.svg`
    },
]

const allButtons = document.querySelector('#buttonContainer')

const buttons = allButtons.querySelectorAll('.btn')
console.log(buttons)
//add event listeners to each button

//left button
left.addEventListener('click', () => {
    image.src = content[0].img
    subhead.textContent = content[0].heading
    text.textContent = content[0].paragraph
    buttons.forEach(btn => {
        btn.classList.remove('border')
    })
    left.classList.add('border')
    
})
//right button
middle.addEventListener('click', () => {
    image.src = content[1].img
    subhead.textContent = content[1].heading
    text.textContent = content[1].paragraph
    buttons.forEach(btn => {
        btn.classList.remove('border')
    })
    middle.classList.add('border')
})
//middle button
right.addEventListener('click', () => {
    image.src = content[2].img
    subhead.textContent = content[2].heading
    text.textContent = content[2].paragraph
    buttons.forEach(btn => {
        btn.classList.remove('border')
    })
    right.classList.add('border')
})

//faq

const allfaq = document.querySelectorAll('#faq')
allfaq.forEach(faq => {
    
    const answer = faq.querySelector('#answer')
    const icon = faq.querySelector('#icon')
    faq.addEventListener('click', () => {
        console.log(icon)
        answer.classList.toggle('active')
        icon.classList.toggle('rotate')
    })
})




// const boxes = document.querySelectorAll('.question-answer')
// let imgNum = 1
// boxes.forEach(box => {
//     const answer = box.querySelector('.answer')
//     const img = box.querySelector('.plus')
//     box.addEventListener('click', function () {
        
//         answer.classList.toggle('active')

//         if (imgNum === 1) {
//             img.src = './assets/images/icon-minus.svg'
//             imgNum = 2
//         } else {
//             img.src = './assets/images/icon-plus.svg'
//             imgNum = 1

//         }
        
        
        
//     })
// });