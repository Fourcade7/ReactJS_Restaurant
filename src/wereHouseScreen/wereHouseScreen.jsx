import { Card, Col, Row } from "react-bootstrap";






function WereHouseScreen(){
    return(
        <div>
            <div className="d-flex my-4">
                <h3 className="mx-auto">Склад продукции</h3>
            </div>
            <Row className="row-cols-auto justify-content-center m-3">
                <Col className="col-2 border-end d-flex flex-column justify-content-center">
                    
                    <div className="d-flex align-items-center">                         
                         <h3 className="mx-auto">Мясные продукты</h3>
                       </div>
                      {/* item */}
                    <Card className="p-2 my-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/meatt.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Говядина</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">475,000 UZS</h5>
                       <div className="d-flex align-items-center">                         
                         <h3 className="mt-2 mb-0 text-success">215 КГ</h3>
                         <h3 className="mt-2 mb-0 ms-auto">215 КГ</h3>
                       </div>
                    </Card>
                      {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/sheeppp.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Баранина</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">185,000 UZS</h5>
                       <div className="d-flex align-items-center">  
                         <h3 className="mt-2 mb-0 text-success">115 КГ</h3>                       
                         <h3 className="mt-2 mb-0 ms-auto">100 КГ</h3>
                       </div>
                    </Card>
                    {/* item */}
                     {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/hen.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Курица</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">325,000 UZS</h5>
                       <div className="d-flex align-items-center"> 
                         <h3 className="mt-2 mb-0 text-success">215 КГ</h3>                        
                         <h3 className="mt-2 mb-0 ms-auto">55 КГ</h3>
                       </div>
                    </Card>
                    {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/fish.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Рыба</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">445,000 UZS</h5>
                       <div className="d-flex align-items-center">  
                         <h3 className="mt-2 mb-0 text-success">75 КГ</h3>                       
                         <h3 className="mt-2 mb-0 ms-auto">30 КГ</h3>
                       </div>
                    </Card>
                    {/* item */}

                     {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/kolbasa.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Колбаса и Сосиска</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">275,000 UZS</h5>
                       <div className="d-flex align-items-center">
                         <h3 className="mt-2 mb-0 text-success">50 КГ</h3>                         
                         <h3 className="mt-2 mb-0 ms-auto">15 КГ</h3>
                       </div>
                    </Card>
                    {/* item */}

                </Col>
                <Col className="col-2 border-end d-flex flex-column">
                        <div className="d-flex align-items-center mb-3">                         
                         <h3 className="mx-auto">Овощи</h3>
                       </div>
                      {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/kartoshka.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Картофель</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">175,000 UZS</h5>
                       <div className="d-flex align-items-center">
                         <h3 className="mt-2 mb-0 text-success">150 КГ</h3>                         
                         <h3 className="mt-2 mb-0 ms-auto">115 КГ</h3>
                       </div>
                    </Card>
                      {/* item */}

                       {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/onion.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Лук</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">175,000 UZS</h5>
                       <div className="d-flex align-items-center"> 
                          <h3 className="mt-2 mb-0 text-success">250 КГ</h3>           
                         <h3 className="mt-2 mb-0 ms-auto">215 КГ</h3>
                       </div>
                    </Card>
                      {/* item */}

                      {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/carrot.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Морковь</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">95,000 UZS</h5>
                       <div className="d-flex align-items-center">
                        <h3 className="mt-2 mb-0 text-success">150 КГ</h3>
                        <h3 className="mt-2 mb-0 ms-auto">100 КГ</h3>
                       </div>
                    </Card>
                      {/* item */}

                       {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/pomidor.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Помидор</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">95,000 UZS</h5>
                       <div className="d-flex align-items-center">
                        <h3 className="mt-2 mb-0 text-success">150 КГ</h3>                         
                         <h3 className="mt-2 mb-0 ms-auto">100 КГ</h3>
                       </div>
                    </Card>
                      {/* item */}

                       {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/cucumber.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Огурец</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">95,000 UZS</h5>
                       <div className="d-flex align-items-center">
                        <h3 className="mt-2 mb-0 text-success">150 КГ</h3>                         
                         <h3 className="mt-2 mb-0 ms-auto">100 КГ</h3>
                       </div>
                    </Card>
                      {/* item */}

                </Col>
                <Col className="col-2 border-end  d-flex flex-column">
                        <div className="d-flex align-items-center mb-3">                         
                         <h3 className="mx-auto">Фрукты</h3>
                       </div>
                      {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/applegreen.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Зеленое яблоко</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">175,000 UZS</h5>
                       <div className="d-flex align-items-center">
                        <h3 className="mt-2 mb-0 text-success">40 КГ</h3>                         
                         <h3 className="mt-2 mb-0 ms-auto">15 КГ</h3>
                       </div>
                    </Card>
                      {/* item */}

                       {/* item */}
                    <Card className="p-2 mb-3 border-3 border-danger">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/banana.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto text-danger">Банан</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">175,000 UZS</h5>
                       <div className="d-flex align-items-center">                         
                         <h3 className="mt-2 mb-0 ">20 КГ</h3>
                         <h3 className="mt-2 mb-0 ms-auto text-danger">2 КГ</h3>
                       </div>
                    </Card>
                      {/* item */}

                      {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/apelsin.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Апельсин</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">95,000 UZS</h5>
                       <div className="d-flex align-items-center">
                        <h3 className="mt-2 mb-0 text-success">40 КГ</h3>                         
                         <h3 className="mt-2 mb-0 ms-auto">20 КГ</h3>
                       </div>
                    </Card>
                      {/* item */}                    

                </Col>
                 <Col className="col-2  d-flex flex-column">
                        <div className="d-flex align-items-center mb-3">                         
                         <h3 className="mx-auto">Напитки</h3>
                       </div>
                      {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/cocacola.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">CocaCola</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">175,000 UZS</h5>
                       <div className="d-flex align-items-center">
                        <h3 className="mt-2 mb-0 text-success">40 БЛ</h3>                         
                         <h3 className="mt-2 mb-0 ms-auto">20 БЛОК</h3>
                       </div>
                    </Card>
                      {/* item */}

                       {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/fanta.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Fanta</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">175,000 UZS</h5>
                       <div className="d-flex align-items-center">
                        <h3 className="mt-2 mb-0 text-success">30 БЛ</h3>                         
                         <h3 className="mt-2 mb-0 ms-auto">20 БЛОК</h3>
                       </div>
                    </Card>
                      {/* item */}

                      {/* item */}
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/bonaqua.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Bonaqua</p>
                                
                                <small className="text-secondary">19/07/2025 08:30</small>
                            </div>
                        </div>
                        <h5 className="mt-2 mb-0">95,000 UZS</h5>
                       <div className="d-flex align-items-center"> 
                        <h3 className="mt-2 mb-0 text-success">50 БЛ</h3>                        
                         <h3 className="mt-2 mb-0 ms-auto">20 БЛОК</h3>
                       </div>
                    </Card>
                      {/* item */}                    

                </Col>
                
            </Row>


            
        </div>
    )
}



export {WereHouseScreen};