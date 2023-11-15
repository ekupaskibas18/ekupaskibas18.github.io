import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function ResponsiveTables() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="table-responsive">
          <table className="table table-bordered border-red">
            <thead>
              <tr>
                {Array(20).fill().map((o, i) => {
                  return (
                    <th key={i} scope="col">Heading</th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Cell</th>
                {Array(19).fill().map((o, i) => {
                  return (
                    <td key={i}>Cell</td>
                  );
                })}
              </tr>
              <tr>
                <th scope="row">Cell</th>
                {Array(19).fill().map((o, i) => {
                  return (
                    <td key={i}>Cell</td>
                  );
                })}
              </tr>
              <tr>
                <th scope="row">Cell</th>
                {Array(19).fill().map((o, i) => {
                  return (
                    <td key={i}>Cell</td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
