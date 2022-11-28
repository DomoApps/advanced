# DomoApps Advanced App Platform Template

This is the template for creating an app based on [Create React App](https://github.com/facebook/create-react-app) with our own additions, base files, and generators.

To use this template, run the following command:
```sh
yarn create react-app my-app --template git+ssh://git@github.com/DomoApps/advanced.git
```

For more information, please refer to:

- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.


## onDataUpdate

By default, the generated app will subscribe to the `onDataUpdate` event on the parent iframe. This notifies the App Platform that this app should not be forced to reload automatically when one or more of its connected datasets change.

If your app needs the auto-reload, you can remove the `onDataUpdate` block of code - or make changes accordingly.

For reference: [Handling Data Updates](https://developer.domo.com/docs/dev-studio-guides/handling-data-updates)