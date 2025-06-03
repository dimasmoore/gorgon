import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HomeButtonMenu from "@/components/home_ui/home_buttonmenu";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "green" })}>GORGON&nbsp;</h1>
          <h1 className={title()}>
            SMM Panel&nbsp;
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Boost your social media presence with our premium SMM services
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            href="/services"
            className={buttonStyles({ color: "success", radius: "full", variant: "shadow" })}
          >
            View Services
          </Link>
          <Link
            href="/order"
            className={buttonStyles({ variant: "bordered", radius: "full" })}
          >
            Place Order
          </Link>
        </div>
      </section>

      <HomeButtonMenu />
    </div>
  );
}
