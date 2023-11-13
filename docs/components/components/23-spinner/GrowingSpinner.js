import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="spinner-grow text-blue mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-gray mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-green mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-red mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-orange mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-teal mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-light mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <div className="spinner-grow spinner-grow-sm text-blue mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-gray mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-green mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-red mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-orange mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-teal mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-light mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-dark mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.spinner-grow</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">inline-block w-8 h-8 align-text-bottom rounded-full opacity-0 bg-current</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.spinner-grow-sm</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">w-4 h-4</code>
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
{`<div class="spinner-grow text-blue mr-2" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm text-blue mr-2" role="status">
  <span class="sr-only">Loading...</span>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
