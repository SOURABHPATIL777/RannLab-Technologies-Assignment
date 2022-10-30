import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

function Header(){
    return(
        <div className='header'>
            <div>
                <img src='../images/logo.png' className='logo' alt='' />
            </div>
            <div>
                <span>Product</span>
            </div>
            <div>
                <span>Consult</span>
            </div>
            <div>
                <span>Educate with Us</span>
            </div>
            <div>
                <span>Blogs And Reviews</span>
            </div>
            <div className="header-search">
                <input className="header-searchinput" value="Search"/>
                <SearchIcon className="header-searchicon"/>
            </div>
            <div  className='button'>
                <button type="button" class="btn btn-secondary">Login/SignUp</button>
            </div>

            <div className="header-optionbasket">
                <ShoppingCartIcon />
            </div>
        </div>
    )
}

export default Header;