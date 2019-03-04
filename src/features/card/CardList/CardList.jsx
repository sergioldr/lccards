import React from "react";
import { Card, Segment } from "semantic-ui-react";
import PlayerCard from "./PlayerCard";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const CardList = ({ cards, loading }) => {
  return (
    <div>
      <Segment style={{ backgroundColor: "initial", border: "0px" }}>
        {loading && <LoadingComponent />}
        <Card.Group itemsPerRow={4}>
          {cards &&
            cards.map(card => (
              <PlayerCard key={card.id} card={card} />
            ))}
        </Card.Group>
      </Segment>
    </div>
  );
};

export default CardList;
