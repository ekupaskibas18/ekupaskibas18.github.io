import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button type="button" className="btn bg-transparent border-gray-300" data-bs-toggle="modal" data-bs-target="#modalOverview">
          Launch demo modal
        </button>

        <div className="modal fade" id="modalOverview" tabIndex="-1" aria-labelledby="modalOverviewLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalOverviewLabel">Modal title</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
                <button type="button" className="btn bg-transparent border-gray-300" data-bs-toggle="modal" data-bs-target="#modalOverview2">
                  Launch demo modal
                </button>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn mr-2" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modalOverview2" tabIndex="-1" aria-labelledby="modalOverviewLabel2" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalOverviewLabel2">Modal title</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn mr-2" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.modal</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">fixed top-0 left-0 z-1050 hidden w-full h-full overflow-hidden outline-none</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.modal-dialog</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">relative w-auto mx-auto p-2 pointer-events-none</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.modal-content</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">relative flex flex-col w-full pointer-events-auto bg-white border border-black border-opacity-25 rounded outline-none</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.modal-open</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">overflow-hidden</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.modal-open .modal</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">overflow-x-hidden overflow-y-auto</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.modal-header</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex flex-shrink-0 items-start justify-between p-4 border-b border-black border-opacity-10 rounded-t</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.modal-body</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">relative flex-auto p-4</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.modal-footer</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex flex-wrap flex-shrink-0 items-center justify-end p-3 border-t border-black border-opacity-25 rounded-b</code>
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
{`<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn mr-2" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
