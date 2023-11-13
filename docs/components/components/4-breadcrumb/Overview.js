import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <nav aria-label="flex flex-wrap py-2 px-4 list-none">
          <ol className="flex flex-wrap py-2 px-4 list-none bg-gray-50 rounded">
            <li className="flex"><a href="#">Home</a></li>
            <li className="flex pl-2"><a href="#">Library</a></li>
            <li className="flex pl-2 active" aria-current="page">Data</li>
          </ol>
        </nav>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row"><s>.breadcrumb</s></th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex flex-wrap py-2 px-4 list-none</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row"><s>.breadcrumb-item</s></th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex</code>
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
{`<nav aria-label="flex flex-wrap py-2 px-4 list-none">
  <ol class="flex flex-wrap py-2 px-4 list-none bg-gray-50 rounded">
    <li class="flex"><a href="#">Home</a></li>
    <li class="flex pl-2"><a href="#">Library</a></li>
    <li class="flex pl-2 active" aria-current="page">Data</li>
  </ol>
</nav>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
