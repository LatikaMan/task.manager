export default async function Home() {

  const res = await fetch("http://localhost:3001/tasks", {
    cache: "no-store"
  });

  const data = await res.json();

  return (
    <div>
      <h1>Tasks</h1>

      {data.map((task: any) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
}

