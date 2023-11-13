import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Borderless() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button className="btn border-transparent mr-3" type="button">Borderless button</button>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<button class="btn border-transparent" type="button">Borderless button</button>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
