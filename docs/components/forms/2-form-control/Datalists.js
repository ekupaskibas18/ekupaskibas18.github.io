import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Experimental() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <label for="exampleDataList" className="inline-block mb-2">Datalist example</label>
        <input
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
          <option value="San Francisco" />
          <option value="New York" />
          <option value="Seattle" />
          <option value="Los Angeles" />
          <option value="Chicago" />
        </datalist>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<label for="exampleDataList" class="inline-block mb-2">Datalist example</label>
<input id="exampleDataList" class="form-control" placeholder="Type to search..." list="datalistOptions" />
<datalist id="datalistOptions">
  <option value="San Francisco" />
  <option value="New York" />
  <option value="Seattle" />
  <option value="Los Angeles" />
  <option value="Chicago" />
</datalist>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
