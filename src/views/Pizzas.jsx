import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Col, Row } from "react-bootstrap"
import PizzaCard from "../components/PizzaCard"

const Pizzas = () => {
  const {pizzas} = useContext(AppContext)

  return (
    <Row className="g-3">
      <h1 className="text-center">Nuestras Pizzas</h1>
      {pizzas.map(pizza => 
        <Col key={pizza.id} sm={6} md={4}>
          <PizzaCard pizza={pizza} from={'pizzas'}/>
        </Col>
      )}
    </Row>
  )
}

export default Pizzas