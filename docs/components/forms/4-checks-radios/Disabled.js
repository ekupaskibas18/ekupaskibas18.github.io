import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Default() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="mb-3">
          <input className="form-check mr-2" type="checkbox" value="" id="flexCheckDisabled" disabled />
          <label for="flexCheckDisabled">
            Disabled checkbox
          </label>
        </div>
        <div className="mb-3">
          <input className="form-check mr-2" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
          <label for="flexCheckCheckedDisabled">
            Disabled checked checkbox
          </label>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<input type="checkbox" class="form-check"  value="..." id="..." disabled />
<input type="checkbox" class="form-check"  value="..." id="..." disabled checked />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
