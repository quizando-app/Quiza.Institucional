import { Navbar } from "@/components/Navbar";
import { QuizCard } from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import { Code2, Database, Cloud, Boxes, Network, Braces, Server } from "lucide-react";

const quizTopics = [
  {
    title: "Programação Orientada a Objetos",
    description: "Domine os fundamentos de POO incluindo herança, polimorfismo e encapsulamento.",
    questionCount: 20,
    difficulty: "Beginner",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "Fundamentos de C#",
    description: "Aprenda o básico de C#, sintaxe e conceitos fundamentais de programação.",
    questionCount: 25,
    difficulty: "Beginner",
    icon: <Braces className="w-6 h-6" />,
  },
  {
    title: "Framework .NET",
    description: "Explore o ecossistema .NET, bibliotecas e melhores práticas.",
    questionCount: 30,
    difficulty: "Intermediate",
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "Fundamentos de Blockchain",
    description: "Entenda a tecnologia blockchain, criptomoedas e contratos inteligentes.",
    questionCount: 15,
    difficulty: "Intermediate",
    icon: <Boxes className="w-6 h-6" />,
  },
  {
    title: "Arquitetura de Microsserviços",
    description: "Aprenda sobre sistemas distribuídos e padrões de microsserviços.",
    questionCount: 25,
    difficulty: "Advanced",
    icon: <Network className="w-6 h-6" />,
  },
  {
    title: "Computação em Nuvem",
    description: "Domine conceitos de nuvem com fundamentos de Azure e AWS.",
    questionCount: 35,
    difficulty: "Advanced",
    icon: <Cloud className="w-6 h-6" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Domine Habilidades Técnicas com Quizzes Interativos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Teste seus conhecimentos em várias áreas de tecnologia com nossos quizzes cuidadosamente elaborados.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
            Comece a Aprender Agora
          </Button>
        </div>
      </section>

      {/* Quiz Topics Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tópicos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizTopics.map((topic) => (
              <QuizCard
                key={topic.title}
                title={topic.title}
                description={topic.description}
                questionCount={topic.questionCount}
                difficulty={topic.difficulty as "Beginner" | "Intermediate" | "Advanced"}
                icon={topic.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;