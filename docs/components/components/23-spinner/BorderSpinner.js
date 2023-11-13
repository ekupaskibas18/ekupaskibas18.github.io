import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="spinner-border text-blue mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-gray mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-green mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-red mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-orange mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-teal mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-light mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-dark mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <div className="spinner-border spinner-border-sm text-blue mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border spinner-border-sm text-gray mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border spinner-border-sm text-green mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border spinner-border-sm text-red mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border spinner-border-sm text-orange mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border spinner-border-sm text-teal mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border spinner-border-sm text-light mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border spinner-border-sm text-dark mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.spinner-border</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">inline-block w-8 h-8 align-text-bottom rounded-full animate-spin border-4 border-current</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.spinner-border-sm</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">w-4 h-4 border-2</code>
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
{`<div class="spinner-border text-blue mr-2" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-border spinner-border-sm text-blue mr-2" role="status">
  <span class="sr-only">Loading...</span>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
