"use client";
import { skateBoards } from '@/app/data';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { ButtonLink } from '../../ButtonLink';
import { HorizontalLine, VerticalLine } from '../../Lines';
import clsx from 'clsx';

type Props = {
  item: {
    name: string;
    image: string;
    price: number;
    id: number;
    rating: number;
  };
};

const VERTICAL_LINE_CLASSES =
  "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

const HORIZONTAL_LINE_CLASSES =
  "-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";


function SkateBoardContent({ item }: Props) {
  return (
    <div className="relative group mx-auto w-full max-w-72 px-8 pt-2">
        <VerticalLine className={clsx(VERTICAL_LINE_CLASSES,"left-4")}/>
        <VerticalLine className={clsx(VERTICAL_LINE_CLASSES,"right-4")}/>
        <HorizontalLine className={HORIZONTAL_LINE_CLASSES}/>
      {/* Price and Rating */}
      <div className="flex items-center justify-between ~text-sm/2xl">
        <span>${item.price.toFixed(2)}</span>
        <span className="flex gap-2">
          <FaStar className="text-yellow-400" />
          {item.rating}
        </span>
      </div>

      {/* Image */}
      <div className="~mb-1 py-4 overflow-hidden flex justify-center">
        <Image
          className="mx-auto w-[58%] origin-top transform-gpu
            transition-transform duration-500
            ease-in-out group-hover:scale-150"
          src={item.image}
          alt={item.name}
          width={150}
          height={150}
        />
      </div>
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES}/>

      {/* Name */}
      <div className="my-2 text-center font-sans leading-tight ~text-lg/xl">
        <h3>{item.name}</h3>
      </div>

      {/* Button (Hover Effect) */}
      <div
        className="absolute inset-0 z-10 flex items-center
          justify-center opacity-0 transition-opacity duration-200
          group-hover:opacity-100 "
      >
        <ButtonLink href="#">Customize</ButtonLink>
      </div>
    </div>
  );
}

export default SkateBoardContent;
