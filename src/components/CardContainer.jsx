import Card from "./Card";
import CardData from "../assets/data/CardData";

function CardContainer() {
  const CardInfo = CardData.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  return (
    <section className="px-10 py-7 flex flex-col items-center justify-center gap-5">
      {CardInfo}
    </section>
  );
}

export default CardContainer;
