import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Lists() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <ul className="list-none mb-4">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>Nulla volutpat aliquam velit
            <ul className="list-disc list-inside">
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>

        <ul className="list-disc pl-8 mb-4">
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        </ul>

        <ol className="list-decimal list-inside mb-4">
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        </ol>

        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        </ul>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.list-unstyled</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">list-none pl-0</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">ul</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">list-disc pl-8</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">ul</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">list-decimal pl-8</code></td>
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
{`<ul class="list-disc pl-8 mb-4">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
</ul>
<ol class="list-decimal list-inside mb-4">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
</ol>
<ul>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
</ul>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
