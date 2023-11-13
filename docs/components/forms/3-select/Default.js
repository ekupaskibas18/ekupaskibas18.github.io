import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Default() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.form-select</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">block w-full appearance-none  py-2 pl-3 pr-8 leading-tight border rounded bg-white bg-no-repeat</code></td>
            </tr>
          </tbody>
        </table>
      </FeatureBlock.Subsection>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
