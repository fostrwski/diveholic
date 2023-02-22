import ReactGA from "react-ga4";

export default function initGA(id: string) {
  ReactGA.initialize(id);
}
