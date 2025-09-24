import { Link,useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from '../assets/images/notfound.svg'

const Error = () => {
  const error=useRouteError()
  if(error.status===404){
  return (
    <Wrapper>
    <div>
      <img src={img} alt="not found"/>
      <h3> OOPS! Page not found</h3>
      <p>We can't find the page you are looking for</p>
      <Link to='/'>Back Home</Link>
    </div>
    </Wrapper>
  )
}
return (
    <div>
      <h1>some other error</h1>
      <Link to='/'>Back To Home</Link>
    </div>
  )
}


export default Error
