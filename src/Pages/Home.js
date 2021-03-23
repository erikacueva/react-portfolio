import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import frozenlake from 'assets/photos/frozenlake.jpg';


export default function Home() {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={frozenlake}
          alt="me standing on a frozen lake"
        />
        <CardBody>
          <CardTitle tag="h5">Hi, I'm Erika!</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Here I am standing on a frozen lake in Ohio
          </CardSubtitle>
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
    </div>
  );
}
