import "./App.css";
import { Conteudo } from "./components/Conteudo";
import { Locais } from "./components/Locais";
import { Pais } from "./components/Pais";

function App() {
    return (
        <>
            <Conteudo></Conteudo>
            <Pais></Pais>
            <Locais></Locais>
        </>
    );
}

export default App;
