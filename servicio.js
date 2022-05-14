//pasos para consumir un api 

//1.Pa onde voy? (conocer URI del servicio o api a consumir)

const URI='https://api.spotify.com/v1/artists/3PWp9R5HvbQgxI5KBx5kVd/top-tracks?market=US'

//2. armo la peticion (Que vas hacer ome?)
    const TOKEN="Bearer BQDTB3IGvqmgXFY_HbsOJpRgSH1ueTle-TYuIoUvALLoX5KsA2gn9OBpOooRntFNdZ8ooxLDanaogQDi93CgZfvojVzdbACfcOJ5cKEt7oWIxitZsauiz9SsBWDOFNFZryIyTFMgegWAOko6z5mcWZfcMxluhya8Bgg"

const PETICION={
    method:"GET",
    headers: {Authorization:TOKEN}
}

//3. arrancar ps ome pal servidor (consumir el api)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json()) //garantizo formato JSON
})
.then(function(respuesta){
     pintarcanciones(respuesta) //hago lo que quiero con la respuesta
})
.catch(function(respuesta){
    console.log(respuesta) //muestro el fallo  si no se puede
}) 

//funcipon para pntar le info qu elega del api 

function pintarcanciones(canciones){
    console.log(canciones) //objeto
    console.log(canciones.tracks) // arreglo

    let fila=document.getElementById("fila")

    //recorro el arrgelo de canciones
    canciones.tracks.forEach(function(cancion){
        console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear una columna para cada cancion

        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo la tarjeta

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")

        //creo la foto 

        let foto=document.createElement("img")
        foto.src=cancion.album.images[0].url
        foto.classList.add("card-img-top")

        //PONER NOMBRE
      
        let nombre=document.createElement("h1")
        nombre.classList.add("card-title")
        nombre.textcontent= cancion.name

        //creo el audio
        let audio=document.createElement("audio")
        audio.src=cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")

        //padre e hijos 

        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        tarjeta.appendChild(nombre)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}