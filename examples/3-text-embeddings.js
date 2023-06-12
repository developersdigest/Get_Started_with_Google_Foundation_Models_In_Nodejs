const { sendRequest, writeResponseLocally } = require("../utils/google-foundation-models");
const params = {
  apiEndpoint: "us-central1-aiplatform.googleapis.com",
  projectId: "youtube-demo-389619",
  modelId: "textembedding-gecko@001",
  instances: [{ content: "Hello World" }],
};
sendRequest(params)
  .then((response) => {
    console.log(response);
    writeResponseLocally(params, response);
  })
  .catch((error) => {
    console.error(error);
  });
