import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Default() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="mb-3">
          <input className="form-check mr-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label for="flexRadioDefault1">
            Default radio
          </label>
        </div>

        <div className="mb-3">
          <input className="form-check mr-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label for="flexRadioDefault2">
            Default checked radio
          </label>
        </div>

        <div className="mb-3">
          <input className="form-check mr-2" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
          <label for="flexRadioDisabled">
            Disabled radio
          </label>
        </div>

        <div className="mb-3">
          <input className="form-check mr-2" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled />
          <label for="flexRadioCheckedDisabled">
            Disabled checked radio
          </label>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.form-check[type=radio]</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">rounded-full</code></td>
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
{`<input type="radio" class="form-check" name="..." id="..." value="..." />
<input type="radio" class="form-check" name="..." id="..." value="..." checked />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
