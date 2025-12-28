import { Container } from "../ui/Container";

type Props = {
  id: string;
  children: React.ReactNode;
};

export function Section({ id, children }: Props) {
  return (
    <section id={id} className="py-32">
      <Container>{children}</Container>
    </section>
  );
}
