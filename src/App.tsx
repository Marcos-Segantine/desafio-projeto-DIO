import "./css/style.css";

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const message = "Agora voce pode recarregar a página que seu nome ficará registrado"

  const handleName = (e: any) => {
    if(String(e.target.value).trim() === '') console.log('INVALID NAME');
    
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="">Nome:</label>
        <input
          type="text"
          placeholder="Entre com seu nome"
          onChange={handleName}
        />
      </form>
      <h1>
        {
          localStorage.getItem("name") 
        }
      </h1>

      <span className="message">{localStorage.getItem("name")?.trim() === '' ? '': message}</span>
    </div>
  );
}

export default App;
