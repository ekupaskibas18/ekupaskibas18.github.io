import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button type="button" className="btn btn-lg w-full mb-4">Block level button</button>
        <button type="button" className="btn w-full mb-4">Block level button</button>
        <button type="button" className="btn btn-sm w-full mb-4">Block level button</button>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row"><s>.btn-block</s></th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">w-full</code>
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
{`<button type="button" class="btn w-full">Block level button</button>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
