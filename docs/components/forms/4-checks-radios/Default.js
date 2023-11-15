import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Default() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="mb-3">
          <input className="form-check mr-2" type="checkbox" value="" id="flexCheckDefault" />
          <label for="flexCheckDefault">
            Default checkbox
          </label>
        </div>

        <div className="mb-3">
          <input className="form-check mr-2" type="checkbox" value="" id="flexCheckChecked" checked />
          <label for="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.form-check</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">appearance-none bg-white border border-black border-opacity-25  h-5 w-5 align-middle text-blue focus:border-current focus:outline-none focus:ring focus:ring-opacity-50</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.form-check[type=checkbox]</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">rounded</code></td>
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
{`<input type="checkbox" class="form-check" name="..." value="" id="..." />
<input type="checkbox" class="form-check" name="..." value="" id="..." checked />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
