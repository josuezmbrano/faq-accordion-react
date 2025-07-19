import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content"

function App() {
  return (
    <main className="accordion-card-container">
      <div className="content-container">
        <Header />
        <Content />
      </div>
    </main>
  );
}

// 1) Se uso un custom hook donde se maneja un estado inicializado isOpen para controlar el renderizado de las respuestas
// y un toggle que cambia su estado de false a true y viceversa
// 2) La informacion se coloco en una base de datos (accordion-data.js) para mapear sobre ella y renderizar una instancia de 
// FaqItem por cada objeto en la data, usado como render props, FaqItem solo recibe la logica del custom hook permitiendo que
// cada Item tenga su estado isOpen y toggle independiente, logrando que desde el padre, se renderize lo que se necesite renderizar
// segun el estado de cada FaqItem (Mostrar u ocultar las respuestas de cada pregunta individual )

export default App;
