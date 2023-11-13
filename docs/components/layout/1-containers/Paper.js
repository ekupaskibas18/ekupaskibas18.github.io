import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function Paper() {
  return (
    <figure className="border-2 rounded">
      <blockquote className="p-4 py-8">
        <div className="border border-black border-opacity-05 shadow-xl rounded p-4">
          <p>This is a paper.</p>
        </div>
      </blockquote>
      <figcaption className="bg-gray-300 p-4">
        <div className="relative">
          <CodeBlock
            className="!mb-0"
            language="markup"
            title=""
            showLineNumbers
          >
{`<div class="border border-black border-opacity-05 shadow-xl rounded">
  ...
</div>
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
