import React, { useEffect, useState } from "react";
import Choices from "../Items.jsx";
import Cards from "./levelTwo/Card.jsx";
import Content from "./levelTwo/Content.jsx";
import { Configuration, OpenAIApi } from "openai";

// ********************************

export default function Main() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [promptValue, setPromptValue] = useState("");
  const [result, setRestult] = useState("");
  const [conditionalRenderingCheck, setConditionalRenderingCheck] = useState(0);

  function handleConditionalRenderingCheck(value) {
    setConditionalRenderingCheck(value);
    // here im erasing the existing content in result and option
  }

  function selectOption(option) {
    setOption(option);
  }

  function handlePrompt(prompt) {
    setPromptValue(prompt);
  }

  useEffect(() => {
    promptValue && executeOnClick(promptValue);
  }, [promptValue]);

  async function executeOnClick(val) {
    let object = { ...option, prompt: val };
    console.log(object);
    if (object.prompt) {
      const response = await openai.createCompletion(object);
      console.log(response);
      console.log(response.data.choices[0].text);
      setRestult(response.data.choices[0].text);
    } else {
      alert("khali prompt mt pass kr");
    }
  }

  console.log(option.size); //ssduzsfcyhsd

  return (
    <>
      {conditionalRenderingCheck === 0 ? (
        Choices.map((element) => (
          <Cards
            selectOption={selectOption}
            name={element.name}
            key={element.id}
            icon={element.icon}
            description={element.description}
            option={element.option}
            conditionalRenderingCheckFromProps={handleConditionalRenderingCheck}
          />
        ))
      ) : (
        <Content
          executeOnClick={executeOnClick}
          getPrompt={handlePrompt}
          result={result}
          conditionalRenderingCheckFromProps={handleConditionalRenderingCheck}
        />
      )}
    </>
  );
}
