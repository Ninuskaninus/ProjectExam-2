import React from "react";
import {
  VenuesContainer,
  PageContainer,
  Hero,
  Venues,
  VenuesHead,
} from "./index.styles";
import HeroSearch from "../../components/heroSearch/index.jsx";
import Icons from "../../components/icons/index.jsx";
import FilterBtn from "../../components/buttons/filterBtn/index.jsx";
import Card from "../../components/card/index.jsx";

export default function Home() {
  return (
    <PageContainer>
      <Hero>
        <HeroSearch />
      </Hero>
      <Venues>
        <VenuesHead>
          <div>
            <Icons.Arrow />
            <h1>Browse venues</h1>
          </div>
          <div>
            <FilterBtn />
          </div>
        </VenuesHead>
        <VenuesContainer>
          <Card />
        </VenuesContainer>
      </Venues>
    </PageContainer>
  );
}
