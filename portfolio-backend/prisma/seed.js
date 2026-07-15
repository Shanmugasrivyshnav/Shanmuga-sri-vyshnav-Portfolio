import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // --- Admin user (change the password immediately after first login) ---
  const passwordHash = await bcrypt.hash("ChangeMe123!", 10);
  await prisma.adminUser.upsert({
    where: { email: "shanmukhasri00@gmail.com" },
    update: {},
    create: { email: "shanmukhasri00@gmail.com", passwordHash },
  });

  // --- Sample skills — replace with your real ones ---
  await prisma.skill.createMany({
    data: [
      { name: "JavaScript", category: "Language", icon: "SiJavascript", displayOrder: 1 },
      { name: "React.js", category: "Frontend", icon: "FaReact", displayOrder: 1 },
      { name: "HTML5", category: "Frontend", icon: "FaHtml5", displayOrder: 2 },
      { name: "CSS3", category: "Frontend", icon: "FaCss3Alt", displayOrder: 3 },
      { name: "Node.js", category: "Backend", icon: "FaNodeJs", displayOrder: 1 },
      { name: "Git", category: "Tool", icon: "FaGitAlt", displayOrder: 1 },
      { name: "GitHub", category: "Tool", icon: "FaGithub", displayOrder: 2 },
    ],
    skipDuplicates: true,
  });

  // --- Sample project — replace with your real projects ---
  const existing = await prisma.project.findFirst({ where: { title: "Portfolio Website" } });
  if (!existing) {
    await prisma.project.create({
      data: {
        title: "Portfolio Website",
        description: "My personal developer portfolio built with React.",
        techStack: ["React", "styled-components", "react-router-dom"],
        githubUrl: "https://github.com/Shanmugasrivyshnav/Shanmuga-sri-vyshnav-Portfolio",
        liveUrl: "https://shanmuga-sri-vyshnav-portfolio.vercel.app/",
        featured: true,
        displayOrder: 1,
        tags: {
          create: [
            { tag: { connectOrCreate: { where: { name: "react" }, create: { name: "react" } } } },
          ],
        },
      },
    });
  }

  console.log("Seed complete. Admin login: shanmukhasri00@gmail.com / ChangeMe123!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
