import Header from "./components/Header";
import Home from "./components/Home";
import Why from "./components/Why";
import WhyPart from "./components/WhyPart";
import type { WhyPartProps } from "./components/WhyPart";
import LatestArticles from "./components/LatestArticles";
import LatestArticle from "./components/LatestArticle";
import type { LatestArticleProps } from "./components/LatestArticle";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const whyParts: WhyPartProps<string>[] = [
    {
      image: {
        source: "icons/icon-online.svg",
        alt: "Online Banking",
      },
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      image: {
        source: "icons/icon-budgeting.svg",
        alt: "Simple Budgeting",
      },
      title: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.",
    },
    {
      image: {
        source: "icons/icon-onboarding.svg",
        alt: "Fast Onboarding",
      },
      title: "Fast Onboarding",
      text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      image: {
        source: "icons/icon-api.svg",
        alt: "Open API",
      },
      title: "Open API",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  const latestArticles: LatestArticleProps<string>[] = [
    {
      image: {
        source: "images/image-currency.jpg",
        alt: "Currency",
      },
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees.",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…",
    },
    {
      image: {
        source: "images/image-restaurant.jpg",
        alt: "Restaurant",
      },
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money.",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you…",
    },
    {
      image: {
        source: "images/image-plane.jpg",
        alt: "Plane",
      },
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go.",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you…",
    },
    {
      image: {
        source: "images/image-confetti.jpg",
        alt: "Confetti",
      },
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...",
    },
  ];

  return (
    <div className="app-why-container">
      <Header />
      <Home />
      <Why>
        {whyParts.map((whyPart: WhyPartProps<string>) => (
          <WhyPart
            image={{
              source: whyPart.image.source,
              alt: whyPart.image.alt,
            }}
            title={whyPart.title}
            text={whyPart.text}
            key={whyPart.text}
          />
        ))}
      </Why>
      <LatestArticles>
        {latestArticles.map((latestArticle: LatestArticleProps<string>) => (
          <LatestArticle
            image={{
              source: latestArticle.image.source,
              alt: latestArticle.image.alt,
            }}
            author={latestArticle.author}
            title={latestArticle.title}
            description={latestArticle.description}
            key={latestArticle.title}
          />
        ))}
      </LatestArticles>
      <Footer />
    </div>
  );
};

export default App;