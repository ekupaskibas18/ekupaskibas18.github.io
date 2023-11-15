import CodeBlock from '@theme/CodeBlock';

export default function BoilerplateTemplate() {
  return (
    <figure className="border-2 rounded">
      <figcaption className="bg-gray-300 p-2">
        <div className="relative">
          <CodeBlock
            language="markup"
            title="/index.html"
            showLineNumbers
          >
{`<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="manifest" href="/manifest.json" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700&family=Roboto&family=Roboto+Mono&family=Cookie&display=swap"
    />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.0/css/all.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.0/css/v4-shims.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/css/flag-icon.min.css" />
    <link rel="stylesheet" href="/path/to/avgui.min.css" />
    <link rel="stylesheet" href="/path/to/overrides.css">
    <title>Boilerplate Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <script src="/path/to/avgui.min.js"></script>
  </body>
</html>
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
