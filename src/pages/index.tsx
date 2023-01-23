import { type NextPage } from "next";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 bg-slate-900 text-white">
      <h1> Loaders</h1>
      <div className="flex gap-4">
        {/* Simple Rings  */}
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-t-transparent border-b-transparent" />
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-500 border-t-transparent" />
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-500 border-t-transparent border-r-transparent" />
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-500 border-t-transparent border-r-transparent border-b-transparent" />

        {/* Simple Dots  */}
      </div>
      <iframe
        src="https://webchat.botframework.com/embed/somebot454?s=wUySHunhQ7s.eR5PQh4zThJW4BTYzHSa5xP29uGz93fa--qG4Qm6n44"
        style={{
          minWidth: "400px",
          width: "100%",
          minHeight: "500px",
        }}
      ></iframe>
    </div>
  );
};

export default Home;
