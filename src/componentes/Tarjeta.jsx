import React from "react";
import Card from "react-bootstrap/Card";



const Tarjeta = ({ address, title, description }) => {
    return <div className="cards">
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={address}
            />
            <Card.Body>
                <Card.Title className="titulo">{title}</Card.Title>
                <Card.Text className="text">
                    {description}
                </Card.Text>

            </Card.Body>
        </Card>
    </div>

}
export default Tarjeta;