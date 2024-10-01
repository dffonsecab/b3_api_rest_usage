import { useEffect, useState } from "react"



const CatGalleryFetch = () => {

    //Estado para alamacenar los gatos, definicion de array vacio
    const[cats,setCats]=useState([]);

    // Estado para manejar errores
    const[error, SetError]=useState(null);

    /* Metodo para realizar la peticion API con fecth */


const fetchData=async()=>{

            try{

                const response=await fetch('https://api.thecatapi.com/v1/images/search?limit=10');

                /* Convertir la repsuestas en formato json */
                const data=await response.json();
                /* Setear la varaible de estado */
                setCats(data);

            }catch(err){

                SetError(err)
                console.log("Error al realizar la solicitud"+err)

            }

        
        }

  /* Ejecuta el metodo fetchData la primera que se montael componente, ( Realiza la peticion de la API)*/       
useEffect(()=>{
    fetchData();
},[]);

// Si hay Error mostramos el error

if(error){

    return(<div className="alert alert danger text-center" role="alert">

        {error}
        
    </div>)
}

    return (

   
        <div className='container mt-5'> 
        <h2 className='text-center text-white mb-4'>Galeria de Ragnars</h2>
        {/* Agregamos un contenedor scroll y altura fija */}
        <div className='row overflow-auto vh-80' style={{maxHeight:'80vh',overflowY:'scroll'}}>
          
                {cats.map((cats,index)=>(

                    <div className='col-md-4 mb-4' key={index} >
                        <div className='card h-100 d-flex flex-column'>
                            <img src={cats.url} className='card-img-top img-fluid object-fit-cover' alt="Cat" />
                            <div className='card-body'>
                                <h5 className="card-title">Gatito {index + 1}</h5>
                                <p className="card-text">Un lindo Gatito</p>
                        </div>
                        </div>

                    </div>

                
             ))}
   
    

        </div>
        </div>
      
    )




}

export default CatGalleryFetch
