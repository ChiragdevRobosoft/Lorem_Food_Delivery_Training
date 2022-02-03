import Footer from "../components/common/footer";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Footer",
  component: Footer,
};

export const DefaultFooter = () => (
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
);
