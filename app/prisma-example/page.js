import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "eake up",
    },
  });
  const allTask = await prisma.task.findMany({
    orderBy: {
      createAt: "desc",
    },
  });
  return allTask;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className="text-5xl mb-3">prisma example</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExample;
