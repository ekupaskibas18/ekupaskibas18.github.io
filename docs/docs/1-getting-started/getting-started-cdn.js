import CodeBlock from '@theme/CodeBlock';

export default function GettingStartedCdn() {
  return (
    <figure className="border-2 rounded">
      <figcaption className="bg-gray-300 p-2">
        <div className="relative">
          <CodeBlock
            language="markup"
            title="/index.html"
            showLineNumbers
          >
{`<link rel="stylesheet" href="path/to/external-libs.min.css" crossorigin="anonymous" />
<link rel="stylesheet" href="/path/to/avgui.min.css" crossorigin="anonymous" />

<script src="path/to/external-libs.min.js" crossorigin="anonymous"></script>
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
