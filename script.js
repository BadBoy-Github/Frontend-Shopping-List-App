

const form = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const filter = document.getElementById('filter');
const clear = document.getElementById('clear');

function addItem(event) {
    event.preventDefault()

    let newItem = itemInput.value
    if (newItem === "") {
        alert("Enter the item name");
        return
    }

    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem))

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button)
    itemList.appendChild(li)

    itemInput.value = ""

    checkUI()


}

function createButton(classes) {
    const btn = document.createElement('button')
    btn.classList = classes
    const icon = createIcon('fa-solid fa-circle-xmark')

    btn.appendChild(icon)
    return btn

}

function createIcon(classes) {
    const icon = document.createElement('i')
    icon.classList = classes

    return icon

}

function removeItem(event) {
    if (event.target.parentElement.classList.contains('remove-item')) {
        event.target.parentElement.parentElement.remove();

    }
    checkUI()


}

function removeAllItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)

    }
    checkUI()


}

function checkUI() {
    const items = itemList.querySelectorAll('li')

    if (items.length === 0) {
        filter.style.display = 'none'
        clear.style.display = 'none'
    } else {
        filter.style.display = 'block'
        clear.style.display = 'block'
    }
}

function filterItem(event) {
    const items = itemList.querySelectorAll('li');
    let text = event.target.value;
    items.forEach((item)=> {
        const itemName = item.firstChild.textContent.toLowerCase().trim();

        if (itemName.indexOf(text) === -1) {
            item.style.display = 'none'
        } else {
            item.style.display = 'flex'
        }
    })
}

checkUI();

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

clear.addEventListener('click', removeAllItems);

filter.addEventListener('input', filterItem);
