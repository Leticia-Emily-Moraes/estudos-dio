import { useState } from 'react'
import { Header } from '../../components/Header'
import { ItemList } from '../../components/ItemList'
import background from '../../assets/background.svg'
import './style.css'

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleSetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, login, bio } = newUser
      setCurrentUser({ avatar_url, name, login, bio });

      const ReposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await ReposData.json();
      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="Conteudo">
        <img src={background} className="background" alt="" />
        <div className="infos">
          <div>
            <input type="text" name="usuario"
              value={user}
              placeholder="@username"
              onChange={event => setUser(event.target.value)}
            />
            <button onClick={handleSetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="Perfil">
                <img src={currentUser.avatar_url} alt="" className="PhotoProfile" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            <div className="Repos">
              <h1>Repositórios</h1>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
