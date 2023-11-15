import { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {

  useEffect(() => {
    // const collapseElementList = document.querySelectorAll('.collapse')

    // const collapseEl = new Collapse(collapseRef);

    // const collapseList = [...collapseElementList].map(collapseEl => new Collapse(collapseEl));

    return () => {
      // Do proper cleanup on unmount
      // collapseList.map(collapseEl => collapseEl.dispose());
      // collapseEl.dispose();
    };
  }, []);

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <p>
          <a
            className="btn btn-primary mr-3"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Link with href
          </a>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Button with data-target
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
            richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.collapse:not(.show)</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">hidden</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.collapsing</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">h-0 overflow-hidden transition-height duration-300 ease-in-out</code>
              </td>
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
{`
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
