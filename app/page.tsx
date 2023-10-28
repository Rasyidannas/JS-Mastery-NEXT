import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* this href connect to folder */}
      <Link href="/projects/list">See Projects</Link>
      <h1>Home</h1>
    </main>
  );
}
