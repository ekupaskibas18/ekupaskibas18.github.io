import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function TablesOverview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <table className="table">
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
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.table</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">border-collapse w-full align-top</code></td>
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
