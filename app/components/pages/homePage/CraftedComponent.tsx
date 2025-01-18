"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Bounded } from '../../shared/Bounded';
import { Heading } from '../../Heading';
import { ButtonLink } from '../../ButtonLink';
import clsx from 'clsx';

type Props = {
  className: string;
  heading: string;
  description: string;
  image: string;
  btnText: string;
  bgImage: string;
  fgImage: string;
  href: string;
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
}: Props) {
  const [theme, setTheme] = useState<string>('Blue'); 

 
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light';

    setTheme(savedTheme || systemTheme || 'Blue'); 
  }, []);

  return (
    <Bounded
      className={clsx(
        theme === 'Blue' && 'bg-texture bg-brand-blue text-white',
        theme === 'Orange' && 'bg-texture bg-brand-orange text-white',
        theme === 'Navy' && 'bg-texture bg-brand-navy text-white',
        theme === 'Lime' && 'bg-texture bg-brand-lime',
        className
      )}
    >
      <section>
        <Heading as='h2' size='lg'>{heading}</Heading>

        <div className="max-w-md text-lg leading-relaxed">
             <p>{description}</p>
        </div>

        <ButtonLink href={href} color={theme === 'Lime' ? "orange" : "lime"}>
            {btnText}
        </ButtonLink>

        <Image src={bgImage} alt="" width={500} height={150} />

        <Image src={fgImage} alt="" className='w-full h-full object-contain' width={300} height={150} />
      </section>
    </Bounded>
  );
}

export default CraftedComponent;
