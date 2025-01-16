import { Navbar } from "@/components/Navbar";
import { QuizCard } from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import { Code2, Database, Cloud, Boxes, Network, Braces, Server } from "lucide-react";

const quizTopics = [
  {
    title: "Object-Oriented Programming",
    description: "Master the fundamentals of OOP including inheritance, polymorphism, and encapsulation.",
    questionCount: 20,
    difficulty: "Beginner",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "C# Fundamentals",
    description: "Learn C# basics, syntax, and core programming concepts.",
    questionCount: 25,
    difficulty: "Beginner",
    icon: <Braces className="w-6 h-6" />,
  },
  {
    title: ".NET Framework",
    description: "Explore the .NET ecosystem, libraries, and best practices.",
    questionCount: 30,
    difficulty: "Intermediate",
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "Blockchain Basics",
    description: "Understand blockchain technology, cryptocurrencies, and smart contracts.",
    questionCount: 15,
    difficulty: "Intermediate",
    icon: <Boxes className="w-6 h-6" />,
  },
  {
    title: "Microservices Architecture",
    description: "Learn about distributed systems and microservices patterns.",
    questionCount: 25,
    difficulty: "Advanced",
    icon: <Network className="w-6 h-6" />,
  },
  {
    title: "Cloud Computing",
    description: "Master cloud concepts with Azure and AWS fundamentals.",
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
            Master Tech Skills with Interactive Quizzes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Test your knowledge across various technology domains with our carefully crafted quizzes.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
            Start Learning Now
          </Button>
        </div>
      </section>

      {/* Quiz Topics Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Quiz Topics</h2>
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