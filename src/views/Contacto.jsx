import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useState } from 'react';


const Contacto = () => {

    const [correo, setCorreo] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const inputCorreo = (e) => {
        return (
            setCorreo(e.target.value)
        )
    }

    const inputDescripcion = (e) => {
        return (
            setDescripcion(e.target.value)
        )
    }

    const validarDatos = (e) => {
        return (
            e.preventDefault()
        )
    }
    return (
        <Form className="text-center container" onSubmit={validarDatos}>
            <h1>Cuentanos... ¿ En que te podemos ayudar ?</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo : </Form.Label>
                <Form.Control value={correo} onChange={inputCorreo} type="email" placeholder="nombre@ejemplo.com" />
            </Form.Group>
            <Form.Label>Descripción : </Form.Label>
            <FloatingLabel value={descripcion} onChange={inputDescripcion} controlId="floatingTextarea" className="mb-3">
                <Form.Control as="textarea" />
            </FloatingLabel>
            <Button variant="danger" type="submit">Enviar</Button>
        </Form>

    )
}



export default Contacto;