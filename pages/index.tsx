import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import Controller from '../components/Controller';
import View from '../components/View';

import { media } from '../components/GlobalStyle.css';

const Main = styled.main`
  display: flex;
  ${media['1050']`flex-direction: column;`}
  margin: 45px auto 1rem !important;
  ${media['600']`margin: 20px auto 1rem !important`};
  gap: clamp(0.5rem, 2.5vw, 4rem);
  ${media['1050']`gap: 0.75rem`};
`;

const Footer = styled.footer`
  color: #858585;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border-top: 1px solid #DFDFDF;
  ${media['600']`
    font-size: 14px;
  `}`;

export default function Home() {
  const [selectedAlgo, setSelectedAlgo] = useState(null);
  const [arrivalTime, setArrivalTime] = useState<number[]>([]);
  const [burstTime, setBurstTime] = useState<number[]>([]);
  const [timeQuantum, setTimeQuantum] = useState<number>();
  const [priorities, setPriorities] = useState<number[]>([]);

  return (
    <div>
      <Head>
        <title>OS Process Calculator</title>
      </Head>

      <Main className="container">
        <Controller
          selectedAlgo={selectedAlgo}
          setSelectedAlgo={setSelectedAlgo}
          setArrivalTime={setArrivalTime}
          setBurstTime={setBurstTime}
          setTimeQuantum={setTimeQuantum}
          setPriorities={setPriorities}
        />
        <View
          selectedAlgo={selectedAlgo}
          arrivalTime={arrivalTime}
          burstTime={burstTime}
          timeQuantum={timeQuantum}
          priorities={priorities}
        />
      </Main>

      <Footer className="container">
        <p>© Created by <a 
          href="https://www.arielbatoon.com/"
          target="_blank"
          rel="noopener noreferrer">Ariel Batoon</a> | All Rights Reserved </p>
      </Footer>
    </div>
  );
}
