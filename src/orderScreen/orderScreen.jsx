import { Card,Button ,Col , Row} from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";






function OrderScreen(props){
    // const location=useLocation();
    // const data=location.state;

     const [floor,setFloor]=useState("Етаж");
     const [table,setTable]=useState("Стол");
     const [price,setPrice]=useState(0);
    const [filteredOrderList, setFilteredOrderList] = useState([]);

     let summ=0;
     

    
          
    //for Recomposition
     useEffect(()=>{
        const filteredOrderListCopy=[];
        props.orderList.map((item)=>{
         let findedElement=filteredOrderListCopy.find(itemf => itemf==item)
          if(!findedElement){
            filteredOrderListCopy.push(item);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            summ = summ + (Number(item.price)) * (Number(item.count));
            
         }});
     
     setPrice(summ);
     setFilteredOrderList(filteredOrderListCopy);
    },[props.orderList]);
    //for Recomposition  
        

    return (
        <div className="my-4 vh-100">
            <div className="my-3">
                   <div className="d-flex mt-3">
                                <small className="">Закази: 01987</small>
                                 <small className="ms-auto">Время: 19:51 2025/17-июль</small>
                    </div>
                   
                    <div className="ms-auto mt-2 d-flex flex-row align-items-center">

                        <img className="rounded border" src="/src/assets/fourcade.jpg" width={50} height={50} alt="" />
                        <div className="ms-2">
                        <p className="my-auto">Eshmat Toshmatov</p>
                        <small>Официант</small>
                    </div>  
                    <Dropdown className="me-1 ms-auto">
                    <Dropdown.Toggle className="w-100" variant="outline-success" id="dropdown-basic">
                        {floor}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>{setFloor("1-Етаж")}} href="#/action-1">1-Етаж</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setFloor("2-Етаж")}} href="#/action-2">2-Етаж</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setFloor("3-Етаж")}} href="#/action-3">3-Етаж</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="ms-1">
                    <Dropdown.Toggle className="w-100" variant="outline-success" id="dropdown-basic">
                        {table}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>{setTable("1-Стол")}} href="#/action-1">1-Стол</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setTable("2-Стол")}} href="#/action-2">2-Стол</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setTable("3-Стол")}} href="#/action-3">3-Стол</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setTable("4-Стол")}} href="#/action-3">4-Стол</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setTable("5-Стол")}} href="#/action-3">5-Стол</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    </div>
                
            </div>
            
            {
                filteredOrderList.map((item,index)=>{

                    
                    
                   return ( <Card className="my-2 p-1 flex-row align-items-center">                        
                           
                            <div>
                                <p className="my-auto ms-2">{item.name}</p>
                                <small className="my-auto ms-2 text-secondary">{((Number(item.price)) * (Number(item.count))).toLocaleString('uz-UZ')} UZS</small>
                                
                            </div> 
                            <div className="ms-auto d-flex">
                               <Row className="align-items-center justify-content-center mt-auto">
                                    <Col className="d-grid">
                                    <Button
                                    onClick={()=>{props.clickableMinus(index)}}
                                    variant="outline-secondary" ><img src="/src/assets/minus.png" width={20} height={20} alt="" /></Button>
                                    </Col>
                                    <Col className="col-1 d-flex justify-content-center "><h3 className="my-auto">{item.count}</h3></Col>
                                     <Col className="d-grid">
                                    <Button  
                                    onClick={()=>{props.clickablePlus(index)}}
                                    variant="outline-secondary" ><img src="/src/assets/add.png" width={20} height={20} alt="" /></Button>
                                    </Col>
                              </Row>
                            </div>
                            {/* <div className="ms-3">
                                 <img className="rounded" src={item.image} width={45} height={45} alt="" />  
                            </div> */}
                            
                       
                    </Card>
                    )
                })
            }

             

             <div className="d-flex">
                <h2 className="mx-auto">{price.toLocaleString('uz-UZ')} UZS</h2>
             </div>

             
        </div>
    )
}







export {OrderScreen};