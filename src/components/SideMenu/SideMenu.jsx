import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './SideMenu.module.scss';
import arrow from '../../assets/images/arrow-down-red.svg'
import { Link } from 'react-router-dom';
import { getCats } from '../../redux/thunks/catsThunk';
import { setCurrentCategory } from './../../redux/ducks/catsDuck';


function SideMenu() {
  const { categories,loadingCategories } = useSelector(state => state.catsInfo);
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
   if(loadingCategories){
     setDropdown(true);
   }
  }, [loadingCategories])

  const onMenuItemClick = (category) => {
    dispatch(setCurrentCategory(category))
    dispatch(getCats(category.id))
  }
  return (
    <div className={s.side_menu}>
      <div className={s.categories_dropdown} onClick={()=>{setDropdown(prev=>!prev)}}>
        <p>Cats Categories</p>
        <img src={arrow} className={dropdown? s.dropdown_icon: s.dropdown_icon_rot} alt ='icon'></img>
      </div>
      {
      dropdown && categories.length &&
        <div className={s.dropdown_list}>
          {categories.map((categorie, idc)=>(
            <Link 
              className={s.list_element}  
              to={categorie.name} 
              key={idc} 
              onClick={()=>(onMenuItemClick(categorie))}> 
              {categorie.name.charAt(0).toUpperCase() + categorie.name.slice(1)}
            </Link>
          ))}
        </div>
      }
    </div>
  );
}

export default SideMenu;
