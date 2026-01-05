import { motion } from "framer-motion";

interface VisualBreakProps {
  imageSrc: string;
  alt?: string;
}

export default function VisualBreak({
  imageSrc,
  alt = "Visual moment",
}: VisualBreakProps) {
  return (
    <section className="relative bg-black py-32 sm:py-40 border-t border-white/5 overflow-hidden">
      {/* Transition fade from previous section */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-t from-transparent to-black pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 overflow-hidden">
        <div className="grid grid-cols-12 items-center gap-y-16">

          {/* Left editorial text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 text-neutral-400"
          >
            <p className="text-xs uppercase tracking-[0.3em] mb-5 text-neutral-500">
              A moment in between
            </p>

            <p className="text-base leading-relaxed max-w-xs">
              Light, texture and atmosphere.
              Sometimes a single frame is enough
              to tell a story.
            </p>
          </motion.div>

          {/* Visual block */}
          <div className="col-span-12 md:col-span-8 md:col-start-5 overflow-hidden">
            <div className="relative overflow-hidden">

              {/* Canvas */}
              <div
                className="
                  absolute
                  inset-0
                  sm:-inset-6
                  md:-inset-10
                  rounded-[2.5rem]
                  bg-neutral-900/70
                  border border-white/5
                "
              />

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 80, scale: 1.05 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="
                  relative
                  aspect-[3/2]
                  rounded-[2.5rem]
                  overflow-hidden
                  border border-white/10
                "
              >
                <img
                  src={imageSrc}
                  alt={alt}
                  className="w-full h-full object-cover"
                />

                {/* Light & depth overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/30" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
