

import { Card,Button, Row, Col } from "react-bootstrap";
import { useState } from "react";




function FoodsScreen(props){

    const [childFoodsList,setChildFoodsList]=useState(props.childFoodList)
    const [layout,setLayout]=useState(true);

   

   

    return(
        <div className="mt-3">

            <div className="d-flex mb-3">
              <img
               onClick={()=>setLayout(!layout)}
               className="ms-auto" type="button" src={`/src/assets/${layout ? `menu` : `grid`}.png`} width={24} height={24} alt=""
               ></img>
              </div>  

            <Row className={`row-cols-${layout ? `2` : `1`} mt-1 g-2`}>
               {
                childFoodsList.map((item,index) =>(

                    <Col key={index}>
                    <Card className="h-100">
                     <Card.Img variant="top" src={item.image} className="object-fit-cover" width={100} height={150} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{item.name}</Card.Title>
                            
                            <Row className="row-cols-auto mb-3">
                                <Col>
                                    <Row className="row-cols-auto g-1">
                                        <Col><img src="/src/assets/moneyuzs.png" width={25} height={25} alt="" /></Col>
                                        <Col><small className="text-secondary">{Number(item.price).toLocaleString("uz-UZ")} UZS</small></Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="row-cols-auto g-1 ms-auto">
                                        <Col><img src="/src/assets/clock.png" width={20} height={20} alt="" /></Col>
                                        <Col><small className="text-secondary">{item.time}</small></Col>
                                    </Row>
                                </Col>

                            </Row>                            
                            {childFoodsList[index].visible ? (
                                <Row className="align-items-center justify-content-center mt-auto">
                                    <Col className="d-grid">
                                    <Button
                                     onClick={()=>{
                                        props.clickableMinus(index);
                                        if(childFoodsList[index].count==0){
                                            childFoodsList[index].visible=false;
                                        }
                                    }}
                                    variant="outline-secondary" ><img src="/src/assets/minus.png" width={20} height={20} alt="" /></Button>
                                    </Col>
                                    <Col className="col-1 d-flex justify-content-center "><h3 className="my-auto">{item.count}</h3></Col>
                                     <Col className="d-grid">
                                    <Button  
                                     onClick={()=>{props.clickablePlus(index)}}
                                    variant="outline-secondary" ><img src="/src/assets/add.png" width={20} height={20} alt="" /></Button>
                                    </Col>
                              </Row>
                            ):(
                                <Row className="mt-auto">
                                    <Col className="d-grid">
                                        <Button 
                                        onClick={()=>{
                                            const updatedList = [...childFoodsList];
                                                updatedList[index].visible = true;                                                               
                                                setChildFoodsList(updatedList);
                                                props.addButtonEvent(1,index);                                                
                                        }}
                                        variant="outline-secondary" >Добавить</Button>
                                        </Col>
                                </Row>
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