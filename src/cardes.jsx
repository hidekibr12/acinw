import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cardes() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://loja.cestanobre.com.br/storage/produtos/detergente-liquido-neutro-ype-500ml-1.jpg" />
        <Card.Body>
          <Card.Title>Detergente</Card.Title>
          <Card.Text>
            Detem gente
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.brilhante.com.br/images/h0nadbhvm6m4/2Z105DPtof6wSVNgmvv5Go/96015cf05d1cf79e94308583dfc57c51/QWx2ZWphbnRlX0JyaWxoYW50ZV9DbG9yb19BdGl2b19GcmVzaF8ucG5n/1080w-1080h/alvejante-brilhante-cloro-ativo-fresh.jpg" />
        <Card.Body>
          <Card.Title>Alvejante</Card.Title>
          <Card.Text>
            Apenas alvejante{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images-americanas.b2w.io/produtos/01/00/img/40705/4/40705425_1SZ.jpg" />
        <Card.Body>
          <Card.Title>Amaciante</Card.Title>
          <Card.Text>
            Amaciante 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cardes;