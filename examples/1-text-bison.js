const { sendRequest, writeResponseLocally } = require("../utils/google-foundation-models");
const params = {
  apiEndpoint: "us-central1-aiplatform.googleapis.com",
  projectId: "oval-access-389510",
  modelId: "text-bison@001",
  instances: [{ content: "When did the fetch API become natively supported in Node.JS?" }],
  parameters: { temperature: 0.2, maxOutputTokens: 256, topP: 0.8, topK: 40 },
};
sendRequest(params)
  .then((response) => {
    console.log(response);
    writeResponseLocally(params, response);
  })
  .catch((error) => {
    console.error(error);
  });
