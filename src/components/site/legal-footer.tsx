import { Container } from "./container";

export function LegalFooter() {
  return (
    <footer className="py-8">
      <Container className="text-[13px] text-body-faint">
        © {new Date().getFullYear()} CoreSetup Studio
      </Container>
    </footer>
  );
}
