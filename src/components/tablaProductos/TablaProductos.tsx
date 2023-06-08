import {products} from "../../types/products";
import FilaCategoria from "../filaCategoria/FilaCategoria";
import "./style.css";

type tablaProductosProps = {
  products: Array<products>;
};

const TablaProductos = ({products}: tablaProductosProps) => {
  const uniqueCategories = [
    ...new Set(products.map((product) => product.categoria)),
  ];

  return (
    <div>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>

        {uniqueCategories.map((categoria) => (
          <FilaCategoria categoria={categoria} products={products} />
        ))}
      </table>
    </div>
  );
};

export default TablaProductos;
