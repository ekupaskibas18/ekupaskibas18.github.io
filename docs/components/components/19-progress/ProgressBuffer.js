import { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function ProgressBuffer() {
  useEffect(() => {
    const mprogressBuffer = new Mprogress({
      template: 2,
      parent: '#mprogressBuffer',
    });
    mprogressBuffer.start();

    return () => {
      mprogressBuffer._remove();
    }
  }, []);

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div id="mprogressBuffer"></div>
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
