import Image from './imagen.jpeg'

function Encabezado() {
    return (
        <>
            <h1>El Acertijo</h1>
            <hr/>
            <img src={Image} alt='Logo' width={"20%"}></img>
        </>

    )
}
export default Encabezado;