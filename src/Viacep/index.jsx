import axios from "axios";

const Viacep = () => {

    let cep = "";
    const handleBuscarCep = () => {
        cep = document.querySelector('.cep').value;
        if (cep.length == 8){
            buscarCep();
        }
    }

    const buscarCep = () => {
        axios.get ('https://viacep.com.br/ws/${cep}/json')
        .then ((response) => {
            alert(JSON.stringify(response.data));
        })
    }

    return (
        <div className="Viacep">
            <h1>Viacep</h1>
            <input type="text"
            className="cep"
            placeholder="00000-000" />
        <button onClick={handleBuscarCep}>
            Buscar
        </button>
        </div>
    )
}

export default Viacep