

import { Button, Col, Form, Row} from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

import { useState } from "react";
import { CategoryScreen } from "./categoryScreen";
import categoryList from "../repository/categories";



function HomeScreen() {

  
  

  const [active,setActive]=useState(0);
  

  return (
    <div   className="container d-flex  align-items-center justify-content-center">
       <div  style={{ width: "500px" }}>
         <img src="/src/assets/mainimage.png" class="img-fluid w-100" alt="..."></img>
         
         <div className="py-5 px-3 rounded rounded-top-5" style={{marginTop:-25, backgroundColor: "#181818"}}>
          
          <h5 >LIDERANT RESTAURANT</h5> 
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


            <Row className="row-cols-auto mt-4 g-2">               
               {
                categoryList.map((item,index)=>(
                   <Col><button  
                   onClick={()=>{setActive(index)}}
                   className={`btn btn${index==active ? ``:`-outline`}-secondary border-2`}>{item.name}                  
                   
                   </button></Col>
                ))
               }
            </Row>

           
            
           
           
           <InputGroup className="mt-4">
                <Form.Control className="text-secondary" type="text" placeholder="Поиск..." />
                <InputGroup.Text > <img className="" src="/src/assets/magnifier.png" width={15} height={15} alt="" /></InputGroup.Text>
            </InputGroup>


         
          {
            <CategoryScreen category={categoryList[active]}></CategoryScreen>
          }











              
          

          </div> 
          </div> 
      
      
    </div>
  )
}

export {HomeScreen}