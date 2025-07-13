

import { Card,Button, Row, Col } from "react-bootstrap";
import { useState } from "react";




function FoodsScreen(props){

    const [childFoodsList,setChildFoodsList]=useState(props.childFoodList)

    return(
        <div className="mt-4">
            <Row className="row-cols-1">
               {
                childFoodsList.map((item,index) =>(

                     <Col>
                    <Card>
                     <Card.Img variant="top" src={item.image} className="object-fit-cover" width={100} height={150} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{item.name}</Card.Title>

                            
                            <Row className="row-cols-auto mb-3">
                                <Col>
                                    <Row className="row-cols-auto g-1">
                                        <Col><img src="/src/assets/moneyuzs.png" width={25} height={25} alt="" /></Col>
                                        <Col><small className="text-secondary">{item.price} UZS</small></Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="row-cols-auto g-1 ms-auto">
                                        <Col><img src="/src/assets/clock.png" width={20} height={20} alt="" /></Col>
                                        <Col><small className="text-secondary">{item.time}</small></Col>
                                    </Row>
                                </Col>

                            </Row>                            
                            {item.visible ? (
                                <Row className="align-items-center justify-content-center">
                                    <Col className="d-grid">
                                    <Button
                                     onClick={()=>{
                                        const updatedList = [...childFoodsList];
                                            if(updatedList[index].count>0){
                                                updatedList[index].count -=1;
                                            }                                            
                                            setChildFoodsList(updatedList);
                                        }}
                                    variant="outline-secondary" ><img src="/src/assets/minus.png" width={20} height={20} alt="" /></Button>
                                    </Col>
                                    <Col className="col-1 d-flex justify-content-center "><h3 className="my-auto">{item.count}</h3></Col>
                                     <Col className="d-grid">
                                    <Button  
                                     onClick={()=>{
                                        const updatedList = [...childFoodsList];
                                            updatedList[index].count +=1;
                                            setChildFoodsList(updatedList);
                                        }}
                                    variant="outline-secondary" ><img src="/src/assets/add.png" width={20} height={20} alt="" /></Button>
                                    </Col>
                              </Row>
                            ):(
                                <Col className="d-grid mb-2">
                                 <Button 
                                 onClick={()=>{
                                    const updatedList = [...childFoodsList];
                                        updatedList[index].visible = true;
                                        updatedList[index].count +=1;
                                        setChildFoodsList(updatedList);
                                 }}
                                 variant="outline-secondary" >Добавить</Button>
                                 </Col>
                            )

                            }
                           
                           

                            
                           
                    </Card.Body>
                </Card>
                </Col>
                ))
               }
            </Row>
        </div>
    )


}




export {FoodsScreen};