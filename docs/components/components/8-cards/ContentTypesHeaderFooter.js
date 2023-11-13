import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="card">
          <div className="flex-auto px-4 py-2 border-b border-black border-opacity-10 bg-black bg-opacity-05">
            Featured
          </div>
          <div className="flex-auto p-4">
            <h5 className="mb-2">Card title</h5>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn">Go somewhere</a>
          </div>
          <div className="p-4 border-t border-black border-opacity-10 bg-black bg-opacity-05">
            2 days ago
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
  <div class="flex-auto px-4 py-2 border-b border-black border-opacity-10 bg-black bg-opacity-05">
    Featured
  </div>
  <div class="flex-auto p-4">
    <h5 class="mb-2">Card title</h5>
    <p class="mb-2">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="btn">Go somewhere</a>
  </div>
  <div class="p-4 border-t border-black border-opacity-10 bg-black bg-opacity-05">
    2 days ago
  </div>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
