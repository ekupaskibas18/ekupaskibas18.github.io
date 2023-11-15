import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Buttons() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="flex flex-wrap mb-4">
          <div className="flex-initial">
            <button className="btn btn-outline" type="button" id="button-addon1">Button</button>
          </div>
          <div className="flex-1">
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="flex-initial">
            <button className="btn btn-outline" type="button" id="button-addon1">Button</button>
          </div>
          <div className="flex-1">
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="flex-1">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          </div>
          <div className="flex-initial">
            <button className="btn btn-outline" type="button" id="button-addon1">Button</button>
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="flex-initial">
            <button className="btn btn-outline" type="button" id="button-addon1">Button</button>
          </div>
          <div className="flex-initial">
            <button className="btn btn-outline" type="button" id="button-addon1">Button</button>
          </div>
          <div className="flex-1">
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="flex-1">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          </div>
          <div className="flex-initial">
            <button className="btn btn-outline" type="button" id="button-addon1">Button</button>
          </div>
          <div className="flex-initial">
            <button className="btn btn-outline" type="button" id="button-addon1">Button</button>
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row"><s>.input-group</s></th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">relative flex flex-wrap items-stretch w-full</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row"><s>{`.input-group > .form-control`}</s></th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">relative flex-auto min-w-0</code></td>
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
{`<div class="flex flex-wrap mb-4">
  <div class="flex-initial bg-gray-50 py-1 px-3 rounded items-center leading-normal">@</div>
  <div class="flex-1">
    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
  </div>
</div>
<div class="flex flex-wrap mb-4">
  <div class="flex-1">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  </div>
  <div class="flex-initial bg-gray-50 py-1 px-3 rounded items-center leading-normal">@example.com</div>
</div>
<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="flex flex-wrap mb-4">
  <div class="flex-initial bg-gray-50 py-1 px-3 rounded items-center leading-normal">https://example.com/users/</div>
  <div class="flex-1">
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
  </div>
</div>
<div class="flex flex-wrap mb-4">
  <div class="flex-initial bg-gray-50 py-1 px-3 rounded items-center leading-normal">$</div>
  <div class="flex-1">
    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
  </div>
  <div class="flex-initial bg-gray-50 py-1 px-3 rounded items-center leading-normal">.00</div>
</div>
<div class="flex flex-wrap mb-4">
  <div class="flex-initial bg-gray-50 py-1 px-3 rounded items-center leading-normal">With textarea</div>
  <div class="flex-1">
    <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
