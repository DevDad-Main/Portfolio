import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  //#region Backend
  {
    name: "Node.js",
    level: 80,
    category: "backend",
  },
  {
    name: "Express",
    level: 75,
    category: "backend",
  },
  {
    name: "MongoDB",
    level: 70,
    category: "backend",
  },
  {
    name: "PostgreSQL",
    level: 65,
    category: "backend",
  },
  {
    name: "GraphQL",
    level: 80,
    category: "backend",
  },
  //#endregion

  //#region Tools
  {
    name: "Docker",
    level: 2,
    category: "tools",
  },
  {
    name: "VS Code (Vimium Plugin)",
    level: 70,
    category: "tools",
  },
  {
    name: "Neovim (BTW)",
    level: 80,
    category: "tools",
  },
  {
    name: "TMUX",
    level: 55,
    category: "tools",
  },
  {
    name: "Git/Github",
    level: 70,
    category: "tools",
  },
  //#endregion

  //#region Frontend
  {
    name: "HTML",
    level: 65,
    category: "frontend",
  },
  {
    name: "CSS",
    level: 40,
    category: "frontend",
  },
  {
    name: "TAILWINDCSS",
    level: 35,
    category: "frontend",
  },
  {
    name: "React",
    level: 30,
    category: "frontend",
  },
  //#endregion
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/7 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
