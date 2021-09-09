import { React, useEffect, useState } from "react";
import { ArrowRight, Box } from "react-bootstrap-icons";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import "../../components_css/core_css/homepage.css";
import { Link } from "react-router-dom";
import Card from "../byproduct/card";
const HomePage = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    document.title = "Docker World";
  }, []);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };
  const data = () => (
    <List>
      <ListItem onClick={toggleDrawer(false)} className={styles.list}>
        <a href="https://docs.docker.com/" target="_blank" rel="noreferrer">
          Getting Started
        </a>
      </ListItem>
      <ListItem onClick={toggleDrawer(false)} className={styles.topics}>
        <a href="https://youtu.be/-LeV_c1zG-s" target="_blank" rel="noreferrer">
          1. Introduction to Docker
        </a>
      </ListItem>
      <ListItem onClick={toggleDrawer(false)} className={styles.topics}>
        <a href="https://youtu.be/tgcvubzBnlY" target="_blank" rel="noreferrer">
          2. Docker Images and own Images
        </a>
      </ListItem>
      <ListItem onClick={toggleDrawer(false)} className={styles.topics}>
        <a href="https://youtu.be/Tx12haz-4VA" target="_blank" rel="noreferrer">
          3. Docker Newtworking
        </a>
      </ListItem>
      <ListItem onClick={toggleDrawer(false)} className={styles.topics}>
        <a href="https://youtu.be/9f1y4ZlFaQk" target="_blank" rel="noreferrer">
          4. Dockerfile
        </a>
      </ListItem>
    </List>
  );
  const useStyles = makeStyles({
    list: { fontSize: "26px", fontWeight: "bolder" },
    topics: {
      fontSize: "19px",
      fontWeight: "bold",
      cursor: "pointer",
      color: "rgb(19, 136, 223)"
    }
  });
  const styles = useStyles();

  return (
    <div id="homepage-layout">
      <h1>
        Welcome To Docker World <Box size={25} />
      </h1>
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
        <label htmlFor="ip-address">
          <b>Your's Machine IP Address</b>
        </label>
        <br />
        <input type="text" id="ip-address" placeholder="127.0.0.1" />
        <button type="submit" id="ip-button">
          <ArrowRight color="#333" size={20} className="btn btn-primary" />
        </button>
      </form>
      <h2>Services Available</h2>
      <div id="service-layout">
        <Link to="/service">
          <Card
            src="/assests/images/container.png"
            alt="container snapshot"
            title="Docker's Container"
            description="To launch Containers"
          />
        </Link>
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
        <a href="/assests/documents/docker-cheat-sheet.pdf" download>
          <Card
            src="/assests/images/book.png"
            alt="Docker cheatsheet"
            title="Docker Cheat Sheet"
            description="PDF related to commands of docker"
          />
        </a>
        <span onClick={toggleDrawer(true)}>
          <Card
            src="/assests/images/rocket.png"
            alt="rocket"
            title="Getting Started"
            description="Blogs and Videos"
          />
        </span>
        <Drawer anchor={"bottom"} open={state} onClose={toggleDrawer(false)}>
          {data()}
        </Drawer>
      </div>
    </div>
  );
};
export default HomePage;
