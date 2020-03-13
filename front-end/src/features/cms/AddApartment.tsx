import React from "react";
import { Container } from "semantic-ui-react";
import agent from "../../app/api/agent";

const AddApartment = () => {
  const fileUploadHandler = (files: any) => {
    console.log(files[0]);
    var reader: FileReader = new FileReader();

    reader.onload = function(event) {
      var contents = event.target?.result;
      console.log(contents!.toString());
      contents = contents!.toString();
      agent.Images.create(
        contents.substring(contents.indexOf(",") + 1),
        "test"
      );
    };

    var s = reader.readAsDataURL(files[0]);
  };

  return (
    <Container style={{ marginTop: "10em" }}>
      <form className="ui form">
        <div className="description">
          <label>Description</label>
          <input placeholder="Apartment Description" />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input
              type="checkbox"
              className="hidden"
            />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button type="submit" className="ui button">
          Submit
        </button>
      </form>
      <div>
        <label htmlFor="file" className="ui icon button">
          <i className="file icon"></i>
          Open File
        </label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={e => fileUploadHandler(e.target.files)}
        />
      </div>
    </Container>
  );
};

export default AddApartment;
