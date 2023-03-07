import * as React from "react";
import Button from "@mui/material/Button";
import "./levelTwo.scss";
export default function OutlinedCard(props) {
  return (
    <div className="OutlinedCardParent">
      <div className="OutlinedCard">
        <div className="OutlinedCard-name">{props.name}</div>
        <br />
        <div className="OutlinedCard-description">{props.description}</div>
        <br />
        <div>
          <Button
            size="small"
            component="label"
            variant="contained"
            onClick={() => {
              props.selectOption(props.option);
              props.conditionalRenderingCheckFromProps(1);
            }}
          >
            execute
          </Button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
