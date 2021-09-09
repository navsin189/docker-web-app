import {React,useEffect} from "react";
import { ArrowRight,Box } from "react-bootstrap-icons";
// import Container from "/public/assests/images/container.png";
import "../../components_css/core_css/homepage.css";
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Card from "../byproduct/card";
const HomePage = () => {
  useEffect(()=>{
    document.title='Docker World'
  },[])
  const useStyles = makeStyles({
    list:{color:"white",textDecoration:"none"}
  });
  const styles = useStyles();

  return (
    <div id="homepage-layout">
      <h1>Welcome To Docker World <Box size={25}/></h1>
      <h2>Place Where Magic Happens!</h2>
      <blockquote>
        <em>
          Docker is an open platform for developing, shipping, and running
          applications. Docker enables you to separate your applications from
          your infrastructure so you can deliver software quickly. With Docker,
          you can manage your infrastructure in the same ways you manage your
          applications. By taking advantage of Docker’s methodologies for
          shipping, testing, and deploying code quickly, you can significantly
          reduce the delay between writing code and running it in production.
        </em>
      </blockquote>
      <form id="client-ip">
        <label htmlFor="ip-address"><b>Your's Machine IP Address</b></label><br/>
        <input type="text" id="ip-address" placeholder="127.0.0.1" />
        <button type="submit" id="ip-button">
          <ArrowRight color="#333" size={20} className="btn btn-primary" />
        </button>
      </form>
      <h2>Services Available</h2>
      <div id="service-layout">
        <Link to="/service" className={styles.list}>
        <Card
          src="/assests/images/container.png"
          alt="container snapshot"
          title="Docker's Container"
          description="To launch Containers"
        /></Link>
        <Card
          src="/assests/images/docker.gif"
          alt="Your Docker Images"
          title="Docker Images"
          description="Check your docker images"
        />
        <Card
          src="/assests/images/container.png"
          alt="Network Images"
          title="Network"
          description="To Create Network"
        />
        <Card
          src="/assests/images/docker.gif"
          alt="Running containers"
          title="Running Container"
          description="To check the running containers"
        />
      </div>
    </div>
  );
};
export default HomePage;
