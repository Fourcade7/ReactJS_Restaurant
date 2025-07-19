import { Form,Row,Col,Button,Dropdown,Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

import childFoodsList from "../repository/foodsRepository";




function HistoryScreen(){

     const foodNames = [...new Set(childFoodsList.map(food => food.name))];

   
    return(
        <div className="container d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center justify-content-center py-4 px-3" style={{width:"450px",backgroundColor:"#181818"}} >

            <h3>История</h3>

            <div className="d-flex w-100  mt-3">

                <Dropdown className="me-1 w-100">
                        <Dropdown.Toggle className="w-100" variant="outline-success">Июль</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {[
                            "Январь",
                            "Февраль",
                            "Март",
                            "Апрель",
                            "Май",
                            "Июнь",
                            "Июль",
                            "Август",
                            "Сентябрь",
                            "Октябрь",
                            "Ноябрь",
                            "Декабрь"
                            ].map((month, index) => (
                            <Dropdown.Item key={index} onClick={() => {}}>
                                {month}
                            </Dropdown.Item>
                            ))}
               </Dropdown.Menu>
               </Dropdown>


               <Dropdown className="ms-1">
                    <Dropdown.Toggle className="" variant="outline-primary">18</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                        <Dropdown.Item key={day} onClick={() => {}}>
                            {day}
                        </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
               </Dropdown>

               <Dropdown className="ms-1">
                    <Dropdown.Toggle className="" variant="outline-primary">2025</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {[2024, 2025, 2026, 2027].map((year) => (
                        <Dropdown.Item key={year} onClick={() => {}}>
                            {year}
                        </Dropdown.Item>
                        ))}
                </Dropdown.Menu>
               </Dropdown>

               <Dropdown className="ms-1">
                    <Dropdown.Toggle variant="outline-primary">
                        Название блюда
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "auto" }}>
                        {foodNames.map((name, index) => (
                        <Dropdown.Item key={index} onClick={() => console.log(name)}>
                            {name}
                        </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>



            </div>


            <div className="mt-3 w-100">
                 <div className="d-flex flex-column my-2">
                    <h2 className="mx-auto p-0 m-0">5,475,000 UZS</h2>
                    <small className="pb-2 m-0">Сегодня</small>
                </div>
                <Accordion className="w-100" defaultActiveKey="eventKeyhere">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="p-0 m-0">
                        <div className="d-flex flex-row align-items-center">
                            <div className="">
                                <p className="my-auto">736,000 UZS</p>
                                <small className="text-secondary">2025/Июль/18.  21:45</small>
                            </div>
                        </div>

                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border" src="/src/assets/fourcade.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Eshmat Toshmatov</p>
                                <small className="text-secondary">Официант</small>
                            </div>
                        </div>
                        <div className="mt-3 d-flex flex-column">
                                <div className="d-flex mb-2 p-0">
                                <p className="text-secondary m-0 p-0">2-Етаж </p>
                                <p className="text-secondary ms-auto m-0 p-0">7-Стол</p>                                
                                </div>
                             <hr className="m-0 p-0" />   
                              <div className="d-flex m-o p-0">
                                <p className="text-secondary m-0 p-0">Лидер Микс </p>
                                <p className="text-secondary ms-auto m-0 p-0">x3</p>                                
                                </div>
                             <hr className="m-0 p-0" />                            
                                <div className="d-flex  p-0">
                                <p className="text-secondary m-0 p-0">Ковурма лагман </p>
                                <p className="text-secondary ms-auto m-0 p-0">x4</p>                                
                                </div>
                             <hr className="m-0 p-0" />
                                <div className="d-flex m-o p-0">
                                <p className="text-secondary m-0 p-0">Нон ассорти </p>
                                <p className="text-secondary ms-auto m-0 p-0">x2</p>                                
                             </div>   
                                                     
                        </div>
                    </Accordion.Body>
                </Accordion.Item>


                 <Accordion.Item className="mt-1" eventKey="1">
                    <Accordion.Header className="p-0 m-0">
                        <div className="d-flex flex-row align-items-center">
                            <div className="">
                                <p className="my-auto">845,000 UZS</p>
                                <small className="text-secondary">2025/Июль/18.  21:45</small>
                            </div>
                        </div>

                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border object-fit-cover" src="/src/assets/johnpreston.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Eshmat Toshmatov</p>
                                <small className="text-secondary">Официант</small>
                            </div>
                        </div>
                        <div className="mt-3 d-flex flex-column">
                                <div className="d-flex m-o p-0">
                                <p className="text-secondary m-0 p-0">Лидер Микс </p>
                                <p className="text-secondary ms-auto m-0 p-0">x3</p>                                
                                </div>
                             <hr className="m-0 p-0" />                            
                                <div className="d-flex m-o p-0">
                                <p className="text-secondary m-0 p-0">Ковурма лагман </p>
                                <p className="text-secondary ms-auto m-0 p-0">x4</p>                                
                                </div>
                             <hr className="m-0 p-0" />
                                <div className="d-flex m-o p-0">
                                <p className="text-secondary m-0 p-0">Нон ассорти </p>
                                <p className="text-secondary ms-auto m-0 p-0">x2</p>                                
                             </div>   
                                                     
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                 <Accordion.Item className="mt-1" eventKey="3">
                    <Accordion.Header className="p-0 m-0">
                        <div className="d-flex flex-row align-items-center">
                            <div className="">
                                <p className="my-auto">1,275,000 UZS</p>
                                <small className="text-secondary">2025/Июль/18.  21:45</small>
                            </div>
                        </div>

                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded border" src="/src/assets/fourcade.jpg" width={50} height={50} alt="" />
                            <div className="ms-2">
                                <p className="my-auto">Eshmat Toshmatov</p>
                                <small className="text-secondary">Официант</small>
                            </div>
                        </div>
                        <div className="mt-3 d-flex flex-column">
                                <div className="d-flex m-o p-0">
                                <p className="text-secondary m-0 p-0">Лидер Микс </p>
                                <p className="text-secondary ms-auto m-0 p-0">x3</p>                                
                                </div>
                             <hr className="m-0 p-0" />                            
                                <div className="d-flex m-o p-0">
                                <p className="text-secondary m-0 p-0">Ковурма лагман </p>
                                <p className="text-secondary ms-auto m-0 p-0">x4</p>                                
                                </div>
                             <hr className="m-0 p-0" />
                                <div className="d-flex m-o p-0">
                                <p className="text-secondary m-0 p-0">Нон ассорти </p>
                                <p className="text-secondary ms-auto m-0 p-0">x2</p>                                
                             </div>   
                                                     
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                
              </Accordion>
            </div>

                

            </div>

        </div>
    )
}


export {HistoryScreen};