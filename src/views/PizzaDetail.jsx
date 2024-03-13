import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Row, Col, Card, Button } from "react-bootstrap";

const PizzaDetail = () => {
  const { pizzaName } = useParams();
  const { pizzas, cart, setCart, formatName } = useContext(AppContext);
  const selectedPizza = pizzas.find((pizza) => pizza.name === pizzaName);

  if (!selectedPizza) {
    return <div>No se encontró la pizza seleccionada</div>;
  }

  const { name, img, desc, ingredients, price } = selectedPizza;

  const addCart = () => {
    const pizzaIndex = cart.findIndex(item => item.id === pizza.id)
    if (pizzaIndex !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === pizzaIndex ? { ...item, count: item.count + 1  } : item
      );
      setCart(updatedCart);
    } else {
      const updatedPizza = { ...pizza, count: 1 };
      const updatedCart = [...cart, updatedPizza ];
      setCart(updatedCart);
    }
  }

  return (
    <>
      <Row className="pt-3">
        <Col lg={6} xl={5}>
          <Card>
            <Card.Img src={img} />
          </Card>
        </Col>
        <Col lg={6} xl={7}>
          <h2 className="text-center mb-3">{formatName(name)}</h2>
          <hr />
          <p>{desc}</p>
          <ul>
            {ingredients.map((ing, index) => {
              return <li key={index}>{formatName(ing)}</li>;
            })}
          </ul>
          <div className="d-flex justify-content-between">
            <h3>Precio: {price}</h3>
            <Button onClick={addCart}>
              Agregar
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PizzaDetail;
