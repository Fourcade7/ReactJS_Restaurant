

import { Button, Col, Form, Row, Card} from "react-bootstrap"



function DishesScreen(){


    return(
        <div>
          
             <Row className="row-cols-2 mt-4 g-2">
               <Col>
                  <Card className="h-100">
                      <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src="src/assets/meat.jpg" />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>Витрина</Card.Title>
                        <Card.Text className="text-secondary">
                          Фланг, Рибай, Медальон, Куринный грутка оващами, Даллас, Кофте друм, Говяжий шашлык, Барбаре, Антрекот, Т-Боне, Т-Боне Баранина, Бон-филе.
                        </Card.Text>
                        <div className="mt-auto d-grid">
                         <Button variant="warning">Показать</Button>
                        </div>
                      </Card.Body>
                  </Card>
               </Col>


                <Col>
                  <Card className="h-100">
                      <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src="src/assets/europefoods.jpg" />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>Европа Таомлар</Card.Title>
                        <Card.Text className="text-secondary">
                          Лидер Микс, Мангал Ассорти, Шеф ассорти, Асадо, Микс ассорти, Колбасные ассорти, Мини Мих Ассорти, Котлет сырный, Чизбургер, Котлеты с пюре, Лидер лаваш.
                        </Card.Text>
                        <div className="mt-auto d-grid">
                         <Button variant="primary">Показать</Button>
                        </div>
                      </Card.Body>
                  </Card>
               </Col>

               

               <Col>
                  <Card className="h-100">
                      <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src="src/assets/soupp.jpg" />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>Суюк Овкатлар</Card.Title>
                        <Card.Text className="text-secondary">
                          Ун оши, Тефтел шурва, Осма шурва, Мастава, Борщ.
                        </Card.Text>
                        <div className="mt-auto d-grid">
                         <Button variant="primary">Показать</Button>
                        </div>
                      </Card.Body>
                  </Card>
               </Col>


               <Col>
                  <Card className="h-100">
                      <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src="src/assets/xamirovqatlar.jpg" />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>Хамир Овкатлар</Card.Title>
                        <Card.Text className="text-secondary">
                          Манты порция, Капширма, Патир сомса, Турк сомса, Тухум барак, Кук барак, Котир барак, Кади барак, Манты, Барак ассорти.
                        </Card.Text>
                        <div className="mt-auto d-grid">
                         <Button variant="primary">Показать</Button>
                        </div>
                      </Card.Body>
                  </Card>
               </Col>


               
              <Col>
                  <Card className="h-100">
                      <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src="src/assets/milliytaomlar.jpg" />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>Миллий Таомлар</Card.Title>
                        <Card.Text className="text-secondary">
                          Голубси порция, Казан Кебаб, Миллий Асоорти, Каймака кебаб, Люля кебаб, Ковурма лагман, Сарёга товук, Уйгур лагмон, Жареный пельмень, Шур кабоб, Язык в сливочном масле, Гушт сай, Жизз.
                        </Card.Text>
                        <div className="mt-auto d-grid">
                         <Button variant="primary">Показать</Button>
                        </div>
                      </Card.Body>
                  </Card>
               </Col>

               <Col>
                  <Card className="h-100">
                      <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src="src/assets/shashlik.jpg" />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>Шашлик</Card.Title>
                        <Card.Text className="text-secondary">
                          Шашлык ассорти микс, Баранина семечка, Баранина кусковой, Бифштекс на мангале, Лидер шашлык, Qaratav, Метровый шашлык, Сетка кебаб, Гиждуван рулет, Товук ижон, Товук кусковой, Сетка товук, Шашлык ассорти, Рулет шашлык, Крилышка, Напалеон шашлык, Гиждуван, Иджан Шашлик, Говядина кусковой.
                        </Card.Text>
                        <div className="mt-auto d-grid">
                         <Button variant="primary">Показать</Button>
                        </div>
                      </Card.Body>
                  </Card>
               </Col>


                <Col>
                      <Card className="h-100">
                          <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src="src/assets/steyk.jpeg" />
                          <Card.Body className="d-flex flex-column">
                            <Card.Title>Стейк</Card.Title>
                            <Card.Text className="text-secondary">
                              Медальон стейк, Кофте друм, Баранья Корейка, Стейк на мангале, Фланг стейк, БОН ФИЛЕ, Рибай стейк, Даллас стеак, Мозговой кости, BonFile(медалион).
                            </Card.Text>
                            <div className="mt-auto d-grid">
                            <Button variant="primary">Показать</Button>
                            </div>
                          </Card.Body>
                      </Card>
                  </Col>

                 

                  <Col>
                      <Card className="h-100">
                          <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src="src/assets/pizza.jpg" />
                          <Card.Body className="d-flex flex-column">
                            <Card.Title>Пицца</Card.Title>
                            <Card.Text className="text-secondary">
                             Пицца по домашнему, Фруктовый Пицца, Пепперони пицца, Пицца грибами, Пицца мясная, Пицца с курицей и грибами.
                            </Card.Text>
                            <div className="mt-auto d-grid">
                            <Button variant="primary">Показать</Button>
                            </div>
                          </Card.Body>
                      </Card>
                  </Col>

                   <Col>
                      <Card className="h-100">
                          <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src="src/assets/fish.jpeg" />
                          <Card.Body className="d-flex flex-column">
                            <Card.Title>Балик Таомлар</Card.Title>
                            <Card.Text className="text-secondary">
                              Соусга балик, Балик 1 кг, Фальга балик 1кг, Сетка балик.
                            </Card.Text>
                            <div className="mt-auto d-grid">
                            <Button variant="primary">Показать</Button>
                            </div>
                          </Card.Body>
                      </Card>
                  </Col>


                  <Col>
                      <Card className="h-100">
                          <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src="src/assets/garniri.jpg" />
                          <Card.Body className="d-flex flex-column">
                            <Card.Title>Гарниры и Соусы</Card.Title>
                            <Card.Text className="text-secondary">
                             Фри, Овощи на мангале, Айдахо, Барбекю, Чесночный соус, Розовый соус, Кетчуп ханз, Сырный соус, Пюре, Рис.
                            </Card.Text>
                            <div className="mt-auto d-grid">
                            <Button variant="primary">Показать</Button>
                            </div>
                          </Card.Body>
                      </Card>
                  </Col>

               
            </Row>
          
        </div>
    )


}



export {DishesScreen}