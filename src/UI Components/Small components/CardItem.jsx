import Card from 'react-bootstrap/Card';

function CardItem() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Weight>
          100gm
        </Card.Weight>
      </Card.Body>
    </Card>
  );
}

export default CardItem;