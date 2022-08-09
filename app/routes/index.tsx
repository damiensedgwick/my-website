import { Header } from "~/components/header";
import { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/index.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <>
      <Header />
    </>
  );
}
