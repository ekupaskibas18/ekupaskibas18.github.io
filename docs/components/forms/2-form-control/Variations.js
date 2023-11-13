import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Experimental() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="flex flex-wrap -mx-4">
          <div className="flex-1 md:w-full px-4">
            <div className="mb-4">
              <input type="text" className="form-control form-control-lg" placeholder=".form-control-lg" />
            </div>

            <div className="mb-4">
              <input type="text" className="form-control" placeholder="Default input" />
            </div>

            <div className="mb-4">
              <input type="text" className="form-control form-control-sm" placeholder=".form-control-sm" />
            </div>
          </div>

          <div className="flex-1 md:w-full px-4">
            <div className="form-control-outlined mb-4">
              <input type="text"
                className="form-control form-control-lg"
                defaultValue="Large input"
                placeholder=".form-control-lg"
              />
              <label className="form-label" htmlFor="inputEmail">Large input</label>
            </div>

            <div className="form-control-outlined mb-4">
              <input type="text"
                className="form-control"
                placeholder="Default input"
                defaultValue="Default input"
              />
              <label className="form-label" htmlFor="inputEmail">Default input</label>
            </div>

            <div className="form-control-outlined mb-4">
              <input type="text"
                className="form-control form-control-sm"
                defaultValue="Small input"
                placeholder=".form-control-sm"
              />
              <label className="form-label" htmlFor="inputEmail">Small input</label>
            </div>
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
{`
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
