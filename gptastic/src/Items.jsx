const Choices = [
  {
    name: "Question 🤔 and answer  🙋 ",
    // icon: <RiQuestionAnswerFill />,
    id: "q&a",
    description: "answer question based on existing knowledge",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
      // stop: ["\n"]  iss wale ko remove kara
    }
  },
  {
    name: "Grammar correction 📝 ",
    // icon: <SiGrammarly />,
    id: "grammarCorrection",
    description: "corrects sentences into standard english",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
  },
  {
    name: "Summarize for a 2nd grader 👶 ",
    // icon: <MdSummarize />,
    id: "summarizer",
    description: "Summarize this for a second-grade student",
    option: {
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
  },
  {
    name: "Natural language 💬 to OpenAI API 🤖 ",
    // icon: <TbLanguage />,
    id: "naturalLanguageToApi",
    description:
      "Create code to call to the OpenAI API using a natural language instruction.",
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
      // stop: ['"""']
    }
  },
  {
    name: "JavaScript helper chatbot 💻 ",
    // icon: <TbBrandJavascript />,
    id: "javascriptHelper",
    description:
      "This is a message-style chatbot that can answer questions about using JavaScript. It uses a few examples to get the conversation started.",
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0
      // stop: ["You:"]
    }
  }
];
export default Choices;
