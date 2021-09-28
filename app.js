const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    this.classList.add('hold')
    setTimeout(() => this.classList.add('hide'), 0)
}

function dragend(event) {
    this.className = 'item'
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    this.classList.add('hovered')
 
}

function dragleave(event) {
    this.classList.remove('hovered')
  
}

function dragdrop(event) {
    this.classList.remove('hovered')
    this.append(item)
}