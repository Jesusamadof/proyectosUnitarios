import React from 'react';
import Paciente from './Paciente'; // Asegúrate de usar el nombre correcto del componente

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-1/2 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-center mt-5 text-xl mb-10">
            Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          <div>
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-center mt-5 text-xl mb-10">
            Comienza agregando pacientes{' '}
            <span className="text-indigo-600 font-bold">Y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;