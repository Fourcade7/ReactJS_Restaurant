import { Card, Col, Row } from "react-bootstrap";

function ChefScreen() {
  return (
    <div>
      <div className="d-flex my-4">
        <h3 className="mx-auto">Ovqatlar</h3>
      </div>
      <Row className="row-cols-auto justify-content-center m-3">
        {/* Мясные продукты */}
        <Col className="col-2 border-end d-flex flex-column">
          <div className="d-flex align-items-center">
            <h3 className="mx-auto">Мясные продукты</h3>
          </div>

          <Card className="p-3 my-3">
            <div className="d-flex flex-row align-items-center">
              <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="face" width={50} height={50} className="rounded border me-2" />
              <div>
                <p className="my-auto">Eshmat Gishmatov</p>
                <p className="text-warning mb-0">2-Етаж 5-Стол</p>
              </div>
             <img className="rounded border ms-auto" cla src="/src/assets/close.png" alt="face" width={28} height={28}  />
             </div>
            <h5 className="mt-2 mb-0 text-warning">09:51</h5>
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Казан Кебаб</h3>
              <h3 className="mt-2 mb-0 ms-auto">X3</h3>
            </div>
            <hr className="m-0 p-0" />
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Тефтел шурва</h3>
              <h3 className="mt-2 mb-0 ms-auto">X2</h3>
            </div>
            <hr className="m-0 p-0" />
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Нон ассорти</h3>
              <h3 className="mt-2 mb-0 ms-auto">X2</h3>
            </div>
          </Card>

          <Card className="p-3 my-2">
            <div className="d-flex flex-row align-items-center">
              <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="face" width={50} height={50} className="rounded border me-2" />
              <div>
                <p className="my-auto">Eshmat Gishmatov</p>
                <p className="text-warning mb-0">2-Етаж 5-Стол</p>
              </div>
             <img className="rounded border ms-auto" cla src="/src/assets/close.png" alt="face" width={28} height={28}  />
             </div>
            <h5 className="mt-2 mb-0 text-warning">09:51</h5>
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Казан Кебаб</h3>
              <h3 className="mt-2 mb-0 ms-auto">X3</h3>
            </div>
            <hr className="m-0 p-0" />
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Тефтел шурва</h3>
              <h3 className="mt-2 mb-0 ms-auto">X2</h3>
            </div>
            <hr className="m-0 p-0" />
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Нон ассорти</h3>
              <h3 className="mt-2 mb-0 ms-auto">X2</h3>
            </div>
          </Card>
        </Col>

        {/* Yangi ustun */}
        <Col className="col-2 border-end d-flex flex-column">
          <div className="d-flex align-items-center">
            <h3 className="mx-auto">Супы</h3>
          </div>

          <Card className="p-3 my-3">
            <div className="d-flex flex-row align-items-center">
              <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="face" width={50} height={50} className="rounded border me-2" />
              <div>
                <p className="my-auto">Dilafruz Mahmudova</p>
                <p className="text-warning mb-0">1-Етаж 3-Стол</p>
              </div>
               <img className="rounded border ms-auto" cla src="/src/assets/close.png" alt="face" width={28} height={28}  />
             </div>
            <h5 className="mt-2 mb-0 text-warning">10:05</h5>
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Шурпа</h3>
              <h3 className="mt-2 mb-0 ms-auto">X1</h3>
            </div>
            <hr className="m-0 p-0" />
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Мастава</h3>
              <h3 className="mt-2 mb-0 ms-auto">X2</h3>
            </div>
            <hr className="m-0 p-0" />
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Сариқ шурва</h3>
              <h3 className="mt-2 mb-0 ms-auto">X1</h3>
            </div>
          </Card>
        </Col>

        {/* Yana bir ustun */}
        <Col className="col-2 border-end d-flex flex-column">
          <div className="d-flex align-items-center">
            <h3 className="mx-auto">Салаты</h3>
          </div>

          <Card className="p-3 my-3">
            <div className="d-flex flex-row align-items-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="face" width={50} height={50} className="rounded border me-2" />
              <div>
                <p className="my-auto">Anvar Norqulov</p>
                <p className="text-warning mb-0">3-Етаж 1-Стол</p>
              </div>
              <img className="rounded border ms-auto" cla src="/src/assets/close.png" alt="face" width={28} height={28}  />
            </div>
            <h5 className="mt-2 mb-0 text-warning">10:20</h5>
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Оливье</h3>
              <h3 className="mt-2 mb-0 ms-auto">X2</h3>
            </div>
            <hr className="m-0 p-0" />
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Весенний салат</h3>
              <h3 className="mt-2 mb-0 ms-auto">X1</h3>
            </div>
            <hr className="m-0 p-0" />
            <div className="d-flex align-items-center mb-2">
              <h3 className="mt-2 mb-0 ">Морковь по-корейски</h3>
              <h3 className="mt-2 mb-0 ms-auto">X3</h3>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export { ChefScreen };
