import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Experimental() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <label for="exampleColorInput" className="mb-2">Color picker</label>
        <input
          type="color"
          className="form-control w-12 h-12 p-1"
          id="exampleColorInput"
          defaultValue="#563d7c"
          title="Choose your color"
        />
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row"><s>.form-control-color</s></th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">w-12 h-12 p-1</code></td>
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
{`<input type="color" class="form-control w-12 h-12 p-1" defaultValue="#563d7c" title="Choose your color" />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
