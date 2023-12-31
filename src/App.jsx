import { CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Subcribe,
  Services,
  SpcecialOffer,
  SuperQuality } from "./section";

  import Nav from "./components/nav";

const App = () => (
  <main>
    <Nav />

    <section className="xl:padding-1 wide:padding-r padding-b">
      < Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section className="padding-x py-10">
      <Services />
    </section>

    <section className="padding">
      <SpcecialOffer />
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subcribe />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App;