
import React from 'react'
import RecipeTable from './RecipeTable'
import { StoreContext } from '@/components/store/storeContext'
import { setIsAdd } from '@/components/store/storeAction'
import ModalAddRecipe from './ModalAddRecipe'
import SideNavigation from '../SideNavigation'
import { Plus } from 'lucide-react'
import Header from '../Header'
import SearchBar from '../SearchBar'
import Footer from '../Footer'
import ToastSuccess from '../ToastSuccess'
import ModalError from '../modals/ModalError'
import ModalValidation from '../modals/ModalValidation'

const Recipe = () => {
    const {dispatch, store} = React.useContext(StoreContext);
    const [itemEdit, setItemEdit] = React.useState(null);

    const handleAdd = () => {
      dispatch(setIsAdd(true));
      setItemEdit(null);
    }
  return (
    <>
    <section className="layout-main">
            <div className="layout-division">
            <SideNavigation menu="recipe"/>
                <main>
                    <Header title="Recipe" subtitle="Manage Recipes"/>
                    <div className="p-8">
                      <div className="flex justify-between items-center">
                        <SearchBar/>
                        <button className="btn btn-add" onClick={handleAdd}>
                          <Plus size={16}/> Add New
                        </button>
                      </div>
                      <RecipeTable setItemEdit={setItemEdit}/>
                    </div>
                    <Footer/>
                </main>
            </div>
        </section>
        {store.validate && <ModalValidation/>}
        {store.error && <ModalError/>}
      {store.success && <ToastSuccess/>}
        {/* <SpinnerWindow/> */}
        {store.isAdd && <ModalAddRecipe itemEdit={itemEdit}/>}
    </>
  )
}

export default Recipe