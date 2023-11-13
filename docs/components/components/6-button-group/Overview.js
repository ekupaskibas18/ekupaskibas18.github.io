import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn">Left</button>
          <button type="button" className="btn">Middle</button>
          <button type="button" className="btn">Right</button>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline">Left</button>
          <button type="button" className="btn btn-outline">Middle</button>
          <button type="button" className="btn btn-outline">Right</button>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.btn-group</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">inline-flex align-middle relative</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.btn-group {'>'} .btn</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex-auto</code>
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
{`<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn">Left</button>
  <button type="button" class="btn">Middle</button>
  <button type="button" class="btn">Right</button>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
