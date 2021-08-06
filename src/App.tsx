import { Box, Grommet } from "grommet";
import { Header } from "./components/Header";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { AppContext } from "./context/AppContext";
import { AppContextProps, SortOption } from "./types/AppContextTypes";
import { AircraftManage } from "./components/AircraftManage";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const client = new QueryClient();

function App() {
  const [context, setContext] = useState<AppContextProps>({
    sort: SortOption.DepartureASC,
    flightsPerPage: "25",
    page: 1,
    selectedFlights: [],
  });

  return (
    <QueryClientProvider client={client}>
      <Grommet theme={theme}>
        <Box responsive align="center" justify="around">
          <AppContext.Provider value={[context, setContext]}>
            <Header />
            <AircraftManage />
          </AppContext.Provider>
        </Box>
      </Grommet>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
