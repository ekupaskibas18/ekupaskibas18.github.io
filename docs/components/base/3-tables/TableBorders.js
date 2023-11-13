import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function TableBorders() {
  return (
    <>
      <section className="mb-12">
        <h3 className="h3 mb-4">Bordered tables</h3>

        <FeatureBlock>
          <FeatureBlock.Body>
            <table className="table table-bordered border-red">
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
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
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
{`
`}
            </CodeBlock>
          </FeatureBlock.Footer>
        </FeatureBlock>
      </section>

      <section>
        <h3 className="h3 mb-4">Borderless tables</h3>

        <FeatureBlock>
          <FeatureBlock.Body>
            <table className="table table-borderless">
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
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
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
{`
`}
            </CodeBlock>
          </FeatureBlock.Footer>
        </FeatureBlock>
      </section>
    </>
  );
}
