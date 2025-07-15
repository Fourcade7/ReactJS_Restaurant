import { useLocation } from "react-router-dom";





function OrderScreen(){
    const location=useLocation();
    const data=location.state;

    return (
        <div>{data[0].name}</div>
    )
}



export {OrderScreen};