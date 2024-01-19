import {useState,useEffect} from 'react'
import Error from './Error';

function Formulario({pacientes, setPacientes, paciente ,setPaciente}) {

const [nombre, setNombre] = useState('');
const [propietario, setPropietario] =useState('');
const [email, setEmail] =useState('');
const [alta, setAlta] =useState('');
const [sintoma, setSintoma] =useState('');

// set para agregar al formulario los valores
useEffect(()=>{
if(Object.keys(paciente).length > 0)
{ setNombre(paciente.nombre),
  setPropietario(paciente.propietario),
  setEmail(paciente.email),
  setAlta(paciente.alta),
  setSintoma(paciente.sintoma)
}},[paciente])

//alerta
const[error,setError]=useState(false)
const generarId =() =>{
  const random =Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)

  return random +fecha
}

const  handleSubmit = (e) => {
  e.preventDefault();
 // console.log("enviando formulario")
 
 //Validacion de formularios  
 if ([nombre,propietario,email,alta,sintoma].includes('')
 ){console.log("Hay al menos un campo vacio")
     
 setError(true);
return;
}
setError(false)

//objeto de paciente 
const objetoPaciente= {
nombre,
propietario,
email,
alta,
sintoma,

}
// actualizar el objeto paciente
if(paciente.id){
  //editando el formulario
objetoPaciente.id = paciente.id


const  pacientesActualizados= pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente: pacienteState )

setPacientes(pacientesActualizados)
setPaciente({})
}else{
  //nuevo registros
  //metodo inmutable que no modifica el original
objetoPaciente.id = generarId()  
setPacientes([...pacientes, objetoPaciente]);
}


//Reiniciar el Formulario
setNombre('')
setPropietario('')
setEmail('')
setAlta('')
setSintoma('')

}
  return (
    <div className= "md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
      
      <p className="text-xl mt-5 text-center mb-10">  
        Añade Pacientes y {" "}
        <span className="text-blue-900 font-bold ">Administrador</span>
      </p>

      <form 
           onSubmit={handleSubmit}
           className="bg-white shadow-lg rounded-lg py-5 px-5 mb-10">

         {/**  {error && <Error mensaje="Todos los campos son obligatorios"/>}*/}
           {/** este es el prop children*/}

         {error && <Error>Todos los campos son obligatorios</Error> }

          <div className="mb-5">
            
            <label htmlFor="mascota" className="block uppercase text-gray-800 font-bold ">
              Nombre Mascota

             </label>
            {" "}
            <input
                  id="mascota" 
                  type="text"
                   placeholder='Nombre de La Mascota' 
                   className="border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md"
                   value={nombre}
                   onChange={(e)=> setNombre(e.target.value)}

            />
          </div >
          

          <div className="mb-5">
            
            <label htmlFor="propietario" className="block uppercase text-gray-800 font-bold ">
              Nombre Propietario

             </label>
            {" "}
            <input
                  id="propietario" 
                  type="text"
                   placeholder='Nombre del Propietario' 
                   className="border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md"
                   value={propietario}
                   onChange={(e)=> setPropietario(e.target.value)} 
            />
          </div>

          <div className="mb-5">
            
            <label htmlFor="email" className="block uppercase text-gray-800 font-bold ">
              Email

             </label>
            {" "}
            <input
                  id="email" 
                  type="email"
                   placeholder='Email Contacto Propietario' 
                   className="border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}

            />
          </div>

          <div className="mb-5">
            
            <label htmlFor="alta" className="block uppercase text-gray-800 font-bold ">
              Alta

             </label>
            {" "}
            <input
                  id="alta" 
                  type="date"
                  className="border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md"
                  value={alta}
                  onChange={(e) => setAlta(e.target.value)} 



            />
          </div>  

          
          <div className="mb-5">
            
            <label htmlFor="Sintomas" className="block uppercase text-gray-800 font-bold ">
              Sintomas

             </label>
             <textarea id="sintomas"
                      className="border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md"
                      placeholder="Description de los Sintomas"
                      value={sintoma}
                      onChange={(e)=> setSintoma(e.target.value)}
             />
          </div>
          <input type="submit"
                className="bg-indigo-600 w-full p-3 text-white  fond-bold hover:bg-indigo-800 cursor-pointer transition-opacity"
                value={paciente.id ? "Editar Paciente":"Agregar Paciente"}

                          
            /> 

      </form>
      </div>
  )
}

export default Formulario