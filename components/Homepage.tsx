import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ProductFlow from "@/components/ProductFlow";
import Agents from "@/components/Agents";
import UseCases from "@/components/UseCases";
import MissingMoney from "@/components/MissingMoney";
import Explainability from "@/components/Explainability";
import Trust from "@/components/Trust";
import Vision from "@/components/Vision";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import Footer from "@/components/Footer";

export default function Homepage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <ProductFlow />
        <Agents />
        <UseCases />
        <MissingMoney />
        <Explainability />
        <Trust />
        <Vision />
        <EarlyAccessForm />
      </main>
      <Footer />
    </>
  );
}
