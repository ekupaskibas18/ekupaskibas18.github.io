import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Experimental() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="flex flex-wrap -mx-4">
          <div className="flex-1 md:w-full px-4">
            <div className="form-group mb-4">
              <label className="inline-block mb-2">Email address</label>
              <input type="email" className="form-input form-input-lg" placeholder="name@example.com" />
            </div>

            <div className="form-group mb-4">
              <label className="inline-block mb-2">Email address</label>
              <input type="email" className="form-input" placeholder="name@example.com" />
            </div>

            <div className="form-group mb-4">
              <label className="inline-block mb-2">Email address</label>
              <input type="email" className="form-input form-input-sm" placeholder="name@example.com" />
            </div>
          </div>

          <div className="flex-1 md:w-full px-4">
            <div className="form-group mb-4">
              <label className="inline-block mb-2">Email address</label>
              <input type="email" className="form-input form-input-line form-input-lg" placeholder="name@example.com" />
            </div>

            <div className="form-group mb-4">
              <label className="inline-block mb-2">Email address</label>
              <input type="email" className="form-input form-input-line" placeholder="name@example.com" />
            </div>

            <div className="form-group mb-4">
              <label className="inline-block mb-2">Email address</label>
              <input type="email" className="form-input form-input-line form-input-sm" placeholder="name@example.com" />
            </div>
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
