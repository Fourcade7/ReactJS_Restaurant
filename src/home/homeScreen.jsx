

import { Badge, Button, Col, Form, Row} from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

import { useState } from "react";
import { CategoryScreen } from "./categoryScreen";
import categoryList from "../repository/categoriesRepository";
import { FoodsScreen } from "../foodScreen/foodsScreen";
import childFoodsList from "../repository/foodsRepository";
import { useNavigate } from "react-router-dom";



function HomeScreen() {

  
  const navigate=useNavigate();

  const [active,setActive]=useState(0);
  const [childFoodList,setChildFoodList]=useState(childFoodsList);
  const [categoryName,setCategoryName]=useState("");
  const [orderList,setOrderList]=useState([]);

  

  

  return (
    <div  className="container d-flex  align-items-center justify-content-center">

     
       <div  style={{ width: "450px" }}>

        <div className="position-relative d-inline-block">
         <img src="/src/assets/mainimage.png" class="img-fluid w-100" alt="..."></img>
         {categoryName==="1" && 
         <Button
         onClick={()=>{         
          setCategoryName("");
          setChildFoodList(childFoodsList);
        }} 
         variant="warning" 
         className="position-absolute top-0 start-0 m-2 rounded-circle">
            <img src="/src/assets/arrow.png" width={15} height={15} alt="" />
          </Button>
        }    
        </div>  

          
         <div className="py-5 px-3 rounded rounded-top-5" style={{marginTop:-25, backgroundColor: "#181818"}}> 
         
           {categoryName && 
              <div className="mb-3 sticky-top py-2">
                  <Button
                  onClick={()=>{         
                    setCategoryName("");
                    setChildFoodList(childFoodsList);
                  }} 
                  variant="warning" 
                  className="rounded-circle">
                      <img src="/src/assets/arrow.png" width={15} height={15} alt="" />
                    </Button>
              </div>
            }
         
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
                   <Col>
                   <button  
                   onClick={()=>{
                    setActive(index);
                    setCategoryName("");
                    setChildFoodList(childFoodsList);
                  }}
                   className={`btn btn${index==active ? ``:`-outline`}-secondary border-2 py-1`}>{item.name}                  
                   
                   </button></Col>
                ))
               }
            </Row>

           
            
           
           
           <InputGroup className="mt-4">
                <Form.Control className="text-secondary" type="text" placeholder="Поиск..." />
                <InputGroup.Text > <img className="" src="/src/assets/magnifier.png" width={15} height={15} alt="" /></InputGroup.Text>
            </InputGroup>


          {categoryName ? 
          <FoodsScreen 
                clickablePlus={(index)=>{
                  const updatedList=[...childFoodList];
                    updatedList[index].count+=1;
                     
                    setChildFoodList(updatedList);

                    //order


                    const orderlist=[...orderList];
                    orderlist.push(updatedList[index]);
                    setOrderList(orderlist);
                                     


                }}

                clickableMinus={(index)=>{
                  const updatedList=[...childFoodList];
                    updatedList[index].count-=1;
                    setChildFoodList(updatedList);
                    //order
                    const orderListCopy=[...orderList];
                    const foundIndex = orderListCopy.findIndex(item => item.id === updatedList[index].id);
                    orderListCopy.splice(foundIndex,1)
                    setOrderList(orderListCopy);
                    
                }}

               addButtonEvent={(event,index)=>{
                
                   if(event==1){
                          const updatedList=[...childFoodList];
                          updatedList[index].count+=1;
                            const orderlist=[...orderList];
                            orderlist.push(updatedList[index]);
                            setOrderList(orderlist);                            
                    }
               }} 
          
               childFoodList={childFoodList}>
           </FoodsScreen>   
           :
            <CategoryScreen 
            clickable={(categoryname)=>{
              console.log(categoryname);
              setCategoryName(categoryname);
              setChildFoodList(childFoodList.filter(item=> (item.categoryName==categoryname)));
              window.scrollTo(0,200); // sahifani tepaga olib boradi


            }}
            category={categoryList[active]}>              
           </CategoryScreen>  
         }


        
          
        

         <div className="d-flex sticky-bottom sticky-top mt-3 mb-3">
            {categoryName && 
            <div className="col-2 d-grid">
            <Button 
              onClick={()=>{
                setCategoryName("");
                setChildFoodList(childFoodsList);
              }} 
              variant="warning"
              className="">
              <img src="/src/assets/arrow.png" width={15} height={15} alt="" />
              <div></div>
              </Button>
            </div>
            }
            <div className="col d-grid mx-2">
            <Button
            
            onClick={()=>{
              navigate("/order",{state:orderList});
            }}
            variant="warning" className="">Мои Закази <Badge bg="danger">{orderList.length}</Badge></Button>
            </div>
         </div>

        








              
          

          </div> 
       </div> 
       
      
      
    </div>
  )
}

export {HomeScreen}