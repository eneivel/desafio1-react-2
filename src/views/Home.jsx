import { Container } from "react-bootstrap";
import imagen from "../assets/imgs/dibujo_pastel.png";


const Home = () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Bienvenidos a <span className="fw-bold">Happy Cake</span>
            </h1>
            <h6> El lugar de los pasteles felices</h6>
            <img src={imagen} className="img-fluid" alt="Dibujo Pastel" />
        </Container>
    )
}


export default Home;