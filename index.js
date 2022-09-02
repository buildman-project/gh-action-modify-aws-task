const core = require("@actions/core");

const taskDefinitionContent = core.getInput("task-definition-content");
const envVariables = core.getInput("env-variables");

const addEnvVariables = (taskDefinitionStr, envString) => {
  const envLines = envString.split(/\r?\n/);
  const envArray = envLines.map((line) => {
    let [name, value] = line
      .split("=")
      .map((s) => s.trim().replace(/^"|"$/g, "").replace(/^'|'$/g, ""));

    return {
      name,
      value,
    };
  });
  const taskDefinition = JSON.parse(taskDefinitionStr);
  const taskEnvArr = taskDefinition.containerDefinitions[0].environment;
  taskDefinition.containerDefinitions[0].environment = [
    ...taskEnvArr,
    envArray,
  ];

  return JSON.stringify(taskDefinition);
};

core.setOutput(
  "final-str",
  addEnvVariables(taskDefinitionContent, envVariables)
);
