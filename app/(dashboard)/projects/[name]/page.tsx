export default function ProjectDetails({ params }) {
  return (
    <main>
      {/* this prams can get from url parameter */}
      <h1>Project {params.name}</h1>
    </main>
  );
}
