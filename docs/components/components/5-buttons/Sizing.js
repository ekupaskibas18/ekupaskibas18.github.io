import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button type="button" className="btn btn-lg">Large button</button>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <button type="button" className="btn btn-sm">Small button</button>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.btn-lg</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">py-2 px-4 text-xl rounded-md</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.btn-sm</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">py-1 px-2 text-sm rounded-sm</code>
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
{`<button type="button" class="btn btn-lg">Large button</button>
<button type="button" class="btn btn-sm">Small button</button>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
