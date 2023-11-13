import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button className="btn rounded-full mr-3" type="button">Default</button>
        <button className="btn btn-outline rounded-full mr-3" type="button">Default</button>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<button type="button" class="btn rounded-full">Pill button</button>
<button type="button" class="btn btn-outline rounded-full">Pill button</button>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
