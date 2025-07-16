import { Card,Button ,Col , Row} from "react-bootstrap";






function OrderScreen(props){
    // const location=useLocation();
    // const data=location.state;

    const filteredOrderList=[];

    props.orderList.map((item)=>{
            let findedElement=filteredOrderList.find(itemf => itemf==item)
            if(!findedElement){
                filteredOrderList.push(item);
            }

    });
   

    return (
        <div className="my-4 vh-100">
            
            {
                filteredOrderList.map((item)=>(
                    <Card className="my-2 p-2 flex-row align-items-center">                        
                           
                            <div>
                                 <p className="my-auto">{item.name}</p>                                
                            </div>
                            <div className="ms-auto d-flex">
                               <Row className="align-items-center justify-content-center mt-auto">
                                    <Col className="d-grid">
                                    <Button
                                    
                                    variant="outline-secondary" ><img src="/src/assets/minus.png" width={20} height={20} alt="" /></Button>
                                    </Col>
                                    <Col className="col-1 d-flex justify-content-center "><h3 className="my-auto">{item.count}</h3></Col>
                                     <Col className="d-grid">
                                    <Button  
                                    
                                    variant="outline-secondary" ><img src="/src/assets/add.png" width={20} height={20} alt="" /></Button>
                                    </Col>
                              </Row>
                            </div>
                            {/* <div className="ms-3">
                                 <img className="rounded" src={item.image} width={45} height={45} alt="" />  
                            </div> */}
                            
                       
                    </Card>
                ))
            }
        </div>
    )
}







export {OrderScreen};