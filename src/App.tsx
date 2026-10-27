import { useState, useEffect, ReactNode } from "react"

// --- Icons ---
type IconProps = { size?: number className?: string }
const Icons = {
  Home: ({ size = 24, className = "" }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Box: ({ size = 24, className = "" }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Zap: ({ size = 24, className = "" }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  MessageCircle: ({ size = 24, className = "" }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  ArrowUpRight: ({ size = 24, className = "" }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ),
  ArrowRight: ({ size = 24, className = "" }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  ArrowLeft: ({ size = 24, className = "" }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  ),
  X: ({ size = 24, className = "" }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Cart: ({ size = 24, className = "" }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
}

// --- Data ---
const PRODUCTS = [
  {
    id: 1,
    name: "Home Battery 5kWh",
    type: "Residential",
    output: "5 kW",
    warranty: "10 Years",
    price: "$4,500",
    color: "orange",
    image:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800",
  },
  {
    id: 2,
    name: "PowerGrid 10kWh",
    type: "Prosumer",
    output: "8 kW",
    warranty: "15 Years",
    price: "$8,200",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800",
  },
  {
    id: 3,
    name: "Commercial 50kWh",
    type: "Commercial",
    output: "30 kW",
    warranty: "20 Years",
    price: "$28,000",
    color: "ink",
    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800",
  },
]

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "An absolute game-changer. Our office has been completely self-sufficient since installation.",
    author: "Marcus T.",
    role: "CEO, TechCorp",
  },
  {
    id: 2,
    quote:
      "The design is incredible. It looks like a piece of modern art in our garage, and the app is flawless.",
    author: "Eliza M.",
    role: "Architect",
  },
  {
    id: 3,
    quote:
      "Instant switch-over during blackouts. We don't even notice the grid going down anymore.",
    author: "David K.",
    role: "Homeowner",
  },
]

// --- Reusable Components ---
const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  children: ReactNode
  variant?: "primary" | "secondary" | "brutal" | "brutal-light"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-bold transition-all uppercase tracking-wide text-sm"
  const variants = {
    primary: "bg-ink text-white hover:bg-ink/80 rounded-full",
    secondary: "bg-orange text-white hover:bg-[#e64d00] rounded-full",
    brutal: "bg-ink text-cream brutal-border brutal-shadow rounded-xl",
    "brutal-light": "bg-cream text-ink brutal-border brutal-shadow rounded-xl",
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Calculator State
  const [calcUsage, setCalcUsage] = useState(500) // kWh per month
  const [calcBackup, setCalcBackup] = useState(12) // hours
  const recommendedSize = Math.max(
    5,
    Math.ceil((calcUsage / 30) * (calcBackup / 24) * 1.5),
  )
  const estimatedSavings = Math.round(calcUsage * 0.15 * 12) // rough yearly savings

  useEffect(() => {
    if (isModalOpen || isCartOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [isModalOpen, isCartOpen])

  return (
    <div className="min-h-screen font-sans selection:bg-orange selection:text-white">
      {/* --- Main Content Wrapper --- */}
      <div className="w-full">
        {/* --- Top Bar / Header with Navigation Pill Panel --- */}
        <header className="fixed top-0 left-0 right-0 z-30 px-6 py-4 bg-cream/90 backdrop-blur-md border-b border-ink/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 cursor-pointer shrink-0"
            >
              <div className="w-10 h-10 bg-orange rounded-full brutal-border flex items-center justify-center">
                <Icons.Zap size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">
                Voltaic
              </span>
            </div>

            {/* --- Navigation Pill Panel --- */}
            <nav className="flex items-center gap-1 sm:gap-2 bg-white brutal-border brutal-shadow rounded-full py-1.5 px-3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="p-2 sm:p-2.5 rounded-full hover:bg-cream-dark transition-colors text-ink"
                title="Home"
              >
                <Icons.Home size={20} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("catalog")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="p-2 sm:p-2.5 rounded-full hover:bg-cream-dark transition-colors text-ink"
                title="Lineup"
              >
                <Icons.Box size={20} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("calculator")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="p-2 sm:p-2.5 rounded-full hover:bg-cream-dark transition-colors text-ink"
                title="Calculator"
              >
                <Icons.Zap size={20} />
              </button>
              <div className="w-px h-5 bg-ink/20 my-auto mx-1"></div>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 sm:p-2.5 rounded-full hover:bg-cream-dark transition-colors text-ink relative"
                title="Cart"
              >
                <Icons.Cart size={20} />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-orange rounded-full border-2 border-white"></span>
              </button>
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="primary"
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:inline-flex"
              >
                Get Quote <Icons.ArrowUpRight size={16} />
              </Button>
            </div>
          </div>
        </header>

        <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto overflow-hidden">
          {/* --- Hero Section --- */}
          <section className="relative py-12 md:py-24 mb-24 animate-slide-up">
            <div className="max-w-4xl relative z-10">
              <div className="absolute -top-12 -left-8 w-32 h-32 bg-blue rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
              <div className="absolute top-20 left-1/2 w-48 h-48 bg-orange rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

              <div className="inline-flex items-center gap-3 bg-white brutal-border px-4 py-2 rounded-full mb-8 font-bold text-sm uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                <span className="w-3 h-3 rounded-full bg-orange animate-pulse"></span>
                Next-Gen Storage
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter mb-8 font-sans">
                POWER YOUR{" "}
                <span className="font-serif italic font-normal text-blue">
                  home
                </span>
                <br />
                WITH NEXT-GEN
                <br />
                ENERGY.
              </h1>

              <p className="text-lg md:text-2xl max-w-2xl text-ink/80 mb-12 font-medium">
                Industrial-grade batteries wrapped in editorial design. Gain
                independence from the grid instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  variant="brutal"
                  className="py-4 px-8 text-lg"
                  onClick={() =>
                    document.getElementById("catalog")?.scrollIntoView()
                  }
                >
                  Explore Systems <Icons.ArrowRight size={20} />
                </Button>
                <Button
                  variant="brutal-light"
                  className="py-4 px-8 text-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book a Consultation
                </Button>
              </div>
            </div>

            {/* Orange Badge Graphic */}
            <div className="absolute right-0 top-1/4 hidden lg:flex items-center justify-center w-40 h-40 bg-orange text-white rounded-full brutal-border brutal-shadow animate-[spin_20s_linear_infinite]">
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <path
                  id="textPath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="transparent"
                />
                <text
                  className="text-[12px] font-bold uppercase tracking-widest"
                  fill="currentColor"
                >
                  <textPath href="#textPath" startOffset="0%">
                    • 100% clean energy • zero emissions{" "}
                  </textPath>
                </text>
              </svg>
            </div>
          </section>

          {/* --- 3D Card Carousel / Fan Showcase --- */}
          <section id="catalog" className="mb-32">
            <div className="flex justify-between items-end mb-16 border-b-4 border-ink pb-6">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                The Lineup.
              </h2>
              <span className="hidden sm:block text-xl font-bold font-serif italic text-ink/60">
                Choose your power
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRODUCTS.map((prod, i) => (
                <div key={prod.id} className="group relative">
                  {/* Highlight Specs Card (Neo-Brutalist) */}
                  <div
                    className={`relative z-10 bg-white brutal-border p-6 rounded-2xl flex flex-col h-full brutal-shadow transition-transform duration-300 group-hover:-translate-y-2`}
                  >
                    <div className="h-48 rounded-xl brutal-border overflow-hidden mb-6 relative">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute top-0 right-0 m-3 px-3 py-1 rounded-full brutal-border text-xs font-bold uppercase text-white bg-${prod.color}`}
                      >
                        {prod.type}
                      </div>
                    </div>

                    <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">
                      {prod.name}
                    </h3>
                    <div className="text-2xl font-serif italic text-ink/70 mb-6">
                      {prod.price}
                    </div>

                    <div className="grid grid-cols-2 gap-y-4 mb-8 mt-auto text-sm font-bold border-t-2 border-ink pt-6">
                      <div>
                        <span className="block text-ink/50 uppercase text-[10px] tracking-widest mb-1">
                          Output
                        </span>
                        {prod.output}
                      </div>
                      <div>
                        <span className="block text-ink/50 uppercase text-[10px] tracking-widest mb-1">
                          Warranty
                        </span>
                        {prod.warranty}
                      </div>
                    </div>

                    <Button
                      variant="brutal"
                      className={`w-full bg-${prod.color} text-white border-${
                        prod.color === "ink" ? "white" : "ink"
                      }`}
                      onClick={() => setIsCartOpen(true)}
                    >
                      Order Now
                    </Button>
                  </div>

                  {/* Decorative offset card */}
                  <div
                    className={`absolute inset-0 bg-${prod.color} brutal-border rounded-2xl -z-10 translate-x-3 translate-y-3 opacity-20`}
                  ></div>
                </div>
              ))}
            </div>
          </section>

          {/* --- Highlight Specs & Interactive Energy Calculator --- */}
          <section id="calculator" className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Highlight Card */}
              <div className="bg-blue text-white brutal-border p-10 rounded-[2rem] shadow-[8px_8px_0px_0px_#111111] flex flex-col justify-between">
                <div>
                  <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter leading-none">
                    Calculate
                    <br />
                    <span className="font-serif italic font-normal text-cream">
                      Your Independence
                    </span>
                  </h2>
                  <p className="text-lg opacity-80 mb-12 max-w-sm">
                    Use our dynamic tool to find the exact battery capacity your
                    property needs.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                    <Icons.Zap size={32} />
                  </div>
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-orange brutal-border">
                    <Icons.ArrowUpRight size={32} />
                  </div>
                </div>
              </div>

              {/* Calculator Widget */}
              <div className="bg-white brutal-border rounded-[2rem] p-8 md:p-10 shadow-[8px_8px_0px_0px_#111111]">
                <div className="mb-10">
                  <label className="block text-sm font-bold uppercase tracking-widest mb-4 flex justify-between">
                    Monthly Usage <span>{calcUsage} kWh</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={calcUsage}
                    onChange={(e) => setCalcUsage(parseInt(e.target.value))}
                    className="w-full h-4 bg-cream-dark brutal-border rounded-full appearance-none cursor-pointer accent-orange"
                  />
                </div>

                <div className="mb-12">
                  <label className="block text-sm font-bold uppercase tracking-widest mb-4 flex justify-between">
                    Backup Requirement <span>{calcBackup} hours</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="72"
                    step="2"
                    value={calcBackup}
                    onChange={(e) => setCalcBackup(parseInt(e.target.value))}
                    className="w-full h-4 bg-cream-dark brutal-border rounded-full appearance-none cursor-pointer accent-orange"
                  />
                </div>

                <div className="border-t-4 border-ink pt-8 grid grid-cols-2 gap-6">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-ink/60 mb-2">
                      Recommended
                    </span>
                    <div className="text-4xl font-black text-orange">
                      {recommendedSize} <span className="text-xl">kWh</span>
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-ink/60 mb-2">
                      Est. Yearly Savings
                    </span>
                    <div className="text-4xl font-black text-blue">
                      ${estimatedSavings}
                    </div>
                  </div>
                </div>

                <Button
                  variant="brutal"
                  className="w-full mt-10 py-5 text-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Detailed Quote
                </Button>
              </div>
            </div>
          </section>

          {/* --- Overlapping Testimonial Deck --- */}
          <section className="mb-32">
            <div className="flex justify-between items-end mb-16 border-b-4 border-ink pb-6">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                The Word.
              </h2>
            </div>

            <div className="relative h-[350px] md:h-[300px] w-full max-w-3xl mx-auto">
              {TESTIMONIALS.map((test, idx) => {
                const isActive = idx === activeTestimonial
                const offset =
                  (idx - activeTestimonial + TESTIMONIALS.length) %
                  TESTIMONIALS.length
                return (
                  <div
                    key={test.id}
                    className="absolute top-0 left-0 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
                    style={{
                      transform: `translateY(${offset * 20}px) scale(${1 - offset * 0.05})`,
                      zIndex: 30 - offset,
                      opacity: offset > 2 ? 0 : 1,
                    }}
                    onClick={() =>
                      setActiveTestimonial((idx + 1) % TESTIMONIALS.length)
                    }
                  >
                    <div className="bg-cream-dark brutal-border p-8 md:p-12 rounded-[2rem] shadow-[4px_4px_0px_0px_#111111]">
                      <div className="flex gap-1 text-orange mb-6">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <span key={s}>★</span>
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif italic mb-8 leading-tight">
                        "{test.quote}"
                      </h3>
                      <div className="flex items-center gap-4 border-t-2 border-ink/10 pt-6">
                        <div className="w-12 h-12 bg-orange rounded-full brutal-border"></div>
                        <div>
                          <div className="font-bold uppercase tracking-widest text-sm">
                            {test.author}
                          </div>
                          <div className="text-ink/60 text-sm font-medium">
                            {test.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </main>

        {/* --- Footer --- */}
        <footer className="border-t-4 border-ink pt-16 pb-32 px-6 lg:px-12 w-full flex flex-col md:flex-row justify-between items-start gap-12 bg-cream">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange rounded-full brutal-border flex items-center justify-center">
                <Icons.Zap size={20} className="text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight uppercase">
                Voltaic
              </span>
            </div>
            <p className="font-medium text-ink/70">
              Neo-brutalist energy storage. Power your future without
              compromising on aesthetic.
            </p>
          </div>

          <div className="flex gap-16 font-bold uppercase tracking-widest text-sm">
            <ul className="space-y-4">
              <li>
                <a
                  href="#catalog"
                  className="hover:text-orange transition-colors"
                >
                  Catalog
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-orange transition-colors"
                >
                  Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange transition-colors">
                  Stories
                </a>
              </li>
            </ul>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-orange transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>

      {/* --- Fixed Bottom Pill Action Bar --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-[400px]">
        <div className="bg-ink text-white rounded-full p-2 flex items-center justify-between shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] brutal-border border-white/20 backdrop-blur-md">
          <div className="flex items-center gap-3 pl-4">
            <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide">
              READY TO ORDER?
            </span>
          </div>
          <Button
            variant="secondary"
            className="!py-2.5 !px-5"
            onClick={() => setIsModalOpen(true)}
          >
            Book Call <Icons.MessageCircle size={16} />
          </Button>
        </div>
      </div>

      {/* --- Modals & Drawers --- */}
      {/* Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream w-full max-w-lg rounded-3xl brutal-border shadow-[12px_12px_0px_0px_#111111] p-8 relative animate-slide-up">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 bg-white brutal-border rounded-full hover:bg-cream-dark"
            >
              <Icons.X size={20} />
            </button>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">
              Book a Call
            </h2>
            <p className="text-ink/70 font-medium mb-8">
              Secure your consultation slot today.
            </p>

            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Consultation Booked!")
                setIsModalOpen(false)
              }}
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white brutal-border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="J. Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white brutal-border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="hello@example.com"
                />
              </div>
              <Button
                type="submit"
                variant="brutal"
                className="w-full py-5 bg-orange text-white border-ink text-lg mt-2"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-ink/40 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-md bg-cream h-full border-l-4 border-ink p-8 flex flex-col shadow-2xl relative animate-slide-up"
            style={{ animationName: "slideInRight" }}
          >
            <div className="flex items-center justify-between mb-12 border-b-4 border-ink pb-6">
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 bg-white brutal-border rounded-full hover:bg-cream-dark"
              >
                <Icons.X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-60">
              <Icons.Box size={64} className="mb-6" />
              <p className="text-2xl font-black uppercase tracking-tight">
                Empty Cart
              </p>
              <p className="font-medium mt-2">Add a system from the lineup.</p>
            </div>

            <Button
              variant="brutal"
              className="w-full py-5 bg-ink text-white border-ink text-lg"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
