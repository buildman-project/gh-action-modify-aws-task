const addEnvVariables = () => {
  var taskDefinition = JSON.parse(fs.readFileSync(filename).toString());
  console.log(taskDefinition);
  fs.writeFileSync(filename, JSON.stringify(taskDefinition));
};
