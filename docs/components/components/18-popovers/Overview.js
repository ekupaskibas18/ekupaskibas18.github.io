import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  useEffect(() => {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    });

    return () => {
      // Do proper cleanup on unmount
      popoverList.forEach(element => {
        element.dispose();
      });
    };
  }, []);

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button type="button" className="btn mr-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
          Popover on top
        </button>

        <button type="button" className="btn mr-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
          Popover on right
        </button>

        <button type="button" className="btn mr-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus
        sagittis lacus vel augue laoreet rutrum faucibus.">
          Popover on bottom
        </button>

        <button type="button" className="btn mr-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
          Popover on left
        </button>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.popover</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">absolute top-0 left-0 z-1060 block max-w-sm text-sm break-words bg-white border border-black border-opacity-25 rounded shadow-sm</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.popover-header</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">text-base mb-0 border-b border-black border-opacity-25 rounded-t py-2 px-4</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.popover-body</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">p-4</code>
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
{`<button type="button" class="btn mr-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="btn mr-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>

<button type="button" class="btn mr-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<button type="button" class="btn mr-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
