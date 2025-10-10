import type { Route } from "./+types/home";
import  HomeLayout  from "../components/layouts/HomeLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portafolio" },
    { name: "description", content: "Portafolio Valentina Cortez!" },
  ];
}

export default function Home() {
  return <HomeLayout />;
}
