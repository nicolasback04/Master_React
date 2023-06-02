import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usurios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");


    //Generico / Básico
    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
            }
        ]);
    }

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
        .then(respuesta => respuesta.json())
        .then(
            resultado_final => {
                setUsuarios(resultado_final.data);
                console.log(usurios)
            },
            error => {
                console.log(error);
                setErrores(error.message);
            })
    }

    const getUsuariosAjaxAW =  () => {

        setTimeout( async() =>{
            try{
                const peticion = await fetch("https://reqres.in/api/users345?page=1");
                const {data} = await peticion.json();
        
                setUsuarios(data);
                setCargando(false);
            } catch(error){
                console.log(error);
            }
            
        }, 2000);
    }

    useEffect(() => {
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();

        getUsuariosAjaxAW();
    }, []);

    if(errores !== ""){
        //Cuando pasa algún error
        return(
            <div className='cargando'>
                {errores}
            </div>
        );
    } else if (cargando == true) {
        //Cuando todo está cargando
        return(
            <div className='cargando'>
                Cargando datos...
            </div>
        );
    } else if(cargando == false && errores === ""){
        //Cuando todo ha ido OK
        return (
            <div>
                <h2>Listado de usurios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usurios.map(usuario => {
                            return (<li key={usuario.id}>
                                <img src={usuario.avatar} width="30"></img>
                                &nbsp;
                                {usuario.first_name} {usuario.last_name}
                            </li>);
                        })
                    }
                </ol>
            </div>
        )
    }
}
