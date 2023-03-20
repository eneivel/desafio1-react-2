import { Container } from "react-bootstrap";
import imagen from "../assets/imgs/error-404.png"

const NotFound = () => {
    return (
        <Container className="text-center">
            <img src={imagen} className="imgnot" alt="Error 404"/>
            <h1>Preciona Home</h1>
     
        </Container>
    )
}



export default NotFound;