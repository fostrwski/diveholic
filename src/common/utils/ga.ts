import * as ReactGA from "react-ga4";

export default function initGA(id: string) {
  if (!process.env.NODE_ENV === "production") return;

  ReactGA.initialize(id);
}
