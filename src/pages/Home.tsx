import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import styled from "styled-components";
import React from "react";

const HomeImage = styled.img`
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const HomeTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  p,
  em {
    font-weight: normal;
    font-size: 16px;
  }
`;

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ya-tic-tac-toe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <HomeTitle>
          Yet Another Tic-Tac-Toe
          <p>Built by Kyle Peeler & Nick Hubbard</p>
          <em>Coming soon!</em>
        </HomeTitle>
        <HomeImage src="/assets/ya-ttt-org-icon.png" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
