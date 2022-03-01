//1. Para hacer la consulta asíncrona del archivo json:

let Animales = ( () => {
    const url = "http://localhost:5500/animales.json";
    const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    return {getData}; //con esto se retorna dentro de un objeto el método getData
} ) ();

export default Animales;