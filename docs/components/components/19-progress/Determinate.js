import React, { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Determinate() {
  useEffect(() => {
    const mprogressDeterminate = new Mprogress({
      parent: '#mprogressDeterminate',
    });

    mprogressDeterminate.start();

    return () => {
      mprogressDeterminate._remove();
    }
  }, []);

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div id="mprogressDeterminate"></div>
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
