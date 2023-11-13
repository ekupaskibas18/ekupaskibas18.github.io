import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="progress bg-gray-50 h-px mb-4">
          <div className="progress-bar w-1/4" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar w-1/4" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar w-1/2" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar w-3/4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar w-full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.progress</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex h-4 overflow-hidden text-xs rounded</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.progress-bar</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex flex-col justify-center overflow-hidden text-white text-center whitespace-nowrap bg-blue transition-width duration-300 ease-in-out</code>
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
{`
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
