import React from 'react';

const initialValues = {
    numeroUsuario: 0,
    numeroMaquina: (limite) => Math.floor(Math.random() * limite) + 1
}

function Acertijo(props) {
    let [numeroUsuario, setNumeroUsuario] = React.useState(initialValues.numeroUsuario);
    let [numeroMaquina, setNumeroMaquina] = React.useState(initialValues.numeroMaquina(props.limite))

    function comprobarNumeroUsuario(event) {
        setNumeroUsuario(event.target.value);
    }

    function comprobarNumeroMaquina() {
        if (numeroUsuario == numeroMaquina) {
            alert("Ganaste, adivinaste el numero")
        } else {
            alert("Perdiste, el numero era " + numeroMaquina)
        }
        setNumeroMaquina(initialValues.numeroMaquina(props.limite))
        setNumeroUsuario(initialValues.numeroUsuario)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "20rem",
            justifyContent: "center",
            gap: "10px"
        }}>
            <p>Elije un numero del 1 al 10</p>
            <input
                type='number'
                placeholder='ingresa tu apuesta'
                min={1}
                max={10}
                value={numeroUsuario}
                onChange={comprobarNumeroUsuario} />
            <button onClick={comprobarNumeroMaquina}>Adivinar</button>
        </div>
    );
}
export default Acertijo;