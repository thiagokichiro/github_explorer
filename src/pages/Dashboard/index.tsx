import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/52216493?s=460&u=6398b3a3fc0e8991e918105c4f2d41d5a3b10987&v=4"
            alt="Thiago"
          />
          <div>
            <strong>thiagokichiro/teste</strong>
            <p>testetestetestetesteteste </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/52216493?s=460&u=6398b3a3fc0e8991e918105c4f2d41d5a3b10987&v=4"
            alt="Thiago"
          />
          <div>
            <strong>thiagokichiro/teste</strong>
            <p>testetestetestetesteteste </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/52216493?s=460&u=6398b3a3fc0e8991e918105c4f2d41d5a3b10987&v=4"
            alt="Thiago"
          />
          <div>
            <strong>thiagokichiro/teste</strong>
            <p>testetestetestetesteteste </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
