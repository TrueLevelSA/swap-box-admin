---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We modified react-scripts/template with our custom setup.
The `package.json` is directly copied from the template so you may need to update the dependencies versions.
To use this template run:

```
 npx create-react-app <project_name> --scripts-version vilsbole-react-scripts
```

After creation make sure to run `yarn` again to install the dependencies.

---

# SwapBox DApp

This project is to provide a dweb app to provide UI for admin functions of https://gitlab.com/atola/smart-contract and is intended to be published to IPFS and discoverable via ENS.

Use web3x and typescript in general to keep things clean ;)

## Getting started

Clone the repo, install dependencies and launch the dev server.

```sh
yarn install
yarn start
```

## Development

## Contract API

View functions:

- ethBalanceAmount
- tokenBalanceAmount

External functions:

- transferOwnership
- modifyBtm
- addToken
- withdrawEth
- withdrawBaseTokens
