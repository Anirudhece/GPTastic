import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./levelTwo.scss";

export default function Content(props) {
  const [prompt, setPrompt] = useState("");
  return (
    <div className="content">
      <div>
        <textarea
          name="enter query"
          cols="30"
          rows="10"
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          value={prompt}
        ></textarea>
      </div>
      <div>
        <Button
          className="content--btn"
          size="small"
          component="label"
          color="success"
          variant="contained"
          onClick={() => {
            props.getPrompt(prompt);
          }}
        >
          result
        </Button>
        <Button
          className="content--btn"
          size="small"
          component="label"
          style={{ backgroundColor: "#e71f1f" }}
          variant="contained"
          onClick={() => {
            props.conditionalRenderingCheckFromProps(0);
          }}
        >
          go back
        </Button>
      </div>
      <br />
      <div className="content-result">
        <div>{props.result}</div>
      </div>
    </div>
  );
}
