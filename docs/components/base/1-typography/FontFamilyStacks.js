import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function FontFamilyStacks() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <p className="font-base">This is Base font</p>
        <p className="font-comics">This is Comics font (Bangers)</p>
        <p className="font-cursive">This is Cursive font (Cookie)</p>
        <p className="font-display">This is Display font (DM Sans)</p>
        <p className="font-mono">This is Mono font (Menlo)</p>
        <p className="font-rounded">This is Rounded font (M PLUS Rounded 1c)</p>
        <p className="font-sans">This is Sans font (Roboto)</p>
        <p className="font-serif">This is Serif font (Roboto Slab)</p>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<p className="font-base">This is Base font</p>
<p className="font-comics">This is Comics font (Bangers)</p>
<p className="font-cursive">This is Cursive font (Cookie)</p>
<p className="font-display">This is Display font (DM Sans)</p>
<p className="font-mono">This is Mono font (Menlo)</p>
<p className="font-rounded">This is Rounded font (M PLUS Rounded 1c)</p>
<p className="font-sans">This is Sans font (Roboto)</p>
<p className="font-serif">This is Serif font (Roboto Slab)</p>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
