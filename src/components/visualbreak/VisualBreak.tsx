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
    <section className="bg-black py-28 sm:py-36 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-12 items-center gap-y-12">
          
          {/* Left editorial text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              col-span-12
              md:col-span-4
              text-neutral-400
            "
          >
            <p className="text-sm uppercase tracking-widest mb-4 text-neutral-500">
              A moment in between
            </p>
            <p className="text-base leading-relaxed max-w-xs">
              Light, texture and atmosphere.
              Sometimes a single frame is enough to tell a story.
            </p>
          </motion.div>

          {/* Visual block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              col-span-12
              md:col-span-8
              md:col-start-5
            "
          >
            <div className="relative">
              {/* Canvas */}
              <div
                className="
                  absolute
                  -inset-8
                  rounded-3xl
                  bg-neutral-900/70
                  border border-white/5
                "
              />

              {/* Image */}
              <div
                className="
                  relative
                  aspect-[3/2]
                  rounded-3xl
                  overflow-hidden
                  border border-white/10
                "
              >
                <img
                  src={imageSrc}
                  alt={alt}
                  className="w-full h-full object-cover"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
