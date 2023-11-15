import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Experimental() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="flex flex-wrap -mx-4">
          <div className="flex-1 md:w-full px-4">
            <input
              className="form-control form-control-lg mb-4"
              type="text"
              placeholder=".form-control-lg"
              aria-label=".form-control-lg example"
            />

            <input
              className="form-control mb-4"
              type="text"
              placeholder="Default input"
              aria-label="deafult input example"
            />

            <input
              className="form-control form-control-sm mb-4"
              type="text"
              placeholder=".form-control-sm"
              aria-label=".form-control-sm example"
            />
          </div>

          <div className="flex-1 md:w-full px-4">
            <input
              className="form-control form-control-line form-control-lg mb-4"
              type="text"
              placeholder=".form-control-lg"
              aria-label=".form-control-lg example"
            />

            <input
              className="form-control form-control-line mb-4"
              type="text"
              placeholder="Default input"
              aria-label="deafult input example"
            />

            <input
              className="form-control form-control-line form-control-sm mb-4"
              type="text"
              placeholder=".form-control-sm"
              aria-label=".form-control-sm example"
            />
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.form-control-lg</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">py-3 px-4 text-xl rounded-md</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.form-control-sm</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">py-1 px-2 text-sm rounded-sm</code></td>
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
{`<input type="text" class="form-control form-control-lg" id="..." placeholder="Placeholder text" />
<input type="text" class="form-control form-control-sm" id="..." placeholder="Placeholder text" />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
