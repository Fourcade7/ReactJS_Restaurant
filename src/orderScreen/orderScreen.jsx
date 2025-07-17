import { Card, Button, Col, Row, Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";

function OrderScreen({ orderList, clickablePlus, clickableMinus }) {
  const [floor, setFloor] = useState("Етаж");
  const [table, setTable] = useState("Стол");
  const [price, setPrice] = useState(0);
  const [filteredOrderList, setFilteredOrderList] = useState([]);

  useEffect(() => {
    const filtered = [];

    let summ = 0;

    orderList.forEach((item) => {
      const exists = filtered.find((i) => i.id === item.id);
      if (!exists) {
        filtered.push(item);
        summ += Number(item.price) * Number(item.count);
      }
    });

    setFilteredOrderList(filtered);
    setPrice(summ);
  }, [orderList]);

  return (
    <div className="my-4 vh-100">
      <div className="my-3">
        <div className="d-flex mt-3">
          <small>Закази: 01987</small>
          <small className="ms-auto">Время: 19:51 2025/17-июль</small>
        </div>

        <div className="ms-auto mt-2 d-flex flex-row align-items-center">
          <img className="rounded border" src="/src/assets/fourcade.jpg" width={50} height={50} alt="" />
          <div className="ms-2">
            <p className="my-auto">Eshmat Toshmatov</p>
            <small className="text-secondary">Официант</small>
          </div>

          <Dropdown className="me-1 ms-auto">
            <Dropdown.Toggle variant="outline-success">{floor}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setFloor("1-Етаж")}>1-Етаж</Dropdown.Item>
              <Dropdown.Item onClick={() => setFloor("2-Етаж")}>2-Етаж</Dropdown.Item>
              <Dropdown.Item onClick={() => setFloor("3-Етаж")}>3-Етаж</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="ms-1">
            <Dropdown.Toggle variant="outline-success">{table}</Dropdown.Toggle>
            <Dropdown.Menu>
              {["1", "2", "3", "4", "5"].map((n) => (
                <Dropdown.Item key={n} onClick={() => setTable(`${n}-Стол`)}>
                  {n}-Стол
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {filteredOrderList.map((item) => (
        <Card key={item.id} className="my-2 p-1 flex-row align-items-center">
          <div>
            <p className="my-auto ms-2">{item.name}</p>
            <small className="ms-2 text-secondary">
              {(item.price * item.count).toLocaleString("uz-UZ")} UZS
            </small>
          </div>

          <div className="ms-auto d-flex">
            <Row className="align-items-center justify-content-center mt-auto">
              <Col className="d-grid">
                <Button
                  onClick={() => clickableMinus(item.id)}
                  variant="outline-secondary"
                >
                  <img src="/src/assets/minus.png" width={20} height={20} alt="" />
                </Button>
              </Col>
              <Col className="col-1 d-flex justify-content-center">
                <h3 className="my-auto">{item.count}</h3>
              </Col>
              <Col className="d-grid">
                <Button
                  onClick={() => clickablePlus(item.id)}
                  variant="outline-secondary"
                >
                  <img src="/src/assets/add.png" width={20} height={20} alt="" />
                </Button>
              </Col>
            </Row>
          </div>
        </Card>
      ))}

      <div className="d-flex">
        <h2 className="mx-auto">{price.toLocaleString("uz-UZ")} UZS</h2>
      </div>
    </div>
  );
}

export { OrderScreen };
