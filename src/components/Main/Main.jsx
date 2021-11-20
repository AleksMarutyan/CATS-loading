import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCats } from '../../redux/thunks/catsThunk';
import s from './Main.module.scss';

function Main() {
  const dispatch = useDispatch();
  const {cats, loadingCats, currentCategory} = useSelector(state => state.catsInfo)
  const [localCats, setLocalCats ] = useState([])
  const [page, setPage] = useState(1);
  const onMoreCatsClick = () =>{
   dispatch (getCats(currentCategory.id,page))
  }

  useEffect(() => {
   setLocalCats([])
  }, [currentCategory])

  useEffect(()=>{
    setLocalCats([...localCats, ...cats])
    setPage(prev=>prev+1) 
  },[ cats ])

  return (
    <div className={s.main}>
     {currentCategory && localCats && !loadingCats && 
      <div className={s.cats_type}>
            <p>{`Cats with ${currentCategory.name}`}</p>
        </div>
      }
      <div className={s.cats}>
        {
          localCats.length > 0 && localCats.map((cat,idc)=>(
            <div className={s.cats_container} key={idc}>
              <img className={s.cats_image} src={cat.url} alt={idc} ></img>
            </div>
          ))
        }
        {
          loadingCats && 
            <div className={s.loading_container}>
               <p>Loading...</p>
            </div>
        }
      </div>
      {localCats.length>0 && currentCategory && 
        <div className={s.more_cats}>
          <button className={s.more_cats_button} onClick={onMoreCatsClick}>
            More Cats
          </button>
        </div>
      }
    </div>
  )
}

export default Main
