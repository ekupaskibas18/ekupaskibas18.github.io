import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button type="button" className="btn bg-transparent border-gray-300 mr-4" data-bs-toggle="modal" data-bs-target="#modalVerticallyCentered">
          Vertically centered modal
        </button>

        <button type="button" className="btn bg-transparent border-gray-300" data-bs-toggle="modal" data-bs-target="#modalVerticallyCenteredScrollable">
          Vertically centered scrollable modal
        </button>

        <div className="modal fade" id="modalVerticallyCentered" tabIndex="-1" aria-labelledby="modalVerticallyCenteredLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalVerticallyCenteredLabel">Modal title</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn mr-2" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modalVerticallyCenteredScrollable" tabIndex="-1" aria-labelledby="modalVerticallyCenteredScrollableLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalVerticallyCenteredScrollableLabel">Modal title</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="mb-4">
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p className="mb-4">
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
                  vel augue laoreet rutrum faucibus dolor auctor.
                </p>
                <p className="mb-4">
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p className="mb-4">
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p className="mb-4">
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
                  vel augue laoreet rutrum faucibus dolor auctor.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn mr-2" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<!-- Vertically centered modal -->
<div class="modal-dialog modal-dialog-centered">
  ...
</div>
<!-- Vertically centered scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  ...
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
