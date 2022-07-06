//leyendo el xml con el api XMLHttpRequest
let xhr = new XMLHttpRequest ();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        listarHorarios(this);

    }

};

xhr.open("GET", "../../horarios.xml", true);
xhr.send();


//funcion listarHorarios
function listarHorarios (objXML){
    //leer respuesta de peticion
    let respXML = objXML.responseXML;

    //console.log(respXML);

    let lista = respXML.getElementsByTagName('dia');


    //acordion

    let tabla = document.querySelector('#tabla tbody');

    //console.log (lista);
    if (lista.length < 1){
        let fila = document.createElement('tr');
        let celda = document.createElement('td');

        celda.setAttribute('colspan','3');
        celda.textContent = 'No information available';

        fila.appendChild(celda);

        tabla.appendChild(fila);
    }

    //ciclo for

    for (let i=0; i<lista.length; i++){

        let fila = document.createElement('tr');
        let nombreDia = document.createElement('td');
        let horarioDia = document.createElement('td');
        let feeDia = document.createElement('td');

        
        console.log(lista[i].getElementsByTagName('nombre')[0].textContent);

        nombreDia.textContent = lista[i].getElementsByTagName('nombre')[0].textContent;

        horarioDia.textContent = lista[i].getElementsByTagName('hours')[0].textContent;

        feeDia.textContent = lista[i].getElementsByTagName('fee')[0].textContent;


        fila.appendChild(nombreDia);
        fila.appendChild(horarioDia);
        fila.appendChild(feeDia);
        
        tabla.appendChild(fila);

        
    }
}

//slider de artistas
(function(){
    const sliders = [...document.querySelectorAll('.slider__body')];
    const arrowAfter = document.querySelector('#arrowAfter');
    const arrowBefore = document.querySelector('#arrowBefore');
    let value;

    arrowAfter.addEventListener('click', ()=>changePosition(1));

    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.lenght)
        if(value === 0 || value == sliders.lenght+1){
            value = value === 0 ? sliders.lenght : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');

    }
})()
