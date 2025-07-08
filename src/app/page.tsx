"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/const";
import {
  buttonVariants,
  cardHoverVariants,
  containerVariants,
  itemVariants,
} from "@/const/variants";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Badge } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const interactionsRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  const interactionsInView = useInView(interactionsRef, {
    once: true,
    margin: "-100px",
  });

  const heroY = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: smoothProgress, originX: 0 }}
      />

      <motion.section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />

        <motion.div
          className="text-center z-10 max-w-4xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-4 text-sm px-4 py-2">
              Framer Motion Showcase
            </Badge>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Animações
            <br />
            Incríveis
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Descubra o poder das animações modernas com Framer Motion.
            Interações fluidas, transições elegantes e experiências envolventes.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button size="lg" className="text-lg px-8 py-3">
                Explorar Animações
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Ver Documentação
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-32 right-32 w-16 h-16 bg-accent/30 rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="py-24 px-6 bg-muted/30"
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tipos de Animações
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore diferentes estilos e técnicas de animação
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={feature.delay}
                whileHover="hover"
              >
                <Card className="h-full">
                  <motion.div variants={cardHoverVariants}>
                    <CardContent className="p-6">
                      <motion.div
                        className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-6 h-6 bg-primary rounded" />
                      </motion.div>

                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interactive Demo Section */}
      <motion.section
        ref={interactionsRef}
        className="py-24 px-6"
        initial="hidden"
        animate={interactionsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Interações</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Experimente as animações interativas abaixo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Draggable Element */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">Arraste-me</h3>
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto cursor-grab"
                drag
                dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                dragElastic={0.1}
                whileDrag={{ scale: 1.1, rotate: 5 }}
                whileHover={{ scale: 1.05 }}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              />
              <p className="text-sm text-muted-foreground mt-4">
                Clique e arraste o elemento
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">Botão</h3>
              <motion.button
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-full font-medium"
                whileHover={{
                  scale: 1.1,
                  borderRadius: "8px",
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Passe o mouse aqui
              </motion.button>
              <p className="text-sm text-muted-foreground mt-4">
                Veja a transformação no hover
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
