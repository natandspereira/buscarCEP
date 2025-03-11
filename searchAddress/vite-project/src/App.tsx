import Footer from "./templates/footer/Footer";
import Header from "./templates/header/Header";
import maps from "./img/maps.svg";
import { useState } from "react";
import axios from "axios";

interface Endereco {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

function App() {
  const [cep, setCep] = useState<string>("");
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [erro, setErro] = useState<string>("");

  const buscarEndereco = async () => {
    try {
      const response = await axios.get<Endereco & { erro?: boolean }>(
        `https://viacep.com.br/ws/${cep}/json/`
      );

      if (response.data.erro) {
        setErro("CEP não encontrado");
        setEndereco(null);
      } else {
        setEndereco(response.data);
        setErro("");
      }
    } catch (error) {
      setErro("Erro ao buscar CEP");
      setEndereco(null);
    }
  };

  const limparResultado = () => {
    setCep("");
    setEndereco(null);
    setErro("");
  };

  return (
    <div className="bg-black h-svh">
      <Header />
      <div className="flex items-center justify-center">
        <img className="w-50 mt-10 svgWhite" src={maps} alt="Ícone do mapa" />
      </div>

      <div className="flex flex-col items-center justify-center mt-20">
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP"
          className="bg-amber-50 p-2 rounded-sm"
        />
       <div className="flex items-center justify-center mt-2 gap-5">
        <button 
            className="bg-amber-50 p-2 rounded-sm" 
            onClick={buscarEndereco}
          >
            Buscar
          </button>

          <button className="bg-amber-50 p-2 rounded-sm" onClick={limparResultado}>Limpar</button>
       </div>
        {erro && <p className="text-red-500 mt-5 font-bold text-2xl">{erro}</p>}

        {endereco && (
          <div className="mt-5 p-4 bg-gray-800 rounded-lg">
            <h2 className="text-amber-50 font-bold">Endereço encontrado:</h2>
            <p className="text-amber-50 font-bold">Logradouro: {endereco.logradouro}</p>
            <p className="text-amber-50 font-bold">Bairro: {endereco.bairro}</p>
            <p className="text-amber-50 font-bold">Cidade: {endereco.localidade}</p>
            <p className="text-amber-50 font-bold">Estado: {endereco.uf}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
