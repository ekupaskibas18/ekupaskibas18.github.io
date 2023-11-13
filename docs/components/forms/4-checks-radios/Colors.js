import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Default() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/2 p-4">
            <div className="mb-3">
              <input
                id="coloredCheckboxDefault"
                className="form-check mr-2"
                type="checkbox"
                value=""
                defaultChecked
              />
              <label for="coloredCheckboxDefault">
                Default color checkbox
              </label>
            </div>

            <div className="mb-3">
              <input
                id="coloredCheckboxRed"
                className="form-check text-red mr-2"
                type="checkbox"
                value=""
                defaultChecked
              />
              <label for="coloredCheckboxRed">
                Red colored checkbox
              </label>
            </div>

            <div className="mb-3">
              <input
                id="coloredCheckboxGreen"
                className="form-check text-green mr-2"
                type="checkbox"
                defaultValue=""
                defaultChecked
              />
              <label for="coloredCheckboxGreen">
                Green colored checkbox
              </label>
            </div>
          </div>

          <div className="w-1/2 p-4">
            <div className="mb-3">
              <input className="form-check mr-2" type="radio" name="coloredRadioDefault" id="coloredRadioDefault" defaultChecked />
              <label for="coloredRadioDefault">
                Default checked radio
              </label>
            </div>
            <div className="mb-3">
              <input className="form-check text-red mr-2" type="radio" name="coloredRadioRed" id="coloredRadioRed" defaultChecked />
              <label for="coloredRadioRed">
                Red checked radio
              </label>
            </div>
            <div className="mb-3">
              <input className="form-check text-green mr-2" type="radio" name="coloredRadioGreen" id="coloredRadioGreen" defaultChecked />
              <label for="coloredRadioGreen">
                Green checked radio
              </label>
            </div>
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.form-select</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">block w-full appearance-none  py-2 pl-3 pr-8 leading-tight border rounded bg-white bg-no-repeat</code></td>
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
{`<input type="checkbox" class="form-check text-red" name="coloredCheckboxRed" id="..." value="..." checked />
<input type="checkbox" class="form-check text-green" name="coloredCheckboxGreen" id="..." value="..." checked />
<input type="radio" class="form-check text-red"  name="coloredRadioRed" id="..." value="..." checked />
<input type="radio" class="form-check text-green" name="coloredRadioGreen" id="..." value="..." checked />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
