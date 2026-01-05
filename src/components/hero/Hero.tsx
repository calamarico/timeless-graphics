import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress del Hero
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax suave (ajusta -80 / 80 si quieres más o menos)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Imagen de fondo con parallax */}
      <motion.div
        style={{
          y,
          backgroundImage: "url('/images/tg-street2.avif')",
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      />


      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      {/* Contenido */}
      {/* Contenido */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        {/* Text block with subtle contrast layer */}
        <div className="relative inline-block">
          <div className="absolute inset-0 -inset-x-6 -inset-y-4 bg-black/25 blur-2xl rounded-full" />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="
              relative
              text-[2.75rem]
              leading-[1.05]
              tracking-tight
              font-semibold
              mb-6
              sm:text-5xl
              md:text-6xl
            "
          >
            Timeless
            <br className="sm:hidden" />
            Visual Stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="
              relative
              text-base
              leading-relaxed
              text-neutral-200
              max-w-[22rem]
              mx-auto
              mb-10
              sm:text-lg
              sm:max-w-2xl
            "
          >
            Audiovisual production, photography and visual storytelling focused on
            emotion, detail and timeless aesthetics.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          …
        </motion.div>
      </div>

      {/* Fade out hacia la siguiente sección */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  );
}
