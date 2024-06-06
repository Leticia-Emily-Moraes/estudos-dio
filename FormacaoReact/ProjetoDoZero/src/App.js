import react, { useState, useEffect } from "react";

const App = () => {
    const [usuario, setUsuario] = useState("");
    const [count, setCount] = useState(0);
    const [usuarios, setUsuarios] = useState(
        ["João", "Joaquim", "José"]
    )
    useEffect(()=>{
        setCount(usuarios.length)
    },[usuarios])

    const handleAddUser = () =>{
        setUsuarios([...usuarios, usuario])
        setUsuario("")
    }

    return (
        <div className="App">
            <h1>Olá, mundo!</h1>
            <h3>Total:{count}</h3>
            <input 
                type="text"
                value={usuario} 
                onChange = {(event) => setUsuario(event.target.value)}
            />
            <button onClick={handleAddUser}>Adicionar</button>
            <hr/>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    )
};

export default App;
