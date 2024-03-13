import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cart, setCart, total, formatName } = useContext(AppContext);

  const handleCount = (id, mode) => {
    const pizzaIndex = cart.findIndex((item) => item.id === id);
    const updatedCart = cart.map((item, index) =>
      index === pizzaIndex
        ? { ...item, count: mode == "suma" ? item.count + 1 : item.count - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const deleteFromCart = (id) => {
    const pizzaIndex = cart.findIndex((item) => item.id === id);
    const updatedCart = cart.filter((item, index) => index != pizzaIndex);
    setCart(updatedCart);
  };

  return (
    <>
      <h1 className="text-center">Tu pedido</h1>
      {cart.length ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((pizza) => {
                return (
                  <tr key={pizza.id}>
                    <td>{formatName(pizza.name)}</td>
                    <td>
                      <Button
                        size="sm"
                        variant="secondary"
                        disabled={pizza.count == 1}
                        onClick={() => handleCount(pizza.id, "resta")}
                      >
                        -
                      </Button>

                      <span className="px-2">{pizza.count}</span>

                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleCount(pizza.id, "suma")}
                      >
                        +
                      </Button>

                      <Button
                        size="sm"
                        className="me-2"
                        variant="danger"
                        onClick={() => deleteFromCart(pizza.id)}
                      >
                        x
                      </Button>
                    </td>
                    <td>${pizza.price * pizza.count}</td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3} className="text-end">
                  <b>Total a pagar:</b> ${total}
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="d-flex justify-content-end">
            <Button>Realizar compra</Button>
          </div>
        </>
      ) : (
        <p className="fs-3 text-center">No has agregado productos al carrito</p>
      )}
    </>
  );
};

export default Cart;
