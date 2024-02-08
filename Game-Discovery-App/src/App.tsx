import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg={"pink"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="violet">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="purple">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
