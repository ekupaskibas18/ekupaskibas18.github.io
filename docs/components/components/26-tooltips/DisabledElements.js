import { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    return () => {
      // Do proper cleanup on unmount
      tooltipList.forEach(element => {
        element.dispose();
      });
    };
  }, []);

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
          <button className="btn btn-primary pointer-events-none" type="button" disabled>Disabled button</button>
        </span>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
  <button class="btn btn-primary pointer-events-none" type="button" disabled>Disabled button</button>
</span>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
