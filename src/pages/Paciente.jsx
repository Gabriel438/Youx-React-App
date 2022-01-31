import { useEffect, useState } from "react";
import FormPaciente from "../components/Form/FormPaciente";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Paciente() {
  const [open, setOpen] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  async function buscaPacientes() {
    await axios({
      method: "GET",
      url: "https://final-spring-boot-youx.herokuapp.com/paciente/",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        setPacientes(response.data);
      })
      .catch(function (error) {});
  }

  useEffect(() => {
    buscaPacientes();
  }, [open]);

  return (
    <>
      <div className="flex flex-row-reverse space-x-4 space-x-reverse px-1">
        <button
          onClick={() => setOpen(!open)}
          className="my-2 bg-white hover:bg-green-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow"
        >
          Novo
        </button>
      </div>
      <FormPaciente showForm={open} setShowForm={setOpen} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full ">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nome completo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Estado
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pacientes.length &&
                    pacientes.map((person) => (
                      <tr key={person.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.nome + " " + person.sobrenome}
                              </div>
                              <div className="text-sm text-gray-500">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {person.uf}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <Link to={"/EditUser/" + person.id + "/paciente"}>
                              Editar
                            </Link>
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
