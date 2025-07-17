import { Badge, Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { CategoryScreen } from "./categoryScreen";
import categoryList from "../repository/categoriesRepository";
import { FoodsScreen } from "../foodScreen/foodsScreen";
import childFoodsList from "../repository/foodsRepository";
import { OrderScreen } from "../orderScreen/orderScreen";

function HomeScreen() {
  const [active, setActive] = useState(0);
  const [childFoodList, setChildFoodList] = useState(childFoodsList);
  const [categoryName, setCategoryName] = useState("");
  const [orderList, setOrderList] = useState([]);
  const [visibleOrderScreen, setVisibleOrderScreen] = useState(false);

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div style={{ width: "450px" }}>
        {/* Main image */}
        <div className="position-relative d-inline-block">
          <img src="/src/assets/mainimage.png" className="img-fluid w-100" alt="..." />
        </div>

        {/* Content box */}
        <div className="py-5 px-3 rounded-top-5" style={{ marginTop: -25, backgroundColor: "#181818" }}>
          <h5>LIDERANT RESTAURANT</h5>
          <div className="d-flex align-items-center">
            <img src="/src/assets/maps-and-flags.png" width={15} height={15} alt="" />
            <small className="text-secondary ms-1">UZ Karakalpakstan Beruniy region</small>
          </div>
          <div className="d-flex align-items-center">
            <img src="/src/assets/telephone.png" width={15} height={15} alt="" />
            <small className="text-secondary ms-1">976514000</small>
            <img className="ms-3" src="/src/assets/social-media.png" width={15} height={15} alt="" />
            <small className="text-secondary ms-1">instagram</small>
          </div>

          {/* Category buttons */}
          <Row className="row-cols-auto mt-4 g-2">
            {categoryList.map((item, index) => (
              <Col key={item.id}>
                <button
                  onClick={() => {
                    setActive(index);
                    setCategoryName("");
                    setChildFoodList(childFoodsList);
                    setVisibleOrderScreen(false);
                  }}
                  className={`btn btn${index === active ? "" : "-outline"}-secondary border-2 py-1`}
                >
                  {item.name}
                </button>
              </Col>
            ))}
          </Row>

          {/* Search */}
          <InputGroup className="mt-4">
            <Form.Control className="text-secondary" type="text" placeholder="Поиск..." />
            <InputGroup.Text>
              <img src="/src/assets/magnifier.png" width={15} height={15} alt="" />
            </InputGroup.Text>
          </InputGroup>

          {/* Conditional rendering */}
          {visibleOrderScreen ? (
            <OrderScreen
              orderList={orderList}
              clickablePlus={(id) => {
                const copy = [...orderList];
                const index = copy.findIndex((item) => item.id === id);
                if (index !== -1) {
                  copy[index].count += 1;
                  setOrderList(copy);
                }
              }}
              clickableMinus={(id) => {
                const copy = [...orderList];
                const index = copy.findIndex((item) => item.id === id);
                if (index !== -1) {
                  if (copy[index].count > 1) {
                    copy[index].count -= 1;
                  } else {
                    copy.splice(index, 1);
                  }
                  setOrderList(copy);
                }
              }}
            />
          ) : categoryName ? (
            <FoodsScreen
              childFoodList={childFoodList}
              clickablePlus={(index) => {
                const updated = [...childFoodList];
                updated[index].count += 1;
                setChildFoodList(updated);
                setOrderList([...orderList, updated[index]]);
              }}
              clickableMinus={(index) => {
                const updated = [...childFoodList];
                updated[index].count -= 1;
                setChildFoodList(updated);

                const copy = [...orderList];
                const foundIndex = copy.findIndex((item) => item.id === updated[index].id);
                if (foundIndex !== -1) {
                  copy.splice(foundIndex, 1);
                  setOrderList(copy);
                }
              }}
              addButtonEvent={(event, index) => {
                if (event === 1) {
                  const updated = [...childFoodList];
                  updated[index].count += 1;
                  setOrderList([...orderList, updated[index]]);
                }
              }}
            />
          ) : (
            <CategoryScreen
              category={categoryList[active]}
              clickable={(name) => {
                setCategoryName(name);
                setChildFoodList(childFoodsList.filter((item) => item.categoryName === name));
                window.scrollTo(0, 200);
              }}
            />
          )}

          {/* Bottom button */}
          <div className="d-flex sticky-bottom sticky-top mt-3 mb-3">
            {(categoryName || visibleOrderScreen) && (
              <div className="col-2 d-grid">
                <Button
                  onClick={() => {
                    setCategoryName("");
                    setChildFoodList(childFoodsList);
                    setVisibleOrderScreen(false);
                  }}
                  variant="warning"
                >
                  <img src="/src/assets/arrow.png" width={15} height={15} alt="" />
                </Button>
              </div>
            )}
            <div className="col d-grid mx-2">
              <Button
                onClick={() => {
                  setVisibleOrderScreen(true);
                  window.scrollTo(0, 200);
                }}
                variant="warning"
              >
                Мои Закази <Badge bg="danger">{orderList.length}</Badge>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomeScreen };
