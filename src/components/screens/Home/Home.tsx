import React from 'react';

import { HomeWorkerOrderCounts, HomeWorkerRatingCounts } from './chart';

import s from './home.module.scss';

const Home: React.FC = () => (
  <section className={s.home}>
    <article className={s.item}>
      <HomeWorkerOrderCounts />
    </article>
    <article className={s.item}>
      <HomeWorkerRatingCounts />
    </article>
  </section>
);

export default Home;
