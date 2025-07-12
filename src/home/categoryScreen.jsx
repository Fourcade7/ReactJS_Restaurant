

import { Button, Col, Form, Row, Card} from "react-bootstrap"



function CategoryScreen(props){


    return(
        <div>          
         
             <Row className="row-cols-2 mt-4 g-2">


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
                         <Button variant="primary">Показать</Button>
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