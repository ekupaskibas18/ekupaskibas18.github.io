import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Vertical() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="btn-group-vertical" role="group" aria-label="Basic example">
          <button type="button" className="btn">First</button>
          <button type="button" className="btn">Second</button>
          <button type="button" className="btn">Third</button>
          <button type="button" className="btn">Fourth</button>
          <button type="button" className="btn">Fifth</button>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <div className="btn-group-vertical" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline">First</button>
          <button type="button" className="btn btn-outline">Second</button>
          <button type="button" className="btn btn-outline">Third</button>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.btn-group-vertical</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">inline-flex flex-col items-start justify-center align-middle relative</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.btn-group-vertical {'>'} .btn</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex-auto w-full</code>
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
{`<div class="btn-group-vertical" role="group" aria-label="Basic example">
  <button type="button" class="btn">First</button>
  <button type="button" class="btn">Second</button>
  <button type="button" class="btn">Third</button>
  <button type="button" class="btn">Fourth</button>
  <button type="button" class="btn">Fifth</button>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
