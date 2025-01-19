"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Bounded } from "../../shared/Bounded";
import { Heading } from "../../Heading";
import { ButtonLink } from "../../ButtonLink";
import clsx from "clsx";

type Props = {
  className: string;
  heading: string;
  description: string;
  image: string;
  bgImage: string;
  fgImage: string;
  href: string;
  btnText: string;
  reverse?: boolean;
  themeOverride?: string; // Allow specific background override
};

function CraftedComponent({
  className,
  heading,
  description,
  image,
  bgImage,
  fgImage,
  href,
  btnText,
  reverse = false,
  themeOverride, // Add theme override prop
}: Props) {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "Dark"
        : "Light";
      return savedTheme || systemTheme || "Blue";
    }
    return "Blue";
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "Dark"
        : "Light";
      localStorage.setItem("theme", systemTheme || "Blue");
      setTheme(systemTheme || "Blue");
    }
  }, []);

  const appliedTheme = themeOverride || theme; // Use override if provided

  return (
    <Bounded
      className={clsx(
        appliedTheme === "Blue" && "bg-texture bg-brand-blue text-white",
        appliedTheme === "Orange" && "bg-texture bg-brand-orange text-white",
        appliedTheme === "Navy" && "bg-texture bg-brand-navy text-white",
        appliedTheme === "Lime" && "bg-texture bg-brand-lime",
        className
      )}
    >
      <section
        className={clsx(
          "flex flex-col md:flex-row",
          reverse && "md:flex-row-reverse", // Reverse layout
          className
        )}
      >
        {/* Text Section */}
        <div className="space-y-3 md:w-1/2">
          <Heading as="h2" size="lg">
            {heading}
          </Heading>

          <div className="max-w-md text-lg leading-relaxed">
            <p>{description}</p>
          </div>

          <ButtonLink href={href} color={theme === "Lime" ? "orange" : "lime"}>
            {btnText}
          </ButtonLink>
        </div>

        {/* Image Section */}
        <div
          className={clsx(
            "grid grid-cols-1 place-items-center md:w-1/2",
            className
          )}
        >
          <div className="col-start-1 row-start-1 transition-transform place-items-center w-full">
            <Image src={bgImage} alt="" width={500} height={150} />
          </div>

          <div className="col-start-1 row-start-1 transition-transform">
            <Image
              src={fgImage}
              alt=""
              className="h-full max-h-[600px] w-auto"
              width={500}
              height={150}
            />
          </div>
        </div>
      </section>
    </Bounded>
  );
}

export default CraftedComponent;
