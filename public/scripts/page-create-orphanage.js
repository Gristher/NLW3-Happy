//create map
const map = L.map('mapid').setView([-23.5268229,-46.7808924], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value= lat;
    document.querySelector('[name=lng]').value= lng;

    //remove icon from map
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
})


//Add photos field
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images');

    //pegar os containers para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verificar se o campo está vazio, caso esteja não será adicionado ao container
    const input = newFieldContainer.children[0];

    if(input.value == ""){
        return
    }

    //limpar campo antes de adicionar ao container da
    input.value = "";

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);

}

//remover container de fotos
function deleteField(event) {  
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = "";
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//Select YES or NO
function toggleSelect(event){

    //retirar a class .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    //adicionar a class .active no botão clicadi
    const button = event.currentTarget;
    button.classList.add('active');

    //atualizar o input hidden com o valor selecionados
    const input = document.querySelector('[name="open_on_weekends"]');
    
    input.value = button.dataset.value;
}