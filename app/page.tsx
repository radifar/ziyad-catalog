import CatalogSection from "@/components/CatalogSection";
import Footer from "@/components/Footer";

export default function Home({searchParams}: any) {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <CatalogSection searchParams={searchParams}/>
        <Footer />
      </main>
    </div>
  );
}

