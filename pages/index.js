import { Button, Icon } from "semantic-ui-react";

export default function Home() {
  return (
    <div>
      <h1>Hola mundo NextJs</h1>
      <Button disabled primary>Hola</Button>
      <Button secondary>Hola</Button>
      <Button loading={false} secondary>Hola</Button>
      <Button loading={true} secondary>Hola</Button>
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </div>
  );
}
