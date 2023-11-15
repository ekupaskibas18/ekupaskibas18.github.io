import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Sizing() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
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
              <th className="whitespace-nowrap" scope="row">.form-select-lg</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">py-3 pl-4 text-xl rounded-md</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.form-select-sm</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">py-1 pl-2 text-sm rounded-sm</code></td>
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
{`<select class="form-select form-select-lg" aria-label=".form-select-lg example">
  ...
</select>
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  ...
</select>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
