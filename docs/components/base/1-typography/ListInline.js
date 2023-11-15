import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function ListInline() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <ul>
          <li className="inline-block mr-2">Lorem ipsum</li>
          <li className="inline-block mr-2">Phasellus iaculis</li>
          <li className="inline-block">Nulla volutpat</li>
        </ul>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.list-inline</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">list-none pl-0</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.list-inline-item</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">inline-block mr-2</code></td>
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
{`<ul>
  <li className="inline-block mr-2">Lorem ipsum</li>
  <li className="inline-block mr-2">Phasellus iaculis</li>
  <li className="inline-block">Nulla volutpat</li>
</ul>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
