import CodeBlock from '@theme/CodeBlock';

export default function GettingStartedImport() {
  return (
    <figure className="border-2 rounded">
      <figcaption className="bg-gray-300 p-2">
        <div className="relative">
          <CodeBlock
            language="css"
            title="/global.css"
            showLineNumbers
          >
{`@import './path/to/avgui.css'
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
