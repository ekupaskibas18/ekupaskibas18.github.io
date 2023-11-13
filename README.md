# randelltuazon

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


## Installation
```
@import 'avgui/plugins/styles/index.css';
```

## Safelisted classes

Add these classes to your safelist options:

```
bs-popover-top
bs-popover-end
bs-popover-bottom
bs-popover-start
bs-popover-auto

bs-tooltip-top
bs-tooltip-end
bs-tooltip-bottom
bs-tooltip-start
bs-tooltip-auto

collapsing

modal-backdrop
modal-open
modal-scrollbar-measure
```

### Docs Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
