import Header from "../components/Header/header";
import CrudProdutos from "../components/CrudProdutos/crudprodutos";
import ListProductsCards from "../Data/listProductsCards";


function ControlPanel() {
  
  return (
    <div>
      <Header />
      <CrudProdutos/>
      <ListProductsCards controlAcess={true}/>
    </div>
  );
}

export default ControlPanel;
