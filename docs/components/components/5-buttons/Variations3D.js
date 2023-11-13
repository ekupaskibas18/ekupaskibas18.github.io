import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button
          type="button"
          className="btn border-b-4 border-blue-gray-200 hover:border-blue-gray-300 focus:border-blue-gray-300 mr-3"
        >
          3D button
        </button>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<button type="button" class="btn border-b-4 border-blue-gray-200 hover:border-blue-gray-300 focus:border-blue-gray-300">
  3D button
</button>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
