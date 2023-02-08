import { Card, Col, Button } from "react-bootstrap";
export let SingleBook = ({ libro }) => {
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={libro.img} />
          <Card.Body>
            <Card.Title>{libro.title}</Card.Title>
            <Card.Text>{libro.price}</Card.Text>
            <Button variant="primary">{libro.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
