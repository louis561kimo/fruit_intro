"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export type Fruit = {
  id: string;
  name: string;
  en: string;
  season: string;
  origin: string;
  desc: string;
  price: number;
  unit: string;
  image: string;
};

export default function FruitCard({ fruit }: { fruit: Fruit }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: fruit.id,
      name: fruit.name,
      price: fruit.price,
      unit: fruit.unit,
      image: fruit.image,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="flex flex-col bg-surface text-center transition-colors hover:bg-background">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={fruit.image}
          alt={fruit.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-center px-6 py-8">
        <h3 className="font-serif text-base text-foreground">{fruit.name}</h3>
        <p className="mt-1 text-[11px] tracking-wide text-muted">{fruit.en}</p>
        <p className="mt-4 text-xs leading-6 text-muted">{fruit.desc}</p>
        <div className="mt-5 flex flex-col gap-1 border-t border-border pt-4 text-[11px] text-muted">
          <span>產季 {fruit.season}</span>
          <span>產地 {fruit.origin}</span>
        </div>
        <p className="mt-5 font-serif text-lg text-accent">
          NT$ {fruit.price}
          <span className="ml-1 text-xs text-muted">/ {fruit.unit}</span>
        </p>
        <button
          onClick={handleAdd}
          className="mt-5 w-full border border-foreground py-2.5 text-xs tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          {justAdded ? "已加入購物車" : "加入購物車"}
        </button>
      </div>
    </div>
  );
}
