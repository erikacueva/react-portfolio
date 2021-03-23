import React from "react";
import { Button, Form, FormGroup } from 'reactstrap';

export default function Contact() {
  return (
    <div className="container contact mt-5">
      <div className="row">
        <div className="col-md-10">
          <h1>Let's Connect!</h1>
          <FormGroup>
            <div className="form-group">
              <label className="control-label col-sm-2" for="fname">
                What's your name?
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Name"
                  name="fname"
                ></input>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="fname">
                Email?
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="fname"
                ></input>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="comment">
                Comments?
              </label>
              <div className="col-md-10">
              <textarea className="form-control" rows="5" id="comment"></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-10">
              <Button type="submit" className="btn btn-default" color="info">Submit</Button>
              </div>
            </div>
         
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
