import '../../components_css/services.css'
import {React,useState,useEffect} from 'react'
const Service =()=>{
const [hide,setHide] = useState(false)
const [text,setText] = useState("Show all Fields")
useEffect(()=>{
  document.title='Container Launch'
},[])
const handleClick=()=>{
  if(hide){
    setText("Show all Fields")
    setHide(false)
  }
  else{
    setText("Show Minimal fields")
    setHide(true)
  }
}
return(
  <div id="each-service-layout">
    <blockquote id="details">
      <h3>Enter the details of the container you want to launch.</h3><br/>
      Example:<hr/><br/>
      <table >
        <tbody>
          <tr>
            <td>Image Name</td>
            <td>:</td>
            <td>ubuntu</td>
          </tr>
          <tr>
          <td>Options</td>
          <td>:</td>
          <td>it(i=interactive, t=terminal)</td>

          </tr>
          <tr>
          <td>Patting</td>
          <td>:</td>
          <td>80:123</td>
          </tr>
          <tr>
          <td>Volume</td>
          <td>:</td>
          <td>/var/www/html:/home/data</td>
          </tr>
          <tr>
          <td>Container Name</td>
          <td>:</td>
          <td>John</td>
          </tr>
        </tbody>
      </table>

    </blockquote>
      <form id="container-launch">
        <label htmlFor="image-name" className="label">
          Image Name
        </label>
        <br />
        <input
          type="text"
          id="image-name"
          placeholder="centos/Python/MySQL/..."
          className="container-name-input"
          required
        />
        <br />
        {hide?(<><label htmlFor="option-argument" className="label">
          Options
        </label>
        <br />
        <input
          type="text"
          className="container-input"
          id="option-argument"
          placeholder="-d/-i/-t/-dit"
        />
        <br />
        <label htmlFor="patting" className="label">
          Patting(port)
        </label>
        <br />
        <input
          type="text"
          id="patting"
          
          placeholder="container port:base OS port"
          className="container-input"
        />
        <br />
        <label htmlFor="volume-attach" className="label">
          Volume(Directory Attachment)
        </label>
        <br />
        <input
          type="text"
          id="volume-attach"
          
          placeholder="base OS dir:container dir"
          className="container-input"
        /><br/>
        <label htmlFor="container-name" className="label">
        Container's Name
      </label>
      <br />
      <input
        type="text"
        className="container-input"
        id="container-name"
        placeholder="container1"
      />
        </>):(null)}
        <br />
        <button type="submit" id="launch" className="submit launch">
          Launch
        </button><br/>
        <span id="hidden-field" onClick={handleClick}><em>{text}</em></span>
      </form>
      <img src="/assests/images/naruto.png" alt="uzumarki-naruto" id="naruto" />
    </div>
)
}
export default Service