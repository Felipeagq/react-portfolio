import { Container } from "semantic-ui-react";
import Header from "../Header";
import Footer from "../Footer"

export default function Layout({ children }) {
  return (
    <>
    <Header/>
    <main>
        <Container>
            <h1>
                Este es un H1
            </h1>
            {children}
        </Container>
        <Footer/>
    </main>
    </>
  );
}
