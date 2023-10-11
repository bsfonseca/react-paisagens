import "./App.css";
import { Conteudo } from "./components/Conteudo";
import { Italia } from "./components/Italia";
import { Franca } from "./components/Franca";
import { Suica } from "./components/Suica";
import { Icones } from "./components/Icones";
import { Contato } from "./components/Contato";
import { Rodape } from "./components/Rodape";

function App() {
    return (
        <>
            <Conteudo></Conteudo>
            <Icones></Icones>
            <Suica></Suica>
            <Franca></Franca>
            <Italia></Italia>
            <Contato></Contato>
            <Rodape></Rodape>
        </>
    );
}

export default App;
