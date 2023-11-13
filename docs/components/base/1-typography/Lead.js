import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Lead() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <p className="text-xl font-light">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus.
        </p>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.lead</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-xl font-light</code></td>
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
{`<p class="text-xl font-light">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  Duis mollis, est non commodo luctus.
</p>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
