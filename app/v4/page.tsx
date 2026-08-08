import V4Nav from "@/components/v4/Nav";
import V4Hero from "@/components/v4/Hero";
import V4ProductTabs from "@/components/v4/ProductTabs";
import V4Benefits from "@/components/v4/Benefits";
import V4Ticker from "@/components/v4/Ticker";
import V4Agents from "@/components/v4/Agents";
import V4Notes from "@/components/v4/Notes";
import V4CTAModule from "@/components/v4/CTAModule";
import V4Stats from "@/components/v4/Stats";
import V4Vision from "@/components/v4/Vision";
import V4PreFooter from "@/components/v4/PreFooter";
import V4AccessForm from "@/components/v4/AccessForm";
import V4Footer from "@/components/v4/Footer";

export default function V4Page() {
  return (
    <>
      <V4Nav />
      <main>
        <V4Hero />
        <V4ProductTabs />
        <V4Benefits />
        <V4Ticker />
        <V4Agents />
        <V4Notes />
        <V4CTAModule />
        <V4Stats />
        <V4Vision />
        <V4PreFooter />
        <V4AccessForm />
      </main>
      <V4Footer />
    </>
  );
}
