import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import frozenlake from "../assets/photos/frozenlake2.jpg";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Card>
        <CardImg />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Here I am standing on a frozen lake in Ohio
          </CardSubtitle>
          <CardTitle tag="h5">Golden Hour Wedding Scheduler</CardTitle>

          <CardText>
            Thanks for checking out my portfolio! As you can tell, I am new to
            web development, but I am eager to learn as much as I can while
            enrolled in the UCSD Coding Bootcamp.
            <p>
              I graduated from SDSU with a degree in journalism. I have been
              working as a paralegal for the past eight years. I have been
              anxious for a career switch for several years. I am glad I finally
              took a leap of faith and enrolled in this program.
            </p>
            Lately, my life has revolved around coding. When I had free time, I
            would spend it in the woodshop - another skill I picked up in the
            past few years. On long weekends I like to go camping. And if I
            receive a Google alert for a cheap flight to a city on my must-see
            list, I don't hesitate to book the ticket.
            <p>
              I would love to connect with other web developers! Find me on{" "}
              <a href="https://github.com/erikacueva" target="_blank">
                Github
              </a>{" "}
              or
              <a
                href="https://www.linkedin.com/in/erika-cueva/"
                target="_blank"
              >
                {" "}
                LinkedIn
              </a>
              .
            </p>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            
          </CardSubtitle>
          <CardTitle tag="h5">Planner for Wedding Planners</CardTitle>

          <CardText>
         
            <p>
            Planning a big event such as a wedding requires the coordination of vendors and guests. A wedding planner managing multiple events will benefit from having access to a database that contains all of the important information for every event they are managing.
            </p>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
   
          </CardSubtitle>
          <CardTitle tag="h5">FreshFridge</CardTitle>

          <CardText>
            <p>FreshFridge is a MERN application that aims to help alleviate food
            waste at the individual level.</p>
            <p>
              Food waste is a serious problem in the United States. According to
              the Food and Drug Administration, around 30-40 percent of the food
              supply is discarded. FreshFridge aims to help mitigate that waste
              by offering users the ability to minimize their personal food
              waste. A shopping list generates a digital "refrigerator" that
              lists the expiration date of each item that has been crossed off
              the user's shopping list. A user may log into the FreshFridge app
              and enter items into their shopping list. Once the item is checked
              off the list, their "refrigerator" will display the expiration
              date for each item.
            </p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
