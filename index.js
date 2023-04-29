'use strict'

const btn = document.querySelectorAll('#btnModal')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const container = document.querySelectorAll('.container')
const btnClose = document.querySelector('.modalClose')
const body = document.querySelector('body')
const cartBtn = document.querySelector('#cartBtn')
const endBtn = document.querySelector('#endBtn')
const footer = document.querySelector('#unic-footer')


btn.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
    
        overlay.style.display = 'block'
        modal.style.display = 'block'

        body.style.overflow = 'hidden'
    })
})

btnClose.addEventListener('click', (e) => {
    e.preventDefault()

    overlay.style.display = 'none'
    modal.style.display = 'none'

    body.style.overflow = 'auto'
})

overlay.addEventListener('click', e => {
    const target = e.target
    
    if (target.className === 'overlay') {
        overlay.style.display = 'none'
        modal.style.display = 'none'

        body.style.overflow = 'auto'
    }
})

cartBtn.addEventListener('click', e => {
    const div = document.createElement('div')

    div.classList.add('newStyleCart')
    div.innerHTML = 'Выберите что заказать'

    body.insertAdjacentElement('afterbegin', div)

    setTimeout(() => {
        div.style.display = 'none'
    }, 2000)
})

endBtn.addEventListener('click', e => {
    
    setTimeout(() => {
        const div = document.createElement('div')

        div.classList.add('newStyleCartt')
        div.innerHTML = 'Вот наши контакты'

        footer.appendChild(div)

        setTimeout(() => {
            div.style.display = 'none'
        }, 4000)
    }, 1000)
})


