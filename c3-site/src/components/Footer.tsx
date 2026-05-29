import Image from "next/image";
import Link from "next/link";

const aboutLinks = [
  { label: "C3 Church Global", href: "/about-c3-church-global" },
  { label: "Phil & Chris Pringle", href: "/about-phil-chris-pringle" },
  { label: "What We Believe", href: "/what-we-believe" },
  { label: "BLOG", href: "/blog", emphasis: true },
  { label: "EVENTS", href: "/events", emphasis: true },
  { label: "GIVING", href: "/giving", emphasis: true },
  { label: "NEW TO FAITH", href: "/new-to-faith", emphasis: true },
  { label: "FIND A CHURCH", href: "/find-a-church", emphasis: true },
  { label: "CONTACT", href: "/contact", emphasis: true },
];

const regions = [
  { label: "Americas", href: "/region-c3-americas" },
  { label: "Australia", href: "/region-c3-australia" },
  { label: "Canada", href: "/region-c3-canada" },
  { label: "East Asia", href: "/region-c3-east-asia" },
  { label: "East & West Africa", href: "/region-c3-east-and-west-africa" },
  { label: "Europe", href: "/region-c3-europe" },
  { label: "Indonesia", href: "/region-c3-indonesia" },
  {
    label: "Mainland Southeast Asia",
    href: "/region-c3-mainland-southeast-asia",
  },
  { label: "Pacific", href: "/region-c3-pacific" },
  { label: "Reach Network", href: "/region-c3-reach-network" },
  { label: "South Asia", href: "/region-c3-south-asia" },
  { label: "Philippines", href: "/region-c3-philippines" },
  { label: "Southern Africa", href: "/region-c3-southern-africa" },
];

const training = [
  { label: "Academy", href: "/academy" },
  { label: "Xpress", href: "/xpress" },
  { label: "Launch", href: "/launch" },
];

const login = [
  { label: "Resource Hub", href: "/resource-hub-login" },
  { label: "Database login", href: "https://database.c3churchglobal.com/login" },
  { label: "Regional Office", href: "/regional-office-login" },
];

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; emphasis?: boolean }[];
}) {
  return (
    <div className="w-full">
      <h4 className="mb-3 text-[14px] font-semibold uppercase leading-5 tracking-[1.54px] text-black">
        {title}
      </h4>
      <ul>
        {links.map((link) => (
          <li key={`${title}-${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className={`block text-[15px] leading-[30px] tracking-[1.54px] text-black transition-opacity hover:opacity-60 ${
                link.emphasis ? "font-semibold uppercase" : "font-light"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f4f3f1]">
      <div className="hidden h-[480px] items-start px-10 pt-[49px] lg:flex">
        <Link href="/" className="relative h-[269px] w-[200px]">
          <Image
            src="/footer-mark.png"
            alt="C3 Church Global"
            fill
            sizes="200px"
            className="object-contain"
          />
        </Link>

        <div className="ml-[208px] grid w-[952px] grid-cols-4 gap-0">
          <FooterCol title="About" links={aboutLinks} />
          <FooterCol title="Regions" links={regions} />
          <FooterCol title="Training" links={training} />
          <FooterCol title="Login" links={login} />
        </div>
      </div>

      <div className="flex h-[110px] items-start justify-center px-5 pt-[21px] lg:hidden">
        <Link href="/" className="relative h-[68px] w-full max-w-[350px]">
          <Image
            src="/footer-logo-wide.webp"
            alt="C3 Church Global"
            fill
            sizes="350px"
            className="object-contain"
          />
        </Link>
      </div>

      <div className="flex min-h-[102px] flex-col items-center justify-start bg-black pt-[9px] text-center text-[14px] font-semibold uppercase tracking-[1.54px] text-white/90 lg:grid lg:min-h-10 lg:grid-cols-3 lg:items-center lg:px-[7.8%] lg:pt-0 lg:text-left">
        <p>All Rights Reserved.</p>
        <p className="mt-0 lg:text-center">
          &copy; 2021 C3 Church.{" "}
          <Link href="/privacy-policy" className="hover:opacity-70">
            Privacy Policy
          </Link>
        </p>
        <p className="lg:text-right">Powered by: Fishbulb Solutions</p>
      </div>
    </footer>
  );
}
