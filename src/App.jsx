import './App.css'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const [games, setGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('search') || "";

  const fetchGames = (query = "") => {
    fetch(`${process.env.API_URL}=${query}`)
    .then(res => res.json())
    .then(data => setGames(data))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    setSearchInput(query);
    fetchGames(query);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(searchInput ? `/list?search=${encodeURIComponent(searchInput)}` : '/list');
    }
  };

  const handleClearSearch = () => {
    setSearchInput('');
  }

  return (
    <div className='main'>
      <div className='body'>
        <header className='navbar'>
          <a href='/list' className='logo-link'>
            <img src='/images/logoFull.svg'/>
          </a>
          <div className='searchbar-container'>
            <div className='search-icon-container'>
              <svg className='search-icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z" fill="#ffffff"></path> <path d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z" fill="#ffffff"></path> </g></svg>
            </div>
            <input className='search-bar' 
              type='text' 
              placeholder='search' 
              autoComplete='off' 
              autoCorrect='off' 
              value={searchInput} 
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleKeyDown} />
            {searchInput !== '' && (
              <button type="button" className="clear-search-button" onClick={handleClearSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" style={{height: '16px', width: '16px'}}><path fill="currentColor" fill-rule="evenodd" d="M14 1.67L12.59.31 7 5.69 1.41.31 0 1.67l5.59 5.37L0 12.42l1.41 1.36L7 8.4l5.59 5.38L14 12.42 8.41 7.04z"></path></svg>
              </button>
            )}
          </div>
          <div className='locale-container'>
            <button className='locale-button'>
              <span>
                <div className='flag'>
                  <img src="https://static.eneba.games/flags/lang/v2/lithuania.svg" alt="lithuania" height="16" width="16"></img>
                </div>
              </span>
                <span className='lang-country regular'>
                  English EU | EUR
                </span>
            </button>
          </div>
          <div className='nav-button-container'>
            <a className='wishlist' href='#'>
              <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5"><path d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
          </div>
          <div className='nav-button-container'>
            <a className='cart' href='#'>
              <svg viewBox="0 0 16 16" height="16" width="16" className='shopping-cart-icon' fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12.7499H5.386C5.1498 12.75 4.9212 12.6664 4.74067 12.5139C4.5602 12.3615 4.43953 12.1502 4.4 11.9173L2.642 1.58395C2.60233 1.35119 2.4816 1.13996 2.30113 0.987686C2.12067 0.835406 1.89213 0.7519 1.656 0.751953H1" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.75 14.75C10.8881 14.75 11 14.6381 11 14.5C11 14.3619 10.8881 14.25 10.75 14.25" stroke="#ffffff"></path><path d="M10.75 14.75C10.6119 14.75 10.5 14.6381 10.5 14.5C10.5 14.3619 10.6119 14.25 10.75 14.25" stroke="#ffffff"></path><path d="M5.75 14.75C5.88807 14.75 6 14.6381 6 14.5C6 14.3619 5.88807 14.25 5.75 14.25" stroke="#ffffff"></path><path d="M5.75 14.75C5.61193 14.75 5.5 14.6381 5.5 14.5C5.5 14.3619 5.61193 14.25 5.75 14.25" stroke="#ffffff"></path><path d="M4.03141 9.75007H12.0787C12.5247 9.75001 12.9578 9.60094 13.3093 9.32647C13.6608 9.05207 13.9105 8.66801 14.0187 8.23541L14.9854 4.36873C15.0038 4.29499 15.0052 4.21802 14.9895 4.14366C14.9737 4.0693 14.9412 3.99952 14.8944 3.93961C14.8476 3.87971 14.7878 3.83126 14.7194 3.79795C14.6511 3.76465 14.5761 3.74736 14.5001 3.7474H3.01075" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
          </div>
          <div className='nav-button-container'>
            <a className='account' href='#'>
              <img width='24px' height='24px' className='account-icon' src='images/account.png'/>
            </a>
          </div>
        </header>
        <div className='results-container'>
          <div className='results-header'>
            <span className='regular'>Results found:</span> {games.length}
          </div>
          <div className='item-grid'>
            {games.map((game) => (
              <div className={`item-card ${game.cashback > 0 ? 'cashback' : ''}`} key={game.id}>
                <div className='item-card-image'>
                  <img src={game.image_url} alt={game.title} />
                  <div className='image-overlay'>{game.platform}</div>
                </div>
                <div className='item-card-text'>
                  <div className='platform-overlay'>
                    <img src={`images/${game.platform.replaceAll(' ', '').toLowerCase()}.svg`}/>
                    <span className='platform-text'>{game.platform}</span>
                  </div>
                  <div className='item-card-title'>
                    {game.cashback > 0 && (
                      <div className='cashback-label'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M6.55768 14.5095C8.12445 14.8566 9.76387 14.6269 11.1749 13.8626C12.586 13.0983 13.674 11.8506 14.2392 10.3487C14.8044 8.84672 14.8088 7.1913 14.2517 5.68633C13.6946 4.18137 12.6134 2.92785 11.2065 2.15593C9.79954 1.384 8.1614 1.14548 6.59277 1.48414C5.02415 1.8228 3.6303 2.71594 2.66718 3.99953C1.70407 5.28313 1.23625 6.87109 1.34969 8.47182C1.46308 10.0726 2.15012 11.5787 3.28463 12.7137L4.37371 13.8028M1.47198 13.8013H4.37233V10.901" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 5.33398V8.00065V10.6673" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.33301 8H10.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                      <span className='cashback-text'>CASHBACK</span>
                    </div>
                    )}
                    <div className='item-title'>{game.title} {game.region}</div>
                    <div className='item-region'>{game.region}</div>
                  </div>
                  <div className='item-card-price'>
                    <span className='secondary'>From&nbsp;
                      {game.discount_percent > 0 && (
                        <span>
                          <strike>€{game.original_price}</strike> <span className='highlight'>-{Math.round(game.discount_percent)}%</span>
                        </span>
                        )
                      }
                    </span>
                    <div className='price-container'>
                      <h2>€{game.price}</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="16" height="16" class="price-info-icon"><path fill="currentColor" fill-rule="evenodd" d="M5.69 6.13c0-.25.2-.44.43-.44h.44a.88.88 0 0 1 .88.87v2.19a.44.44 0 0 0 .43.44h.44a.44.44 0 0 1 0 .87h-.44a1.31 1.31 0 0 1-1.3-1.31V6.56h-.45a.44.44 0 0 1-.43-.43ZM6.42 3.61a.66.66 0 1 1 .73 1.1.66.66 0 0 1-.73-1.1Zm.44.75a.22.22 0 1 0-.16-.4.22.22 0 0 0 .16.4Z" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="M2.05 2.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9ZM7 .88a6.13 6.13 0 1 0 0 12.25A6.13 6.13 0 0 0 7 .87Z" clip-rule="evenodd"></path></svg>
                    </div>
                    {game.cashback > 0 && (
                      <p className='highlight'>Cashback: €{game.cashback}</p>
                    )}
                    <div className='item-likes'><svg viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="likes-icon"><path d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> {game.likes}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
