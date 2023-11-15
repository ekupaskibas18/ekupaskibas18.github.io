import CodeBlock from '@theme/CodeBlock';

export default function VariableWidthContent() {
  return (
    <figure className="border-2 rounded">
      <blockquote className="p-4 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="flex-initial bg-gray-400 p-4 h-12">.flex-initial = .col-auto</div>
            <div className="flex-1 bg-gray-200 p-4 h-12">.flex-1 = .col</div>
          </div>

          <br />

          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-1/4 bg-gray-300 p-4 h-12">.w-3/12 = col-3</div>
            <div className="flex-initial bg-gray-400 p-4 h-12">.flex-initial = .col-auto</div>
            <div className="w-1/4 bg-gray-300 p-4 h-12">.w-3/12 = col-3</div>
          </div>

          <br />

          <div className="flex flex-wrap -mx-4">
            <div className="flex-1 bg-gray-200 p-4 h-12">.flex-1 = .col</div>
            <div className="flex-initial bg-gray-400 p-4 h-12">.flex-initial = .col-auto</div>
            <div className="w-1/4 bg-gray-300 p-4 h-12">.w-3/12 = col-3</div>
          </div>
        </div>
      </blockquote>
      <figcaption className="bg-gray-200 py-2 px-4 text-sm font-bold">
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.col-auto</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">flex-initial</code></td>
            </tr>
          </tbody>
        </table>
      </figcaption>
      <figcaption className="bg-gray-300 p-4">
        <div className="relative">
          <CodeBlock
            className="!mb-0"
            language="markup"
            title=""
            showLineNumbers
          >
{`<div class="flex flex-wrap">
  <div class="flex-initial">.col-auto</div>
  <div class="flex-1">.col</div>
</div>

<div class="flex flex-wrap justify-center">
  <div class="w-1/4">.col-3</div>
  <div class="flex-initial">.col-auto</div>
  <div class="w-1/4">.col-3</div>
</div>

<div class="flex flex-wrap">
  <div class="flex-1">.col</div>
  <div class="flex-initial">.col-auto</div>
  <div class="w-1/4">.col-3</div>
</div>
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
