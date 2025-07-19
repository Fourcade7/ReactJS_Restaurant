import { Form,Row,Col,Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";





function LoginScreen(){

    const navigate=useNavigate();

    return(
        <div className="container d-flex justify-content-center align-items-center vh-75">
            <div className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{width:"450px",backgroundColor:"#181818"}} >

                 <h3>Добро пожаловать</h3>
                 <img className="rounded-circle border mt-3" src="/src/assets/fourcade.jpg" width={60} height={60} alt="" />

               <Form className="mt-3">
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control  type="phone" placeholder="Введите номер телефона" />
                <Form.Text className="text-muted">Мы никогда не передадим ваш телефон кому-либо еще.</Form.Text>
                </Form.Group>

                 <Form.Group className="mb-3">
                   <Form.Control  type="password"  placeholder="Введите пароль"/>
                  </Form.Group>

                  <Row className="g-1">
                                <Col className="d-grid">
                                    <Button as={Link} to="/register" variant="outline-warning" type="submit">
                                    Регистрация
                                    </Button>
                                </Col>
                                <Col className="d-grid">
                                    <Button onClick={(e)=>{
                                       e.preventDefault() 
                                      navigate("/home")
                                      
                                    }} variant="warning" type="submit">
                                    Вход
                                    </Button>
                                </Col>
                              </Row>

               </Form>

            </div>

        </div>
    )
}


export {LoginScreen};