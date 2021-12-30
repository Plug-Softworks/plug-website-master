import "./App.css";
import Main from "./components/Main";
import { ModalCtxProvider } from "./components/contexts/ModalCtx";
import { MenuCtxProvider } from "./components/contexts/MenuCtx";

function App() {
  return (
    <ModalCtxProvider>
      <MenuCtxProvider>
        <div className="App">
          <div className="Content">
            <Main />
          </div>
        </div>
      </MenuCtxProvider>
    </ModalCtxProvider>
  );
}

export default App;
