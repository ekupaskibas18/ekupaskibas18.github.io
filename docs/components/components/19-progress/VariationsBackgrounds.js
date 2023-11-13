import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar bg-green w-1/4" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar bg-teal w-1/2" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar bg-orange w-3/4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar bg-red w-full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar progress-bar-striped bg-green w-1/4" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar progress-bar-striped bg-teal w-1/2" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar progress-bar-striped bg-orange w-3/4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-red w-full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <div className="progress bg-gray-50 mb-4">
          <div className="progress-bar bg-green w-1/12" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
          <div className="progress-bar bg-teal w-2/12" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          <div className="progress-bar bg-orange w-3/12" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </FeatureBlock.Body>
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
