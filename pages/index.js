import { Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function Home() {
  const [colorButton, setColorButton] = useState("primary");
  const onHandlerClick = () => {
    alert("Se hizo click en el Boton");
    console.log("Se hizo click en el boton");
    setColorButton("secondary");
  };
  return (
    <div>
      <h1>Hola mundo NextJs</h1>
      <Button disabled primary>
        Hola
      </Button>
      <Button onClick={() => onHandlerClick()} secondary>
        Hola
      </Button>
      <Button loading={false} secondary>
        Hola
      </Button>
      <Button loading={true} secondary>
        Hola
      </Button>
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </div>
  );
}
