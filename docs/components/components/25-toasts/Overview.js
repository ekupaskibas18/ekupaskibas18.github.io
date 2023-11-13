import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  /*
  useEffect(() => {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl, {})
    })

    return () => {
      // Do proper cleanup on unmount
    };
  }, []);
  */

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="toast card fade show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
          <div className="flex flex-auto items-center px-4 py-2 border-b border-black border-opacity-10 bg-black bg-opacity-5">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" height="20" width="20" className="rounded mr-2" alt="..." />
            <strong className="mr-auto">Featured</strong>

            <small>11 mins ago</small>
            <button type="button" className="ml-2 mb-1 close" data-bs-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="flex-auto p-4">
            Hello, world! This is a toast message.
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.toast</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">max-w-sm overflow-hidden text-sm rounded bg-white bg-opacity-75 border border-black border-opacity-10 shadow opacity-0</code>
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
{`<div class="toast card">
  <div class="flex flex-auto items-center px-4 py-2 border-b border-black border-opacity-10 bg-black bg-opacity-05">
    <strong class="mr-auto">Featured</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-bs-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="flex-auto p-4">
    Hello, world! This is a toast message.
  </div>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
