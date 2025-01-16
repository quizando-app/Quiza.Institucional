import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface QuizCardProps {
  title: string;
  description: string;
  questionCount: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  icon: React.ReactNode;
}

export const QuizCard = ({ title, description, questionCount, difficulty, icon }: QuizCardProps) => {
  const difficultyColor = {
    Beginner: "bg-green-500",
    Intermediate: "bg-yellow-500",
    Advanced: "bg-red-500",
  }[difficulty];

  const difficultyTranslations = {
    Beginner: "Iniciante",
    Intermediate: "Intermediário",
    Advanced: "Avançado",
  }[difficulty];

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:animate-float">
            {icon}
          </div>
          <Badge className={difficultyColor}>{difficultyTranslations}</Badge>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500">
          {questionCount} questões
        </div>
      </CardContent>
    </Card>
  );
};