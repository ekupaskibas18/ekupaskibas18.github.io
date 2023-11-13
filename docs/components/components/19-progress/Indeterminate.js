import React, { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Indeterminate() {
  useEffect(() => {
    const mprogressIndeterminate = new Mprogress({
      template: 3,
      parent: '#mprogressIndeterminate',
    });
    mprogressIndeterminate.start();

    return () => {
      mprogressIndeterminate._remove();
    }
  }, []);

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div id="mprogressIndeterminate"></div>
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
