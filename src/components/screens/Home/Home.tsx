import React from 'react';

import { HomeWorkerOrderCounts, HomeWorkerRatingCounts } from './chart';

import s from './home.module.scss';

const Home: React.FC = () => (
  <section className={s.home}>
    <article className={s.item}>
      <h1>Сотрудники / Количество заказов</h1>
      <HomeWorkerOrderCounts />
    </article>
    <article className={s.item}>
      <h1>Сотрудники / Количество рейтингов</h1>
      <HomeWorkerRatingCounts />
    </article>
  </section>
);

export default Home;
