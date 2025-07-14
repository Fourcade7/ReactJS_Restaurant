

import { useState } from "react"
import { Button, Col, Form, Row, Card} from "react-bootstrap"



function CategoryScreen(props){

  const [layout,setLayout]=useState(true);


    return(
        <div>     

            <div className="d-flex">
              <img
               onClick={()=>setLayout(!layout)}
               className="mt-3 ms-auto" type="button" src={`/src/assets/${layout ? `menu` : `grid`}.png`} width={24} height={24} alt=""
               ></img>
              </div>     
         
             <Row className={`row-cols-${layout ? `2` : `1`} mt-1 g-2`}>
              {
                props.category.foodsList.map((item)=>(
                  <Col>
                  <Card className="h-100">
                      <Card.Img variant="top" className="object-fit-cover" width={100} height={150} src={item.image} />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text className="text-secondary">
                          <small>{item.smallFoods}</small>
                        </Card.Text>
                        <div className="mt-auto d-grid">
                         <Button 
                         onClick={()=>{props.clickable(item.title)}}
                         variant="outline-secondary"
                         >Показать</Button>
                        </div>
                      </Card.Body>
                  </Card>
               </Col>
                ))
              }   
            </Row>
          
        </div>
    )


}



export {CategoryScreen}