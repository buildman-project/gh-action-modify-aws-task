const core = require("@actions/core");
const gh = require("@actions/github");

const baseString = core.getInput("base-string");
const searchedString = core.getInput("searched-word");
const replaceByString = core.getInput("replace-by");

const replaceVariables = (base, search, replace) => {
  return base.split(search).join(replace);
};

const addEnvVariables = () => {
  var taskDefinition = JSON.parse(fs.readFileSync(filename).toString());
  console.log(taskDefinition);
  fs.writeFileSync(filename, JSON.stringify(taskDefinition));
};

core.setOutput(
  "replaced-string",
  replaceVariables(baseString, searchedString, replaceByString)
);
