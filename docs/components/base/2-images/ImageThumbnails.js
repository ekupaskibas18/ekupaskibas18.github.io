import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function ImageThumbnails() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <img
          src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          className="p-1 bg-white border rounded max-w-full h-auto"
          height="200"
          width="200"
          alt="..."
        />
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.img-thumbnail</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">max-w-full h-auto bg-white border rounded p-1</code></td>
            </tr>
          </tbody>
        </table>
      </FeatureBlock.Subsection>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<img src="..." className="max-w-full h-auto bg-white border rounded p-1" alt="..." />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
