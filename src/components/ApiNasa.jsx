import React from 'react'

const ApiNasa = () => {

    const[apiNasa,setApiNasa]=useState([]);

    // Estado para manejar errores
    const[error, SetError]=useState(null);

    const fetchData=async()=>{

        try{

            const response=await fetch('https://api.thecatapi.com/v1/images/search?limit=10');

            /* Convertir la repsuestas en formato json */
            const data=await response.json();
            /* Setear la varaible de estado */
            setApiNasa(data);

        }catch(err){

            SetError(err)
            console.log("Error al realizar la solicitud"+err)

        }

    
    }



  return (
    <div>
      
    </div>
  )
}

export default ApiNasa
