import {products} from "../../types/products";
import "./style.css";

type filaProductoProps = {
  product: products;
};

const FilaProducto = ({product}: filaProductoProps) => {
  return (
    <>
      <tr>
        <td>{product.nombre}</td>
        <td>{product.precio}</td>
        <td>{product.stock}</td>
      </tr>
    </>
  );
};

export default FilaProducto;
