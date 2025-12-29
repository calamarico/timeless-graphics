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
      className="bg-black text-white py-24 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
