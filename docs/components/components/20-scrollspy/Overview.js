import React, { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  useEffect(() => {
    // const dataSpyInst = new bootstrap.ScrollSpy(scrollSpyContainer.current, {
    //   target: '#navbar-example2'
    // });

    // const dataSpyList = [].slice.call(document.querySelectorAll('[data-spy="scroll"]'));

    // dataSpyList.forEach(function (dataSpyEl) {
      // let dataSpyInst = bootstrap.ScrollSpy.getInstance(dataSpyEl);

      // if (dataSpyInst) {
      //   dataSpyInst.refresh();
      // } else {
      //   dataSpyInst = new bootstrap.ScrollSpy(dataSpyEl);
      // }
    // });

    return () => {
      // dataSpyInst.dispose();
      // dataSpyList.forEach(function (dataSpyEl) {
      //   let dataSpyInst = bootstrap.ScrollSpy.getInstance(dataSpyEl);

      //   if (dataSpyInst) {
      //     dataSpyInst.dispose();
      //   }
      // });
    }
  }, []);
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
          <a className="navbar-brand" href="#">Navbar</a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#fat">@fat</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#mdo">@mdo</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li><a className="dropdown-item" href="#one">one</a></li>
                <li><a className="dropdown-item" href="#two">two</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#three">three</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="h-56 overflow-auto relative mt-2" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0">
          <h4 id="fat">@fat</h4>
          <p>
            Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi
            before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim
            keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure.
            Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't
            heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil
            tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.
          </p>
          <h4 id="mdo">@mdo</h4>
          <p>
            Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard.
            Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea
            helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non
            freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
            quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.
          </p>
          <h4 id="one">one</h4>
          <p>
            Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle
            rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in
            magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork.
            Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in,
            sustainable delectus consectetur fanny pack iphone.
          </p>
          <h4 id="two">two</h4>
          <p>
            In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats
            sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer.
            Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse.
            Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan
            tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf
            voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk
            brooklyn nesciunt.
          </p>
          <h4 id="three">three</h4>
          <p>
            Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they
            sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan.
            Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts,
            williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund
            culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel
            keffiyeh artisan ullamco consequat.
          </p>
          <p>
            Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth
            id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard
            of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they
            sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh
            ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris
            tempor veniam. Anim mollit minim commodo ullamco thundercats.
          </p>
        </div>
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
  );
}
