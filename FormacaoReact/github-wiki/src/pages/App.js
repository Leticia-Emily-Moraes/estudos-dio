import GithubIcon from '../assets/githubIcon.svg';
import { Container } from './style';
import Input from '../components/input';
import Button from '../components/button';
import ItemRepo from '../components/itemRepo';
import { useState } from 'react';
import { api } from '../services/api'

function App() {

  const [Repos, setRepos] = useState([]);
  const [currentRepo, SetCurrentRepo] = useState('')

  const handleSearchRepos = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data.id) {
        const isExiste = Repos.find(repo => repo.id === data.id);
        if (!isExiste) {
          setRepos(prev => [...prev, data]);
        } else {
          alert('Repositório já adicionado');
        }
      } else {
        alert('Repositório não encontrado');
      }
    } catch (error) {
      alert('Repositório não encontrado');
    } finally {
      SetCurrentRepo('');
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
  }


  return (
    <Container>
      <img src={GithubIcon} width={72} height={72} alt="" />
      <Input value={currentRepo} onChange={(e) => SetCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepos} />
      {Repos.map(repo =>
        <ItemRepo key={repo.id} repo={repo} onRemove={handleRemoveRepo} />
      )}
    </Container>
  );
}

export default App;