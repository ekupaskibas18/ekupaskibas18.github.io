import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Colors() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button className="btn bg-blue hover:bg-blue-700 focus:bg-blue-700 text-white mr-2" type="button">Blue</button>
        <button className="btn bg-red hover:bg-red-700 focus:bg-red-700 text-white mr-2" type="button">Red</button>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<button type="button" class="btn text-white bg-blue hover:bg-blue-700 focus:bg-blue-700">Blue</button>
<button type="button" class="btn text-white bg-red hover:bg-red-700 focus:bg-red-700">Red</button>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
