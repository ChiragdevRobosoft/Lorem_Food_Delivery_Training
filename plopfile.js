const { readdirSync } = require("fs");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      return { name: dirent.name, value: dirent.name };
    });

module.exports = (plop) => {
  let directories = getDirectories("src/components");
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "confirm",
        name: "isCommon",
        message: "Is it common component?",
      },
      {
        when: function (response) {
          return response.isCommon === false;
        },
        type: "confirm",
        name: "isSubComponent",
        message: "Is it sub component?",
      },
      {
        when: function (response) {
          return response.isSubComponent === true;
        },
        type: "list",
        name: "container",
        message: "Choose main component?",
        choices: directories,
      },
    ],
    actions: (data) => {
      const path = data.isCommon
        ? "src/components/common/"
        : data.isSubComponent
        ? "src/components/" + data.container + "/"
        : "src/components/";

      let actions = data.isCommon
        ? [
            {
              type: "add",
              path: path + "{{pascalCase name}}/index.tsx",
              templateFile: "plop-templates/Component/index.tsx.hbs",
            },
            {
              type: "add",
              path:
                path + "{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
              templateFile: "plop-templates/Component/stories.tsx.hbs",
            },
          ]
        : [
            {
              type: "add",
              path: path + "{{pascalCase name}}/index.tsx",
              templateFile: "plop-templates/Component/index.tsx.hbs",
            },
          ];
      return actions;
    },
  });
};
