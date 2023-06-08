import {products} from "../../types/products";
import FilaProducto from "../filaProducto/FilaProducto";
import "./style.css";

type filaCategoriaProps = {
  categoria: string;
  products: Array<products>;
};

const FilaCategoria = ({categoria, products}: filaCategoriaProps) => {
  return (
    <>
      <tr>
        <th colSpan={3}>{categoria}</th>
      </tr>

      {products.map((product) => (
        <FilaProducto product={product} />
      ))}
    </>
  );
};

export default FilaCategoria;
