
function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const { nombre, propietario, email, alta, sintoma, id } = paciente;

  const handleEliminar = () => {
    const respuesta = window.confirm("¿Deseas eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mx-2 bg-white shadow-md rounded-xl px-5 py-10">
      <p className="font-white mb-3 text-gray-700 uppercase">
        <span className="font-bold">Nombre:</span> {nombre}
      </p>

      <p className="font-white mb-3 text-gray-700 uppercase">
        <span className="font-bold">Propietario:</span> {propietario}
      </p>

      <p className="font-white mb-3 text-gray-700 uppercase">
        <span className="font-bold">Email:</span> {email}
      </p>

      <p className="font-white mb-3 text-gray-700 uppercase">
        <span className="font-bold">Fecha Alta:</span> {alta}
      </p>

      <p className="font-white mb-3 text-gray-700 uppercase">
        <span className="font-bold">Síntomas:</span> {sintoma}
      </p>

      <div>
        <button
          type="button"
          className="px-10 py-2 bg-indigo-950 hover:bg-indigo-500 rounded-lg font-bold text-white uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="mx-2 px-10 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white font-bold uppercase"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;