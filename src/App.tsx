// Utils
import { 
  DataProvider, 
} from "./contexts/Context";

import { 
  Router,
} from "./contexts/Router";


// Style
import { 
  GlobalStyle,
} from "./styles/GlobalStyle";

import { 
  ThemeProvider,
} from "styled-components";

import { 
  DefaultTheme,
} from "./styles/themes/DefaultTheme";
import { BrowserRouter } from "react-router-dom";


export function App() {

  return (
    <DataProvider>
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyle />
            <Router />
        </ThemeProvider>
    </DataProvider>
  )
}
