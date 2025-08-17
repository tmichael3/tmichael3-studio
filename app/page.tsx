import HomeHero from "@/components/HomeHero";
import HomeDescription from "@/components/HomeDescription";
import RecentWork from "@/components/RecentWork";
import ClientReviews from "@/components/ClientReviews";
import HomeServices from "@/components/HomeServices";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HomeHero />
      <HomeDescription />
      <RecentWork />
      <HomeServices />
      <ClientReviews />
    </div>
  );
}
