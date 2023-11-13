import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <h1>Example heading <span className="badge">New</span></h1>
        <h2>Example heading <span className="badge bg-red">New</span></h2>
        <h3>Example heading <span className="badge bg-blue">New</span></h3>
        <h4>Example heading <span className="badge bg-green">New</span></h4>
        <h5>Example heading <span className="badge bg-yellow">New</span></h5>
        <h6>Example heading <span className="badge bg-black">New</span></h6>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.badge</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">inline-block py-1 px-2 text-xs font-bold leading-none text-center whitespace-nowrap align-baseline rounded text-white</code>
              </td>
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
{`<span class="badge">Badge</span>
<span class="badge bg-red">Badge</span>
<span class="badge bg-blue">Badge</span>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
