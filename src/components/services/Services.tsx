import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Weddings",
    description:
      "Cinematic storytelling that captures emotion, movement and the essence of your day.",
  },
  {
    title: "Family & Babies",
    description:
      "Natural, warm photography focused on genuine moments and connection.",
  },
  {
    title: "Portraits",
    description:
      "Minimalist portraits with a strong focus on light, texture and expression.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-20 sm:py-24 border-t border-white/10"
    >
      <div className="max-w-5xl sm:max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12 text-center sm:text-left">
          Services
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
