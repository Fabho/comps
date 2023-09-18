import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    { id: "1trds", label: "React", content: "yep" },
    { id: "2fdsfd", label: "JS", content: "maybe" },
    { id: "33d2", label: "CSS", content: "nel" },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
