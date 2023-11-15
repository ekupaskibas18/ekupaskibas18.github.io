import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function SelectMultiple() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <select className="form-select mb-3" multiple aria-label="multiple select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="form-select" size="3" aria-label="size 3 select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<select class="form-select" multiple aria-label="multiple select example">
  ...
</select>
<select class="form-select" size="3" aria-label="size 3 select example">
  ...
</select>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
