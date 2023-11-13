import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="card max-w-sm">
          <div className="flex-auto p-4">
            <h5 className="mb-1">Card title</h5>
            <h6 className="mb-2 text-gray-600">Card subtitle</h6>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<div class="card">
  <div class="flex-auto p-4">
    <h5 class="mb-1">Card title</h5>
    <h6 class="mb-2 text-gray-600">Card subtitle</h6>
    <p class="mb-2">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
