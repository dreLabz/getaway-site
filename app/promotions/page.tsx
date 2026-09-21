import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Promotions",
  description:
    "Current travel deals and promotions from Travel With Cameron. Limited time offers on cruises, all-inclusive resorts, and international trips starting from $250/person.",
}

const promotions = [
  {
    tag: "Sale",
    title: "Fall Into These Travel Deals",
    destination: "All Destinations",
    description:
      "Lock in your next vacation before prices rise! From ski weekends and Valentine's cruises to bucket-list trips like Istanbul, Delhi, and Japan, there's something for everyone — with flexible payment plans on every trip.",
    price: "Book Now & Save",
    dates: "Limited Time",
    image: "/images/destinations/caribbean/hero.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Adventure",
    title: "Ski Weekend – Denver",
    destination: "Denver, Colorado",
    description:
      "Fresh air, higher vibes. A 4-day, 3-night ski weekend in Colorado with roundtrip flights and hotel accommodations included. Ski excursions booked separately.",
    price: "From $500/person",
    dates: "January 16-19, 2027",
    image: "/images/promotions/denver_ski.jpg",
    chip: "Group trip",
  },
  {
    tag: "Cruise",
    title: "Valentine's Day Super Bowl Cruise",
    destination: "Bahamas Cruise - Carnival",
    description:
      "Football, love, sun, and sea! A 3-day Carnival cruise to the Bahamas with the Super Bowl at sea — perfect for couples and friends. Interior $445, Oceanview $515, Balcony $600. Deposit: $100 per person.",
    price: "From $445/person",
    dates: "February 12-15, 2027",
    image: "/images/destinations/caribbean/gallery-5.jpg",
    chip: "Cruise",
  },
  {
    tag: "Adventure",
    title: "Istanbul Getaway",
    destination: "Istanbul, Turkey",
    description:
      "Where East meets West. 8 days and 7 nights of historic landmarks, vibrant markets, and incredible cuisine, with roundtrip flights and hotel accommodations included. Deposit: $300 per person.",
    price: "From $1,700/person",
    dates: "Feb 28 – March 7, 2027",
    image: "/images/promotions/istanbul_mosque.jpg",
    chip: "Group trip",
  },
  {
    tag: "Adventure",
    title: "Delhi Getaway",
    destination: "Delhi, India",
    description:
      "A journey through culture, history, and beauty. 8 days and 7 nights of iconic landmarks, vibrant markets, and bold flavors, with roundtrip flights and hotel accommodations included. Deposit: $300 per person.",
    price: "From $1,500/person",
    dates: "Feb 28 – March 7, 2027",
    image: "/images/promotions/delhi_humayun_tomb.jpg",
    chip: "Group trip",
  },
  {
    tag: "Beach Getaway",
    title: "Curaçao Getaway",
    destination: "Curaçao",
    description:
      "Dutch charm, Caribbean soul. 5 days and 4 nights with roundtrip flights, an all-inclusive resort, and airport transfers included. Deposit: $300 per person.",
    price: "From $1,700/person",
    dates: "April 1-5, 2027",
    image: "/images/promotions/curacao_willemstad.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Adventure",
    title: "Thailand Getaway – Phuket",
    destination: "Phuket, Thailand",
    description:
      "Beaches, culture, and adventure in Phuket. Flights and hotel included, with excursion options available. Deposit: $350 per person.",
    price: "From $1,700/person",
    dates: "April 6-13, 2027",
    image: "/images/destinations/southeast-asia/gallery-2.jpg",
    chip: "Group trip",
  },
  {
    tag: "Cruise",
    title: "Virgin Voyages – Key West & Bahamas",
    destination: "Key West & Bahamas - Virgin Voyages (18+)",
    description:
      "An adults-only 4-day cruise aboard Scarlet Lady. Roundtrip flights, food, and entertainment included. Interior $780, Oceanview $800, Balcony $840. Deposit: $200 per person.",
    price: "From $780/person",
    dates: "April 8-12, 2027",
    image: "/images/promotions/key_west_ocean.jpg",
    chip: "Cruise",
  },
  {
    tag: "Adventure",
    title: "Panama Getaway",
    destination: "Panama City, Panama",
    description:
      "City meets paradise. Explore Casco Viejo and the Panama City skyline with roundtrip flights, hotel accommodations, and airport transportation included. Deposit: $225 per person.",
    price: "From $1,150/person",
    dates: "April 10-14, 2027",
    image: "/images/promotions/panama_city_skyline.jpg",
    chip: "Group trip",
  },
  {
    tag: "Adventure",
    title: "Lima Getaway",
    destination: "Lima, Peru",
    description:
      "A city of history, flavor, and unforgettable views. 6 days and 5 nights with roundtrip flights and hotel accommodations included. Deposit: $300 per person.",
    price: "From $1,375/person",
    dates: "April 29 – May 4, 2027",
    image: "/images/promotions/lima_coast.jpg",
    chip: "Group trip",
  },
  {
    tag: "Beach Getaway",
    title: "Cancun Summer Getaway",
    destination: "Cancun, Mexico",
    description:
      "Turquoise waters, endless fun. 5 days and 4 nights with roundtrip flights, an all-inclusive resort, and airport transfers included. Deposit: $225 per person.",
    price: "From $1,200/person",
    dates: "July 31 – August 4, 2027",
    image: "/images/promotions/labor_day_cancun.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Cruise",
    title: "Carnival Tropicale – Spring 2028",
    destination: "Carnival Tropicale from Galveston",
    description:
      "A tropical vacation with a twist! Carnival's newest ship sails from Galveston to the Paradise Collection — Half Moon Cay, Celebration Key, Isla Tropicale (Roatán), and Puerta Maya (Cozumel).",
    price: "Inquire Today",
    dates: "Spring 2028 Sailings",
    image: "/images/promotions/carnival_sunset_ship.jpg",
    chip: "Cruise",
  },
  {
    tag: "Adventure",
    title: "A Taste of Japan",
    destination: "Tokyo, Kyoto & Osaka",
    description:
      "A 9-day, 8-night guided adventure through Japan's three most iconic cities. Roundtrip international flights, bullet-train travel between cities, 7 nights in hotels, and guided walking tours in Tokyo and Kyoto all included.",
    price: "From $2,600/person",
    dates: "May 25 – June 2, 2027",
    image: "/images/promotions/japan_pexels.jpg",
    chip: "Group trip",
  },
  {
    tag: "Luxury",
    title: "The Ultimate Euro Escape",
    destination: "Greek Isles Cruise (18+)",
    description:
      "An adults-only luxury cruise through the Greek Isles aboard Virgin Voyages. Sail from Athens to Santorini, Crete, and Ephesus (Turkey), with an overnight in Mykonos. Deposit: $350 per person.",
    price: "From $1,400/person",
    dates: "July 4-11, 2027",
    image: "/images/destinations/mediterranean/hero.jpg",
    chip: "Cruise",
  },
  {
    tag: "Holiday Special",
    title: "Mother's Day Getaway – Tulum",
    destination: "Tulum, Mexico",
    description:
      "Celebrate Mom in Tulum. Roundtrip flights, airport transfers, a 4-star all-inclusive resort, welcome cocktail party, and a group excursion all included. Deposit: $225 per person.",
    price: "From $1,300/person",
    dates: "May 7-10, 2027",
    image: "/images/promotions/tulum_resort.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Cruise",
    title: "Western Caribbean Cruise",
    destination: "New Orleans → Cozumel, Grand Cayman & Jamaica",
    description:
      "A 7-night Western Caribbean sailing from New Orleans aboard Royal Caribbean's Mariner of the Seas, with stops in Cozumel, George Town (Grand Cayman), and Falmouth, Jamaica. Deposit: $250 per person.",
    price: "From $790/person",
    dates: "April 17-24, 2027",
    image: "/images/promotions/large_cruise_ship.jpg",
    chip: "Cruise",
  },
  {
    tag: "Family",
    title: "Disney Halloween & Holiday Cruises",
    destination: "Disney Cruise Line · from Florida",
    description:
      "Halloween on the High Seas and Very Merrytime Cruises are back! Sail from Florida to tropical paradise aboard special Disney cruises hosted by Mickey and Minnie — spooktacular fall fun or fa-la-la holiday magic, Disney style.",
    price: "Inquire Today",
    dates: "Fall & Holiday Sailings",
    image: "/images/promotions/halloween_holiday_deal.jpg",
    chip: "Cruise",
  },
  {
    tag: "Luxury",
    title: "The Luxury Escape - Dubai",
    destination: "Dubai",
    description:
      "Roundtrip flights from Atlanta and 4-star resort accommodations. Deposit: $300 per person.",
    price: "From $1,200/person",
    dates: "October 4-11, 2026",
    image: "/images/promotions/dubai_luxury.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Adventure",
    title: "Costa Rica Escape",
    destination: "Costa Rica",
    description:
      "Roundtrip flights, 4-star all-inclusive resort, and airport transfers. Deposit: $300 per person.",
    price: "From $1,200/person",
    dates: "December 5-8, 2026",
    image: "/images/promotions/costarica_adventure.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Beach Getaway",
    title: "4 Night Getaway in Belize",
    destination: "Belize",
    description:
      "Flights from ATL, 4-star resort, and airport transportation. Deposit: $300 per person.",
    price: "From $1,100/person",
    dates: "October 21-25, 2026",
    image: "/images/promotions/belize.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Beach Getaway",
    title: "Puerto Rican Escape",
    destination: "San Juan, Puerto Rico",
    description:
      "Roundtrip flights and 4-star resort accommodations. No passport required! Deposit: $250 per person.",
    price: "From $750/person",
    dates: "November 7-10, 2026",
    image: "/images/promotions/puertorico.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Beach Getaway",
    title: "Punta Cana Getaway",
    destination: "Punta Cana, Dominican Republic",
    description:
      "Non-stop flights from ATL, 4-star all-inclusive resort, and airport transportation included. Deposit: $225 per person.",
    price: "From $1,200/person",
    dates: "Oct 26-31 & Nov 27-30, 2026",
    image: "/images/promotions/puntacana_fall.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Adventure",
    title: "The Asian Escape",
    destination: "Bangkok & Phuket, Thailand",
    description:
      "Roundtrip flights from ATL, 3 nights in Bangkok and 3 nights in Phuket. Packages start at $1,600 per person.",
    price: "From $1,600/person",
    dates: "October 10-27, 2026",
    image: "/images/promotions/bangkok_phuket.jpg",
    chip: "Group trip",
  },
  {
    tag: "Holiday Special",
    title: "Thanksgiving in Dubai",
    destination: "Dubai",
    description:
      "Round-trip flights, 4-star hotel accommodation, and daily breakfast included. Limited spots available.",
    price: "From $1,600/person",
    dates: "November 24 - December 1, 2026",
    image: "/images/promotions/dubai_thanksgiving.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Holiday Special",
    title: "Holidays at Disney",
    destination: "Disney World, Orlando",
    description:
      "Disney Resort (3 nights), 2 day park tickets, and Disney park transportation. Deposit: $100 per person.",
    price: "From $455/person",
    dates: "Nov 23-25 & Dec 6-8, 2026",
    image: "/images/promotions/disney.jpg",
    chip: "Theme park",
  },
  {
    tag: "Christmas",
    title: "Cancun Christmas",
    destination: "Cancun, Mexico",
    description:
      "Round-trip flights, all-inclusive beach resort, airport transfers, and all meals, drinks, and activities included.",
    price: "From $1,550/person",
    dates: "December 22-26, 2026",
    image: "/images/promotions/cancun.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Christmas",
    title: "Christmas in Punta Cana",
    destination: "Punta Cana, Dominican Republic",
    description:
      "Round-trip flights, all-inclusive resort, airport transfers, meals, drinks, and activities. Deposit: $300 per person.",
    price: "From $1,500/person",
    dates: "December 22-26, 2026",
    image: "/images/promotions/puntacana_xmas_resort.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Christmas",
    title: "Puerto Rico Christmas Getaway",
    destination: "Puerto Rico",
    description:
      "Escape to sunny Puerto Rico this Christmas. Round-trip flights and resort accommodations. No passport required!",
    price: "From $1,200/person",
    dates: "December 23-26, 2026",
    image: "/images/promotions/puertorico.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Cruise",
    title: "Holiday Cruise Getaway - Bahamas",
    destination: "Bahamas Cruise",
    description:
      "4 day Bahamas cruise departing from Miami. Stops at Half Moon Cay and Celebration Key. Deposit: $50 per person.",
    price: "From $565/person",
    dates: "December 24-28, 2026",
    image: "/images/promotions/bahamas_cruise.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "Carnival Firenze & Miracle Sailings",
    destination: "Caribbean Cruise",
    description:
      "2027/2028 sailings now unlocked. Carnival Firenze to New York and Port Canaveral, Carnival Miracle to Baltimore. Unforgettable Caribbean journeys.",
    price: "Search for pricing",
    dates: "2027/2028 Sailings",
    image: "/images/promotions/carnival_cruise.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "Carnival Cruise Adventure",
    destination: "Bahamas & Celebration Key",
    description:
      "Budget-friendly Bahamas sailing with multiple dates and ports available. Two incredible stops, one unforgettable vacation.",
    price: "From $250/person",
    dates: "November 2-6, 2026",
    image: "/images/promotions/carnival_cruise.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "MLK Weekend Getaway",
    destination: "Key West & Bimini - Virgin Voyages",
    description:
      "Virgin Voyages adults-only (18+) cruise to Key West and Bimini. Luxury, modern, and unapologetic. Deposits from $150.",
    price: "From $516/person",
    dates: "January 14-18, 2027",
    image: "/images/promotions/mlk_cruise_sunset.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "Spring Break at Sea",
    destination: "Icon of the Seas, Miami",
    description:
      "The ultimate spring break on Royal Caribbean's Icon of the Seas departing from Miami. Kids sail free — pay only taxes & fees!",
    price: "From $1,400/person",
    dates: "April 3-10 & April 10-17, 2027",
    image: "/images/promotions/cruise_sunset.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "Halloween Cruise",
    destination: "Utopia of the Seas",
    description:
      "Spooky fun meets sunny skies on Royal Caribbean's Utopia of the Seas! Costumes, cocktails, and Caribbean good times. Deposits from $100.",
    price: "From $600/person",
    dates: "Oct 30 - Nov 2, 2026",
    image: "/images/promotions/halloween_ship.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "Holiday Cruise - Christmas & New Year's",
    destination: "Holiday Cruise from Orlando",
    description:
      "Choose your holiday adventure — Christmas Cruise (Dec 24-28) or New Year's Cruise (Dec 31-Jan 4). Departs from Orlando, Florida.",
    price: "From $675/person",
    dates: "Dec 2026 - Jan 2027",
    image: "/images/promotions/holiday_cruise_clean.jpg",
    chip: "Cruise",
  },
  {
    tag: "Beach Getaway",
    title: "Jamaica Winter Escape",
    destination: "Jamaica",
    description:
      "Escape to Jamaica this winter. Roundtrip flights, airport transfers, and a 4-star all-inclusive resort included. Deposit: $225 per person.",
    price: "From $1,350/person",
    dates: "Jan 21-24 & Feb 6-9, 2027",
    image: "/images/promotions/jamaica.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Adventure",
    title: "Belize Winter Escape",
    destination: "Belize",
    description:
      "Discover Belize this winter. Roundtrip flights, airport transfers, and a 4-star resort included. Deposit: $225 per person.",
    price: "From $1,300/person",
    dates: "Jan 5-9 & Feb 9-13, 2027",
    image: "/images/destinations/central-america/hero.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Beach Getaway",
    title: "San Juan Last-Minute Getaway",
    destination: "San Juan, Puerto Rico",
    description:
      "A last-minute San Juan escape — roundtrip airfare, hotel accommodations, and time to explore Old San Juan. Deposit: $225 per person.",
    price: "From $885/person",
    dates: "October 15-18, 2026",
    image: "/images/promotions/puertorico.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Cruise",
    title: "Pre-Christmas Cruise",
    destination: "from Miami or Orlando",
    description:
      "Set sail into the holiday spirit before Christmas! A 3-night getaway with dining, live entertainment, activities, and pools. Deposit: $100 per person.",
    price: "From $265/person",
    dates: "December 21-24, 2026",
    image: "/images/promotions/cruise_sunset.jpg",
    chip: "Cruise",
  },
]

export default function PromotionsPage() {
  return (
    <section className="min-h-screen">
      {/* Header */}
      <div className="bg-sky-wash">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
            Current Offers
          </p>
          <h1 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-6">
            Promotions
          </h1>
          <p className="font-body text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed mb-16">
            These deals move fast. If something catches your eye, reach out to
            Cameron before it&apos;s <span className="font-display italic font-medium text-[var(--color-sky)]">gone</span>.
          </p>
        </div>
      </div>

      {/* Promotions grid */}
      <div className="bg-cream-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[var(--color-sky-200)]/30 shadow-sm hover:shadow-md card-lift bg-white/80 backdrop-blur-sm overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-sunset)] bg-[var(--color-sunset)]/10 px-3 py-1 rounded-full mb-4">
                      {promo.tag}
                    </span>
                    <h2 className="font-body text-xl font-bold tracking-tight text-[var(--color-ink)] mb-3">
                      {promo.title}
                    </h2>
                    <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-2">
                      {promo.description}
                    </p>
                    <p className="font-body text-xs text-[var(--color-sky)] tracking-wide mb-6">
                      {promo.dates}
                    </p>
                  </div>
                  <div>
                    <div className="border-t border-[var(--color-sky-200)]/30 pt-6 mb-6">
                      <p className="font-body text-2xl font-bold text-[var(--color-ink)] mb-1">
                        {promo.price}
                      </p>
                    </div>
                    <Link
                      href={`/contact?destination=${encodeURIComponent(promo.destination)}&type=${encodeURIComponent(
                        promo.chip === "Cruise" ? "Cruise" : promo.chip === "Theme park" ? "Theme Park" : "All-Inclusive Resort"
                      )}`}
                      className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body block text-center"
                    >
                      Claim This Deal
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
