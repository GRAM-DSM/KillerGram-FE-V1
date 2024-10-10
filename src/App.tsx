import { MainRouter } from "./routes/router";
import { GlobalStyle } from "./styles/globalStyle";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <MainRouter />
    </>
  );
}

export default App;
