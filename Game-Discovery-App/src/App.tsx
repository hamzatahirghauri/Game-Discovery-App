import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="green">
          Nav
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
