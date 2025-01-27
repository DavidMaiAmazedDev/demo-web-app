import Layout from "../components/layout";
import mainstyles from "../styles/main.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <Layout home>
      <div className={mainstyles.container}>
        <div className={mainstyles.leftSide}>
          <h1 style={{marginBottom: 20 + 'px'}}>One Bowl Banana Bread</h1>
          <div>
            <span>
              The best, most simple, one-bowl banana bread I know. Perfect if
              you're craving classic banana bread flavor and texture, but want
              as little mess, drama, and equipment as possible. JUMP TO RECIPE
              One Bowl Banana Bread My Latest Videos Give this banana bread
              recipe a go! It's perfect if you're craving classic banana bread
              flavor and texture, but want as little mess, drama, and equipment
              as possible. Quite honestly, it's the best, simple, one-bowl
              banana bread I know. No mixer, a single bowl, classic flavor, and
              a moist and tender crumb. If you have three ripe bananas on hand,
              chances are good you have the rest of the ingredients as well.
              Let's do this!
            </span>
          </div>
          <div className={mainstyles.prepareProcess}>
            <div className={mainstyles.prepareTime}>
              <Image
                priority
                src="/images/clock.png"
                height={30}
                width={30}
                alt=""
              />
              <div className={mainstyles.prepareText}>
                <span>PREP</span>
                <br />
                <span>10mins</span>
              </div>
            </div>
            <div className={mainstyles.prepareBake}>
              <Image
                priority
                src="/images/bake.png"
                height={30}
                width={30}
                alt=""
              />
              <div className={mainstyles.prepareText}>
                <span>BAKE</span>
                <br />
                <span>1h to 1h 10mins</span>
              </div>
            </div>
            <div className={mainstyles.prepareTotal}>
              <div className={mainstyles.prepareText}>
                <span>TOTAL</span>
                <br />
                <span>1h 10mins</span>
              </div>
            </div>
          </div>
          <hr />
          <div className={mainstyles.yieldProcess}>
            <div className={mainstyles.yieldDuration}>
              <Image
                priority
                src="/images/yield.png"
                height={30}
                width={30}
                alt=""
              />
              <div className={mainstyles.prepareText}>
                <span>YIELD</span>
                <br />
                <span>1 loafs, 12 generous servings</span>
              </div>
            </div>
            <div className={mainstyles.yieldAction}>
              <div className={mainstyles.yieldSave}>
                <Image
                  priority
                  src="/images/save.png"
                  height={30}
                  width={30}
                  alt=""
                />
                <span>SAVE RECIPE</span>
              </div>
              <div className={mainstyles.yieldPrint}>
                <Image
                  priority
                  src="/images/print.png"
                  height={30}
                  width={30}
                  alt=""
                />
                <span>PRINT</span>
              </div>
            </div>
          </div>
        </div>
        <div className={mainstyles.rightSide}>
          <Image
            priority
            src="/images/bread.jpg"
            height={500}
            width={600}
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
