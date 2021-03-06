import React, { useState } from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import avatar from "assets/img/faces/marc.jpg";
import { array } from "prop-types";

const useStyles = makeStyles(styles);

export default function Dashboard() {

  const [items, setItems] = useState(Array.from({ length: 10 }));
  const classes = useStyles();
  
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
 

    
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
      
    }, 4000);
  };



  const style = {
    
    margin: 6,
    padding: 8,
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={{ width: "20rem" }}>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Hamirul Hafizal</p>
              <h3 className={classes.cardTitle}>
                RM1,000<small>/g</small>
              </h3>
            </CardHeader>
            <img
              className={classes.cardImgTop}
              data-src="holder.js/100px180/"
              alt="100%x180"
              style={{ height: "300px", width: "100%", display: "block" }}
              src={avatar}
              data-holder-rendered="true"
            />
            <CardBody>
              <h4>Card title</h4>
              <p>test test test </p>
              <Button color="primary">Go somewhere</Button>
            </CardBody>
            <center>
              <CardFooter stats>
                <div className={classes.stats}>Go somewhere</div>
              </CardFooter>
            </center>
          </Card>
          {console.log({ items })}
          
          <InfiniteScroll
          
            dataLength={items.length}
            next={fetchMoreData()}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {items.map((i, index) => (


              <div key={index}>
              {/* <div style={style} key={index}> */}
                div - #{index}

                <Card style={{ width: "20rem" }}>
                  <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                      <Icon>info_outline</Icon>
                    </CardIcon>
                      <p className={classes.cardCategory}>Hamirul Hafizal</p>
                      <h3 className={classes.cardTitle}>
                        RM1,000<small>/g</small>
                      </h3>
                  </CardHeader>
                    <img
                      className={classes.cardImgTop}
                      data-src="holder.js/100px180/"
                      alt="100%x180"
                      style={{ height: "300px", width: "100%", objectFit: "contain", display: "block" }}
                      src={avatar}
                      data-holder-rendered="true"
                    />
                  <CardBody>
                    <h4>Card title</h4>
                    <p>test test test </p>
                    <Button color="primary">Go somewhere</Button>
                  </CardBody>
                  <CardFooter stats>
                <div className={classes.stats}>Go somewhere</div>
              </CardFooter>
              </Card>
            
              </div>
            ))}
          </InfiniteScroll>
         
        </GridItem>
      </GridContainer>
      
</div>

);}