import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const ContextProvider = ({children}) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const getPizzas = async () => {
    fetch('/pizzas.json')
    .then(response => response.json())
    .then(data => data.map(item => ({...item, count: 0}) ))
    .then(newData => setPizzas(newData))
  }

  const calcularTotal = () => {
    const totalPagar = cart.reduce((acumulador, pizza) => acumulador + pizza.price * pizza.count, 0)
    setTotal(totalPagar)
  }

  const formatName = name => {
    const words = name.split(' ')
    const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1))
    return capitalized.join(' ')
  }

  useEffect(() => {
    getPizzas()
  }, []) 

  useEffect(() => {
    calcularTotal()
  }, [cart])

  return (
    <AppContext.Provider value={{pizzas, cart, setCart, total, formatName}}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider