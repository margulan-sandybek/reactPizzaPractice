import React from 'react';
import module from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={module.root}>
      <h1>
        <span>☹️</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={module.description}>
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
