import FruitCard, { type Fruit } from "./components/FruitCard";

const fruits: Fruit[] = [
  {
    id: "mango",
    name: "愛文芒果",
    en: "Irwin Mango",
    season: "5 月 – 8 月",
    origin: "台南 玉井",
    desc: "果肉細緻多汁、香氣濃郁，是夏季最受歡迎的台灣水果之一。",
    price: 280,
    unit: "盒（3 台斤）",
    image: "/images/mango-1.jpg",
  },
  {
    id: "pineapple",
    name: "金鑽鳳梨",
    en: "Golden Diamond Pineapple",
    season: "3 月 – 8 月",
    origin: "高雄 大樹",
    desc: "纖維細、甜度高，果心可直接食用，酸甜比例恰到好處。",
    price: 150,
    unit: "顆",
    image: "/images/pineapple-1.jpg",
  },
  {
    id: "wax-apple",
    name: "黑金剛蓮霧",
    en: "Wax Apple",
    season: "12 月 – 3 月",
    origin: "屏東 林邊",
    desc: "外皮深紅漂亮，口感清脆多汁，帶著淡淡的玫瑰香氣。",
    price: 320,
    unit: "盒（2 台斤）",
    image: "/images/wax-apple-1.jpg",
  },
  {
    id: "lychee",
    name: "玉荷包荔枝",
    en: "Yu He Bao Lychee",
    season: "5 月 – 6 月",
    origin: "高雄 大樹",
    desc: "果粒碩大、籽小肉厚，香甜滋味僅在初夏短暫盛產。",
    price: 380,
    unit: "盒（3 台斤）",
    image: "/images/lychee-1.jpg",
  },
  {
    id: "pomelo",
    name: "麻豆文旦",
    en: "Pomelo",
    season: "8 月 – 9 月",
    origin: "台南 麻豆",
    desc: "中秋節的代表水果，果肉粒粒分明，清爽微酸回甘。",
    price: 200,
    unit: "顆",
    image: "/images/pomelo-1.jpg",
  },
  {
    id: "banana",
    name: "旗山香蕉",
    en: "Banana",
    season: "全年皆產",
    origin: "高雄 旗山",
    desc: "綿密香甜、營養豐富，是台灣人日常最熟悉的家鄉味。",
    price: 90,
    unit: "串（約 1.5 台斤）",
    image: "/images/banana-1.jpg",
  },
  {
    id: "guava",
    name: "珍珠芭樂",
    en: "Guava",
    season: "全年皆產",
    origin: "高雄 燕巢",
    desc: "清脆爽口、微甜帶青草香，富含維生素C的國民水果。",
    price: 120,
    unit: "袋（4 顆）",
    image: "/images/guava-1.jpg",
  },
  {
    id: "grape",
    name: "巨峰葡萄",
    en: "Kyoho Grape",
    season: "6 月 – 8 月",
    origin: "彰化 大村",
    desc: "顆粒飽滿、皮薄多汁，酸甜平衡帶有濃郁果香。",
    price: 260,
    unit: "盒（1.5 台斤）",
    image: "/images/grape-1.jpg",
  },
];

const seasons = [
  { title: "春", months: "3 – 5 月", items: "鳳梨、蓮霧、枇杷" },
  { title: "夏", months: "6 – 8 月", items: "芒果、荔枝、西瓜、葡萄" },
  { title: "秋", months: "9 – 11 月", items: "文旦、柿子、火龍果" },
  { title: "冬", months: "12 – 2 月", items: "蓮霧、草莓、桶柑" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-20 pt-24 text-center sm:pt-32">
        <p className="mb-4 text-xs tracking-[0.4em] text-muted">
          TASTE OF TAIWAN
        </p>
        <h1 className="font-serif text-3xl leading-relaxed text-foreground sm:text-4xl">
          嚴選台灣在地當令水果
          <br className="sm:hidden" />
          產地直送，新鮮到府
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-muted sm:text-base">
          我們與台灣各地的果農合作，只在最好的時節採收，
          用心包裝、快速配送，讓每一份甘甜都新鮮送達您手中。
        </p>
        <a
          href="#fruits"
          className="mt-8 inline-block border border-foreground px-8 py-3 text-sm tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          立即選購
        </a>
      </section>

      {/* About */}
      <section id="about" className="border-y border-border/80 bg-surface">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-3">
          {[
            { title: "產地直送", desc: "從果園直接到您家，省去中間層層轉運。" },
            { title: "當季現採", desc: "只販售當令水果，確保最佳風味與甜度。" },
            { title: "新鮮保證", desc: "若收到品質不佳，我們提供退換服務。" },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="font-serif text-base text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fruits grid */}
      <section id="fruits" className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs tracking-[0.4em] text-muted">
            SEASONAL FRUITS
          </p>
          <h2 className="font-serif text-2xl text-foreground">選購水果</h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {fruits.map((fruit) => (
            <FruitCard key={fruit.id} fruit={fruit} />
          ))}
        </div>
      </section>

      {/* Seasonal calendar */}
      <section id="season" className="border-y border-border/80 bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs tracking-[0.4em] text-muted">
              FRUIT CALENDAR
            </p>
            <h2 className="font-serif text-2xl text-foreground">四季水果曆</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {seasons.map((s) => (
              <div key={s.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 font-serif text-lg text-accent">
                  {s.title}
                </div>
                <p className="text-xs text-muted">{s.months}</p>
                <p className="mt-2 text-sm leading-7 text-foreground">
                  {s.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / closing */}
      <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20 text-center">
        <h2 className="font-serif text-2xl text-foreground">
          團購、送禮或大宗採購？
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-muted">
          歡迎與我們聯繫，我們提供客製化的水果箱與宅配到府服務。
        </p>
        <a
          href="mailto:hello@taiwanfruits.tw"
          className="mt-8 inline-block border border-foreground px-8 py-3 text-sm tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          hello@taiwanfruits.tw
        </a>
      </section>
    </main>
  );
}
