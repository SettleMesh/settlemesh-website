const Mail = ({ children }: { children: React.ReactNode }) => (
  <a href={`mailto:${children}`}>{children}</a>
);

function Header() {
  return <header className="site-header"><div className="bar">
    <a className="brand" href="#top"><img src="/SettleMesh-Header-Logo.png" alt="SettleMesh" /></a>
    <nav><a href="#how">How it works</a><a href="#partners">Partners</a><a href="#merchants">Merchants</a><a href="#about">About</a><a href="#contact">Contact</a><a className="nav-cta" href="mailto:partnerships@settlemesh.co.uk?subject=SettleMesh%20partnership%20discussion">Discuss a partnership</a></nav>
    <details className="mobile-menu"><summary aria-label="Open menu">Menu</summary><div><a href="#how">How it works</a><a href="#partners">Partners</a><a href="#merchants">Merchants</a><a href="#about">About</a><a href="#contact">Contact</a></div></details>
  </div></header>;
}

const TickList = ({ items }: { items: string[] }) => <ul className="tick-list">{items.map(x => <li key={x}>{x}</li>)}</ul>;

export default function Home() {
  return <main id="top"><Header />
    <section className="hero"><div className="wrap hero-grid"><div>
      <h1>Connect digital<br/>payments to everyday<br/>commerce.</h1>
      <p>SettleMesh is developing an integration layer connecting digital-currency providers with merchants&apos; existing POS and e-commerce systems.</p>
      <p>Introduce new payment options without replacing the checkout technology merchants already use.</p>
      <div className="actions"><a className="button" href="mailto:partnerships@settlemesh.co.uk?subject=SettleMesh%20partnership%20discussion">Discuss a partnership</a><a href="#how">See how it works ↓</a></div>
    </div><div className="diagram" aria-label="POS or checkout connected through SettleMesh to a payment provider"><div className="box">POS /<br/>Checkout</div><span className="line"/><div className="box core"><b>●—●—●</b><small>SettleMesh<br/>Integration Layer</small></div><span className="line"/><div className="box">Payment<br/>Provider</div></div></div></section>

    <section className="section"><div className="wrap narrow"><h2>New payment methods should not require a new checkout.</h2><p className="lead">Adding digital-currency payments can create fragmented integrations, unfamiliar checkout steps and operational complexity. SettleMesh is being designed to connect specialist providers with systems merchants already understand.</p>
      <div className="cards three"><article><h3>Fragmented integrations</h3><p>Providers may require different technical integrations for each digital-currency option.</p></article><article><h3>Checkout disruption</h3><p>New hardware and unfamiliar flows create friction for merchants and customers alike.</p></article><article><h3>Operational complexity</h3><p>Status updates, reconciliation and reporting must fit existing merchant workflows.</p></article></div>
    </div></section>

    <section className="section shade" id="how"><div className="wrap"><h2>One integration layer. A connected payment flow.</h2><ol className="steps"><li><i>1</i><h3>Existing checkout</h3><p>The merchant initiates a transaction through its current POS or online checkout.</p></li><li><i>2</i><h3>Payment request</h3><p>SettleMesh coordinates the request to an integrated digital-currency provider.</p></li><li><i>3</i><h3>Provider processing</h3><p>The provider handles the transaction, compliance and conversion.</p></li><li><i>4</i><h3>Settlement</h3><p>The provider settles funds; SettleMesh returns status and reporting data.</p></li></ol></div></section>

    <section className="split section" id="partners"><div className="wrap split-grid"><div><p className="kicker">For payment providers</p><h2>Extend your infrastructure into existing merchant systems.</h2><p>SettleMesh is exploring a reusable integration layer that gives specialist providers a route into physical and online commerce.</p><a className="outline" href="mailto:partnerships@settlemesh.co.uk?subject=SettleMesh%20provider%20partnership">Discuss provider integration</a></div><TickList items={["Connect to existing POS and e-commerce platforms","Receive standardised payment requests","Return payment status through webhooks","Support merchant reporting and reconciliation","Retain responsibility for regulated processing"]}/></div></section>

    <section className="split section shade"><div className="wrap split-grid"><div><p className="kicker">Integration approach</p><h2>Add another payment option without rebuilding your platform.</h2><p>SettleMesh aims to provide a consistent interface between commerce platforms and supported payment providers.</p></div><TickList items={["Standardised payment requests","Hosted checkout","Webhooks","Merchant reporting","Provider flexibility"]}/></div></section>

    <section className="split section" id="merchants"><div className="wrap split-grid"><div><p className="kicker">For merchants</p><h2>Designed around the checkout you already use.</h2><p>SettleMesh is exploring a future UK pilot for merchants interested in digital-currency payments while retaining existing POS and e-commerce systems.</p><a className="outline" href="mailto:hello@settlemesh.co.uk?subject=SettleMesh%20merchant%20pilot">Register pilot interest</a></div><TickList items={["Continue pricing in GBP","Avoid dedicated crypto hardware","Receive clear payment confirmation","Reconcile through a reporting dashboard","Use settlement offered by an approved provider"]}/></div></section>

    <section className="development"><div className="wrap"><h2>Currently in development.</h2><p>SettleMesh is at an early stage. We are validating the problem, shaping the integration model and speaking with prospective partners and merchants.</p><div className="dev-grid"><div><i>01</i><h3>Product discovery</h3><p>Testing needs with merchants and commerce platforms.</p></div><div><i>02</i><h3>MVP architecture</h3><p>Defining the first integration and reporting flow.</p></div><div><i>03</i><h3>Merchant pilot research</h3><p>Building a focused cohort for a future UK pilot.</p></div></div></div></section>

    <section className="section shade" id="about"><div className="wrap split-grid"><div><h2>Connecting checkout and settlement.</h2><p>Founded in Glasgow, SettleMesh aims to make emerging payment methods easier to integrate into everyday commerce by connecting established checkout systems with specialist payment infrastructure.</p></div><article className="founder"><span>GG</span><div><b>George Gannon</b><small>Founder, SettleMesh<br/>Glasgow, Scotland</small></div></article></div></section>

    <section className="section" id="contact"><div className="wrap"><h2>Let&apos;s discuss the infrastructure behind the idea.</h2><div className="cards three contacts"><article><small>✉ PARTNERSHIPS</small><Mail>partnerships@settlemesh.co.uk</Mail><p>Infrastructure and provider enquiries</p></article><article><small>✉ GENERAL</small><Mail>hello@settlemesh.co.uk</Mail><p>General questions and pilot interest</p></article><article><small>✉ DIRECT</small><Mail>georgegannon@settlemesh.co.uk</Mail><p>Founder — George Gannon</p></article></div></div></section>

    <section className="notice"><div className="wrap"><b>Important information</b><p>SettleMesh is a technology platform in development. It does not currently provide payment processing, custody, conversion or other regulated financial services. Any future regulated services would be delivered by appropriately authorised partners.</p></div></section>
    <footer><div className="wrap"><span>© 2026 SettleMesh. Glasgow, Scotland.</span><div><a href="/privacy">Privacy</a><a href="#contact">Contact</a></div></div></footer>
  </main>;
}
