import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function ResponsiveContainers() {
  return (
    <figure className="border-2 rounded">
      <blockquote className="p-4 py-8">
        <div className="container bg-gray-200 mx-auto px-4">
          <p>This is equivalent to <code className="font-bold text-pink">.container</code>.</p>
        </div>

        <br />

        <div className="sm:container bg-gray-200 mx-auto px-4">
          <p>
            Full-width fluid until the <code className="font-bold text-pink">`sm`</code> breakpoint,
            then lock to container
          </p>
        </div>

        <br />

        <div className="md:container bg-gray-200 mx-auto px-4">
          <p>
            Full-width fluid until the <code className="font-bold text-pink">`md`</code> breakpoint,
            then lock to container
          </p>
        </div>

        <br />

        <div className="lg:container bg-gray-200 mx-auto px-4">
          <p>
            Full-width fluid until the <code className="font-bold text-pink">`lg`</code> breakpoint,
            then lock to container
          </p>
        </div>

        <br />

        <div className="xl:container bg-gray-200 mx-auto px-4">
          <p>
            Full-width fluid until the <code className="font-bold text-pink">`xl`</code> breakpoint,
            then lock to container
          </p>
        </div>
      </blockquote>
      <figcaption className="bg-gray-200 py-2 px-4 text-sm font-bold">
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.container</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">container mx-auto px-4</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.container-sm</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">sm:container mx-auto px-4</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.container-md</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">md:container mx-auto px-4</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.container-lg</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">lg:container mx-auto px-4</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.container-xl</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">xl:container mx-auto px-4</code></td>
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
{`<div class="container mx-auto px-4">
  <p>This is equivalent to .container</p>
</div>

<div class="sm:container mx-auto px-4">
  <p>This is equivalent to .container-sm</p>
</div>

<div class="md:container mx-auto px-4">
  <p>This is equivalent to .container-md</p>
</div>

<div class="lg:container mx-auto px-4">
  <p>This is equivalent to .container-lg</p>
</div>

<div class="xl:container mx-auto px-4">
  <p>This is equivalent to .container-xl</p>
</div>
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
