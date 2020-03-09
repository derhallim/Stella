import React, { SyntheticEvent } from "react";
import { Container } from "semantic-ui-react";
import agent from "../../app/api/agent";

const AprtmentForm = () => {

  const fileUploadHandler = (files: any) => {
    console.log(files[0])
    var reader : FileReader = new FileReader(); 
    
    reader.onload = function(event){
      var contents = event.target?.result
      console.log(contents!.toString())

       agent.Images.create(contents!.toString(), 'test');
    }

    var s = reader.readAsDataURL(files[0])
  }


  return (
    <Container style={{ marginTop: "10em" }}>
      <div>
        <label htmlFor="file" className="ui icon button">
          <i className="file icon"></i>
          Open File
        </label>
        <input type="file" id="file" style={{ display: "none" }} onChange={e => fileUploadHandler(e.target.files)}/>
      </div>
    </Container>
  );
};

export default AprtmentForm;
