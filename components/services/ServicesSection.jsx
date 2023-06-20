import Card from "./Card";
import CaptionTitle from "../CaptionTitle";
import { cardData } from "@/data/dummy";

export default function ServicesSection() {
    return (
        <section
            className="flex flex-col justify-between gap-20 px-5 py-12 sm:mx-10 lg:px-20"
            id="Services"
        >
            <CaptionTitle
                firstWord="Our"
                secondWord="Services"
                subtitle="Layanan Kami"
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {cardData.map(
                    (card, index) => {
                        return (
                            <Card
                                key={
                                    index
                                }
                                title={
                                    card.title
                                }
                                cost={
                                    card.cost
                                }
                                calculated={
                                    card.calculated
                                }
                                img={
                                    card.img
                                }
                            />
                        );
                    }
                )}
            </div>
        </section>
    );
}
