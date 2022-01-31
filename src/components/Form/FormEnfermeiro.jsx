import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import InputPadrao from "../InputPadrao/InputPadrao";
import axios from "axios";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function FormEnfermeiro({ showForm }) {
  const cancelButtonRef = useRef(null);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [estado, setEstado] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleForm() {
    setLoading(true);
    var json = {
      nome: nome,
      cpf: cpf,
      password: senha,
    };
    await axios({
      method: "POST",
      url: "https://final-spring-boot-youx.herokuapp.com/enfermeiro/create",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      data: JSON.stringify(json),
    })
      .then(function (response) {
        setLoading(false);
        Swal.fire("Sucesso", "Seus dados foram cadastrados", "success");
      })
      .catch(function (error) {
        setLoading(false);
      });
  }
  return (
    <>
      {showForm && (
        <motion.div
          initial={{ scaleY: 0, y: "0px" }}
          animate={{ scaleY: 1, y: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="container-fluid px-6 absolute bg-white min-h-full	z-auto min-w-full"
            style={{ zIndex: "1000" }}
          >
            <InputPadrao
              className="my-4"
              name="Nome"
              label="Nome"
              onChange={(ev) => setNome(ev)}
              value={nome}
              id="nome"
            />
            <InputPadrao
              label="CPF"
              id="cpd"
              type="text"
              onChange={(ev) => setCpf(ev)}
              value={cpf}
            />
            <InputPadrao
              className="my-4"
              name="Senha"
              label="Senha"
              value={senha}
              type="password"
              onChange={(ev) => setSenha(ev)}
              id="Senha"
            />
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              {loading ? (
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleForm}
                >
                  Cadastrando
                </button>
              ) : (
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleForm}
                >
                  Criar
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
