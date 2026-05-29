import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const resourceCards = [
  {
    img: "/card1.jpg",
    href: "https://www.youtube.com/channel/UCrnbsxwsvBCMGZwK1XI-xfw",
    alt: "C3 Conversations Podcast",
  },
  {
    img: "/card2.jpg",
    href: "https://www.youtube.com/channel/UCrnbsxwsvBCMGZwK1XI-xfw",
    alt: "C3TV YouTube",
  },
  {
    img: "/card3.jpg",
    href: "https://www.instagram.com/c3churchglobal/",
    alt: "C3 Church Global",
  },
  {
    img: "/card4.jpg",
    href: "https://www.liinks.co/c3churchglobal",
    alt: "Current Podcast",
  },
];

const sliderImages = [
  {
    img: "/slider-1.jpg",
    alt: "C3 Church worship gathering",
  },
  {
    img: "/slider-2.jpg",
    alt: "C3 Church community lunch",
  },
  {
    img: "/slider-3.jpg",
    alt: "C3 Church leaders listening",
  },
];

const reelMedia = [
  { type: "video", src: "/ig-live-1.mp4", poster: "/about-img.jpg" },
  { type: "image", src: "/ig-live-still.jpg" },
  { type: "video", src: "/ig-live-2.mp4", poster: "/conference.jpg" },
  { type: "video", src: "/ig-live-3.mp4", poster: "/card1.jpg" },
  { type: "video", src: "/ig-live-4.mp4", poster: "/founders.jpg" },
];

function InstagramIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M14 8.8V6.7c0-.6.4-.8.8-.8H17V2.1L13.8 2C10.3 2 9.5 4.6 9.5 6.3v2.5H7v4h2.5V22H14v-9.2h3l.5-4H14Z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12.2 2C6.6 2 3.7 5.8 3.7 9.9c0 2 .8 3.8 2.6 4.5.3.1.5 0 .6-.3l.3-1.1c.1-.3.1-.4-.1-.7-.5-.6-.8-1.4-.8-2.5 0-2.9 2.2-5.5 5.7-5.5 3.1 0 4.8 1.9 4.8 4.4 0 3.3-1.5 6.1-3.7 6.1-1.2 0-2.1-1-1.8-2.2.3-1.5 1-3.1 1-4.2 0-1-.5-1.8-1.6-1.8-1.3 0-2.3 1.3-2.3 3.1 0 1.1.4 1.9.4 1.9l-1.6 6.8c-.5 2-.1 4.4-.1 4.6 0 .1.2.2.3.1.1-.1 1.8-2.2 2.3-4.2.2-.6.9-3.4.9-3.4.5.8 1.7 1.5 3 1.5 4 0 6.7-3.6 6.7-8.5C20.3 5.3 17.2 2 12.2 2Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4-1.7-5.6-.2-1 .9-1.4 2.3-1.2 3.6-3.2-.2-6.1-1.7-8-4.1-1.1 1.8-.5 4.2 1.3 5.4-.6 0-1.3-.2-1.8-.5 0 1.9 1.3 3.5 3.2 3.9-.6.2-1.2.2-1.8.1.5 1.7 2 2.8 3.8 2.9-1.7 1.3-3.8 2-5.9 2H2c1.9 1.2 4.2 1.9 6.6 1.9 7.9 0 12.3-6.6 12.3-12.3v-.6c.8-.5 1.5-1.3 2.1-2.1Z" />
    </svg>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  const instagramClass = compact ? "h-4 w-4" : "h-8 w-8";

  return (
    <div className="flex items-center justify-center gap-4 text-white">
      <a
        href="https://www.instagram.com/c3churchglobal/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="C3 Church Global on Instagram"
        className="transition-opacity hover:opacity-70"
      >
        <InstagramIcon className={instagramClass} />
      </a>
      <a
        href="https://www.facebook.com/c3churchglobal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="C3 Church Global on Facebook"
        className="transition-opacity hover:opacity-70"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.pinterest.com/c3churchglobal/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="C3 Church Global on Pinterest"
        className="transition-opacity hover:opacity-70"
      >
        <PinterestIcon />
      </a>
      <a
        href="https://twitter.com/c3churchglobal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="C3 Church Global on Twitter"
        className="transition-opacity hover:opacity-70"
      >
        <TwitterIcon />
      </a>
    </div>
  );
}

function ScrollCue() {
  return (
    <div
      className="absolute bottom-8 left-1/2 z-10 hidden h-[50px] w-[50px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-white text-white sm:flex"
      aria-hidden="true"
    >
      <svg viewBox="0 0 50 50" className="h-full w-full">
        <path
          d="M14 19.5 25 30.5 36 19.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

function ButtonLink({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: React.ReactNode;
  variant?:
    | "outline"
    | "black"
    | "sage"
    | "white"
    | "whitePill"
    | "blackPill"
    | "outlinePill";
}) {
  const styles = {
    outline: "border-black text-black hover:bg-black hover:text-white",
    black: "border-black bg-black text-white hover:bg-transparent hover:text-black",
    sage: "border-transparent bg-[#b6bcb2] text-black hover:bg-black hover:text-white",
    white: "border-white text-white hover:bg-white hover:text-black",
    whitePill:
      "rounded-full border-white text-white hover:bg-white hover:text-black",
    blackPill:
      "rounded-full border-black bg-black text-white hover:bg-transparent hover:text-black",
    outlinePill:
      "rounded-full border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex h-[50px] min-w-[217px] items-center justify-center border px-8 text-[14px] font-semibold uppercase tracking-[1.54px] transition-colors ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

function SocialResourceSection() {
  return (
    <section className="bg-[#fafafa] px-5 py-16 text-center md:py-[70px]">
      <h2 className="font-display text-[35px] leading-tight text-black md:text-[40px]">
        Keep up with us on social
      </h2>
      <a
        href="https://www.instagram.com/c3churchglobal/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 block text-[14px] font-semibold uppercase tracking-[1.54px] text-[#0000ee] underline"
      >
        @C3ChurchGlobal
      </a>
      <a
        href="https://www.liinks.co/c3churchglobal"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block text-[14px] font-semibold uppercase tracking-[1.54px] text-[#0000ee] underline"
      >
        Link to Key Info + Recent Content
      </a>

      <div className="mx-auto mt-14 grid max-w-[1050px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-[18px]">
        {resourceCards.map((card) => (
          <a
            key={card.img}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[294/339] overflow-hidden bg-white"
          >
            <Image
              src={card.img}
              alt={card.alt}
              fill
              sizes="(min-width: 768px) 255px, 50vw"
              className="object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

function BlogFeature() {
  return (
    <section className="bg-[#b6bcb2] px-5 py-16 md:py-20">
      <div className="mx-auto grid max-w-[1016px] items-center gap-8 md:grid-cols-[424px_1fr] md:gap-8">
        <div className="relative mx-auto aspect-[424/393] w-full max-w-[424px] overflow-hidden">
          <Image
            src="/blog-feature.jpg"
            alt="Developing Leaders podcast artwork"
            fill
            sizes="424px"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-[610px] text-left">
          <p className="mb-7 text-[14px] font-semibold leading-[21px] tracking-[1.54px] text-black">
            Ps Phil Pringle &amp; Ps Sam Picken&nbsp;&nbsp; | &nbsp;&nbsp;May 8,
            2026
          </p>
          <h2 className="font-display mb-6 text-[35px] leading-tight text-black md:text-[40px]">
            Developing Leaders
          </h2>
          <p className="mb-8 text-[16px] font-light leading-[23px] text-black">
            The Art of Raising Leaders: Cultivating Growth From WithinThere&apos;s
            something profoundly beautiful about watching potential transform
            into purpose. In gardens, we don&apos;t manufacture flowers&mdash;we
            create conditions where seeds can flourish. The same principle
            applies to developing leaders in ministry and l
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href="/blog/developing-leaders"
              variant="blackPill"
            >
              Keep Reading
            </ButtonLink>
            <ButtonLink href="/blog" variant="outlinePill">
              The Blog
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageSlider() {
  return (
    <section
      className="relative grid overflow-hidden md:h-[320px] md:grid-cols-3"
      aria-label="C3 Church image carousel"
    >
      {sliderImages.map((slide) => (
        <div key={slide.img} className="relative h-[260px] md:h-full">
          <Image
            src={slide.img}
            alt={slide.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
      <span
        className="absolute left-9 top-1/2 hidden h-9 w-5 -translate-y-1/2 text-white md:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 20 36" className="h-full w-full">
          <path
            d="M18 2 2 18l16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </span>
      <span
        className="absolute right-9 top-1/2 hidden h-9 w-5 -translate-y-1/2 text-white md:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 20 36" className="h-full w-full">
          <path
            d="m2 2 16 16L2 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </span>
    </section>
  );
}

function InstagramStrip() {
  return (
    <section
      className="h-[213px] overflow-hidden bg-[#f4f3f1] pt-[30px] md:h-[380px]"
      aria-label="Instagram videos"
    >
      <div className="flex w-max gap-0">
        {[...reelMedia, ...reelMedia].map((item, index) => (
          <a
            key={`${item.src}-${index}`}
            href="https://www.instagram.com/c3churchglobal/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[183px] w-[153px] shrink-0 overflow-hidden md:h-[350px] md:w-[288px]"
            aria-label="C3 Church Global on Instagram"
          >
            {item.type === "video" ? (
              <video
                className="mt-[38px] h-[107px] w-full object-cover md:mt-[74px] md:h-[202px]"
                src={item.src}
                poster={item.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <Image
                src={item.src}
                alt=""
                fill
                sizes="288px"
                className="object-cover"
              />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

function FriendlyCta() {
  return (
    <section className="flex h-[292px] items-center justify-center bg-black px-5 text-center md:h-[257px]">
      <div className="flex flex-col items-center">
        <SocialLinks compact />
        <h2 className="font-display mt-7 mb-8 max-w-[350px] text-[35px] leading-[1.43] text-white/90 md:max-w-none md:text-[40px]">
          We&rsquo;re A Friendly Bunch
        </h2>
        <ButtonLink href="/contact" variant="whitePill">
          Get In Touch
        </ButtonLink>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="relative flex h-[calc(100svh-113px)] min-h-[675px] items-center justify-center overflow-hidden text-center text-white lg:h-[calc(100svh-147px)] lg:min-h-[760px]">
          <Image
            src="/hero-bg.jpg"
            alt="C3 Church community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 px-5">
            <p className="font-display text-[50px] font-normal leading-[1.18] tracking-normal md:text-[80px]">
              C3 Church;
            </p>
            <h1 className="font-display mt-[72px] text-[50px] font-normal leading-[1.18] tracking-normal md:mt-20 md:text-[80px]">
              A Global Community
            </h1>
          </div>
          <ScrollCue />
        </section>

        <section className="bg-[#fafafa] text-center">
          <div className="mx-auto flex min-h-[602px] max-w-[1200px] flex-col items-center justify-center px-7 py-12 md:min-h-[621px] md:px-0">
            <p className="mb-8 text-[14px] font-semibold uppercase tracking-[1.54px]">
              C3 Church Global is an International Movement of Churches
            </p>
            <h2 className="font-display mb-7 max-w-[600px] text-[35px] font-thin leading-[1.43] md:text-[40px]">
              Christ-Centred, Spirit-Powered &amp; Connect-Driven.
            </h2>
            <p className="mb-8 max-w-[800px] text-[16px] font-light leading-[23px]">
              We want people to know Jesus in a fresh, personal way; to have a
              real-time connection with God. We are a hospitable people &ndash;
              generous and fun and full of life &ndash; and we are committed to
              healthy and growing churches around the world. As an international
              family, our members can walk into any of our C3 Churches and know
              they&rsquo;re home.
            </p>
            <ButtonLink href="/about-c3-church-global" variant="sage">
              Find Out More
            </ButtonLink>
          </div>
        </section>

        <section className="bg-[#f4f2f0] md:grid md:min-h-[554px] md:grid-cols-2">
          <div className="relative h-[381px] md:h-auto">
            <Image
              src="/founders.jpg"
              alt="Ps. Phil and Chris Pringle"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-[9.5%] py-12 md:px-[13.6%]">
            <p className="mb-5 text-[14px] font-semibold uppercase tracking-[1.54px]">
              Our Founders
            </p>
            <h2 className="font-display mb-7 max-w-[494px] text-[35px] leading-[1.35] md:text-[40px]">
              Ps. Phil and Chris Pringle are the founders of the C3 Church Global
              movement.
            </h2>
            <p className="mb-8 max-w-[494px] text-[16px] font-light leading-[1.5]">
              Ever the brave pioneers, they set out from New Zealand in 1980 with
              a dream of starting a contemporary, relevant, and anointed church.
              Ps Phil is passionate about building faith filled, anointed
              churches that are motivated to reach the lost and make disciples.
              Ps Chris, or Mama Chris, as she is affectionately known, brings
              revelation, healing and joy wherever she goes, and everyone who
              meets her will find themselves inspired and encouraged.
            </p>
            <ButtonLink href="/about-phil-chris-pringle">
              Meet the Pringles
            </ButtonLink>
          </div>
        </section>

        <SocialResourceSection />
        <BlogFeature />
        <ImageSlider />
        <FriendlyCta />
      </main>

      <InstagramStrip />
      <Footer />
    </>
  );
}
