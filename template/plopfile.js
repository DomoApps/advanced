module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
      {
        // Raw text input
        type: 'confirm',
        // Variable name for this input
        name: 'test',
        // Prompt to display on command line
        message: 'Would you like to include a test file for this component?',
      },
      {
        // Raw text input
        type: 'confirm',
        // Variable name for this input
        name: 'storybook',
        // Prompt to display on command line
        message:
          'Would you like to include a storybook file for this component?',
      },
    ],
    actions: (input) => [
      ...[
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: 'src/components/{{name}}/index.tsx',
          // Handlebars template used to generate content of new file
          templateFile: 'templates/component.tsx.hbs',
        },
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: 'src/components/{{name}}/index.module.scss',
          // Handlebars template used to generate content of new file
          templateFile: 'templates/stylesheet.scss.hbs',
        },
      ],
      ...(!input.test
        ? []
        : [
            {
              // Add a new file
              type: 'add',
              // Path for the new file
              path: 'src/components/{{name}}/index.spec.tsx',
              // Handlebars template used to generate content of new file
              templateFile: 'templates/test.tsx.hbs',
            },
          ]),
      ...(!input.storybook
        ? []
        : [
            {
              // Add a new file
              type: 'add',
              // Path for the new file
              path: 'src/components/{{name}}/index.stories.tsx',
              // Handlebars template used to generate content of new file
              templateFile: 'templates/storybook.tsx.hbs',
            },
          ]),
    ],
  });

  plop.setGenerator('reducer', {
    description: 'Create a reducer',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What would you like to call your reducer?',
      },
    ],
    actions: () => [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/reducers/{{name}}/index.ts',
        // Handlebars template used to generate content of new file
        templateFile: 'templates/reducer.ts.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/actions/{{name}}/index.ts',
        // Handlebars template used to generate content of new file
        templateFile: 'templates/actions.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/reducers/index.ts',
        pattern: /\/\/\ importRef/,
        templateFile: 'templates/reducerImport.hbs',
      },
      {
        type: 'modify',
        path: 'src/reducers/index.ts',
        pattern: /\/\/\ reducerRef/,
        templateFile: 'templates/reducerWiring.hbs',
      },
    ],
  });
};
