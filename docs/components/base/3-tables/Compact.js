import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Compact() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Michael</td>
              <td>Jordan</td>
              <td>@mj23</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Magic</td>
              <td>Johnson</td>
              <td>@magic32</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@bird33</td>
            </tr>
          </tbody>
        </table>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Michael</td>
      <td>Jordan</td>
      <td>@mj23</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Magic</td>
      <td>Johnson</td>
      <td>@magic32</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@bird33</td>
    </tr>
  </tbody>
</table>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
