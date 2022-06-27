const searchInput = document.querySelector('#search');
const divs = document.querySelectorAll('.actors');

searchInput.addEventListener('keyup', (event) => {
    const word = event.target.value.toLowerCase();

    divs.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })

})

function soundClick() {
    let audio = new Audio(); // Create a new Audio element
    audio.src = 'image/01.mp3'; // Specify the path to the "click" sound
    audio.autoplay = true; // Automatically start
  }
    