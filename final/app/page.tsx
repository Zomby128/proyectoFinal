"use client"
import { useState } from "react"

const Page = () => {
  const [nombre,setNombre] = useState('');
  const [contador, setContador] = useState(0);
  const [edad, setEdad] = useState(0);
  const [mensaje, setMensaje] = useState('');

  function contar(){
    setContador(contador + 1);
  }

  function limpiar(){
    setContador(0);
  }

  function mensajeAviso(){
    if(edad >=18){
    setMensaje("Es mayor de 18 años");
    }else{
    setMensaje("Es menor de los 18 años")
  }
  }

  const manejadorFormulario = (event:any) => {
    event.preventDefault();
    console.log('se hizo click');
  }

  return (
    <div><center>
      <h1>Proyecto Final</h1>
      <h2>Estructuras de Datos</h2>
      <h3>{nombre}</h3>
      <button onClick={contar}>
        
          Contar
        
      </button>
      <p>{contador} numero de clics</p>
      
      <button onClick={limpiar}>
        
        Borrar
        
      </button>
      <input 
      type = "text"
      placeholder = "Edad"
      value = {edad}
      onChange={(event) => setEdad(parseInt(event.target.value))}
      />
      <button onClick={mensajeAviso}>
        Años
      </button>
      <p>{mensaje}</p>
      <form
        onSubmit={manejadorFormulario}
      >
        <input type="text" placeholder="Nombre" 
        value={nombre}
        onChange={(event)=> setNombre(event.target.value)}
        />

        <input type = "submit"/>

      </form>
      </center>
    </div>
  )
}

export default Page