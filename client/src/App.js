import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Theme";

function App() {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <main class="App">App File</main>
      </ThemeProvider>
    </>
  );
}

export default App;
