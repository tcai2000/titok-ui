import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import {  FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

const cx = classNames.bind(styles)

console.log(cx('wrapper'));
function Header() {
    return  ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tik Tok"/>
                <div className={cx('search')}>
                    <input type="text" placeholder='Search accounts and video' spellCheck={false}/>
                    <button>
                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />                        
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />                        

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />      
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;