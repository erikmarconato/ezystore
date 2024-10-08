import Card from "../components/CardsProducts/card";
import "../index.css";
import { useEffect, useState } from "react";
import axios from "axios";

// Foi estilizado pelo css global "index.css" na pasta "src" apenas para centralizar os cards na div

type AcessProps = {
  controlAcess: boolean;
}

function ListProductsCards({controlAcess}: AcessProps) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await axios.get("http://localhost:8080/produtos");
        setData(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar os produtos: ", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="centralizarCard">
      {data.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.nome}
          price={product.preco}
          image={product.imagemUrl}
          acesso={controlAcess}
        />
      ))}
    </div>
  );
}

export default ListProductsCards;
