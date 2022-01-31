import { useEffect, useState } from "react";
import axios from "axios";
export default function CidadeEstado({
  setValueEstado,
  setValueCidade,
  ...props
}) {
  const [estados, setEstados] = useState([]);
  const [estado, setEstado] = useState("");
  const [cidades, setCidades] = useState([]);
  const [cidade, setCidade] = useState("");

  async function getEstados() {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then(function (response) {
        setEstados(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getEstados();
  }, []);

  return (
    <>
      <div className="my-4">
        <label className="block text-sm font-medium text-gray-700">
          Estado
        </label>
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <select
            value={estado}
            onChange={({ target }) => (
              setValueEstado(target.value), setEstado(target.value)
            )}
            name=""
            id=""
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          >
            <option>Selecione</option>
            {estados.map((el) => (
              <option key={el.id} value={el.sigla}>
                {el.nome}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
