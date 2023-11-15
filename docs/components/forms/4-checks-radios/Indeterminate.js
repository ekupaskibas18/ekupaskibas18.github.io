import { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Indeterminate() {
  useEffect(() => {
    var checkbox = document.getElementById('flexCheckIndeterminate');
    checkbox.indeterminate = true;

    return () => {
      // Do proper cleanup on unmount
    };
  }, []);

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="mb-3">
          <input className="form-check mr-2" type="checkbox" value="" id="flexCheckIndeterminate" />
          <label for="flexCheckIndeterminate">
            Indeterminate checkbox
          </label>
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
