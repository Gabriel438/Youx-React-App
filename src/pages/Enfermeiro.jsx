import { useEffect, useState } from "react";
import FormEnfermeiro from "../components/Form/FormEnfermeiro";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Enfermeiro() {
  const [open, setOpen] = useState(false);
  const [enfermeiro, setEnfemeiro] = useState([]);

  async function buscaEnfemeiro() {
    await axios({
      method: "GET",
      url: "https://final-spring-boot-youx.herokuapp.com/enfermeiro/",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        setEnfemeiro(response.data);
      })
      .catch(function (error) {});
  }

  useEffect(() => {
    buscaEnfemeiro();
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
      <FormEnfermeiro showForm={open} />
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
                      CPF
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {enfermeiro.length &&
                    enfermeiro.map((person) => (
                      <tr key={person.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.nome}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.cpf}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <Link to={"/EditUser/" + person.id + "/enfermeiro"}>
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
