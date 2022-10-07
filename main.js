const nombres = document.querySelector('.center')

function fetchAnimales(){
    fetch('animales.json')
    .then(response => response.json())
    .then(animales => {
        animales.forEach(gato => {
            nombres.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${gato.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${gato.nombre}</h5>
                    <p class="card-text">${gato.pelaje}</p>
                    <a href="#" class="btn btn-primary">Más info...</a>
                </div>
            </div>
            `;          
        });
    })
}

fetchAnimales();

