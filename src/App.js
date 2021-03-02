import { Container, Header } from 'semantic-ui-react';
import Player from './component/Player';

const App = () => {
  const title = 'Game No.24';

  return (
    <Container fluid>
      <Header as="h1">{title}</Header>
      <Player />
    </Container>
  );
};

export default App;
