import { ethers } from 'ethers';
import logo from '../assets/logo.svg';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <ul className='nav__links'>
                <li><h4><a href="#">Buy</a></h4></li>
                <li><h4><a href="#">Rent</a></h4></li>
                <li><h4><a href="#">Sell</a></h4></li>
            </ul>

            <div className='nav__brand'>
                
                <h1>La Casa<img src={logo} alt="Logo" /> Mi Casa</h1>
            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;