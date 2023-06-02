export const guardarEnStorage = (clave, elemento) => {

    //Conseguir los elementos que ya tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    //Comprobar si es un array
    if(Array.isArray(elementos)){
      //Añadir dentro del array un elemento nuevo
      elementos.push(elemento);
    }else{
      //Crear un array con el elemento nuevo
      elementos = [elemento];
    }

    //Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    //Devovlver el objeto guardado
    return elemento;
 }