import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function VariationsOutline() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button className="btn btn-outline mr-3" type="button">Outline button</button>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.btn-outline</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">bg-transparent border-gray-400</code>
              </td>
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
{`<button class="btn btn-outline" type="button">Outline button</button>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
