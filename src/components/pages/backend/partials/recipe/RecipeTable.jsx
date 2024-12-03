import { setIsAdd, setIsConfirm, setIsDelete } from '@/components/store/storeAction'
import { StoreContext } from '@/components/store/storeContext'
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from 'lucide-react'
import React from 'react'
import LoadMore from '../LoadMore'
import ModalConfirm from '../modals/ModalConfirm'
import ModalDelete from '../modals/ModalDelete'
import Pills from '../Pills'


const RecipeTable = ({setItemEdit}) => {
  const {store, dispatch } = React.useContext(StoreContext);

  let counter = 1;

  const handleDelete = () => {
    dispatch(setIsDelete(true));
  }
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
  }
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
  }
  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  }
 
  return (
    <>
<div className='mt-10 bg-secondary rounded-md p-4 border border-line relative'>
                        {/* <SpinnerTable/> */}
                      <div className="table-wrapper custom-scroll">
                        {/* <TableLoader count={10} cols={4}/> */}
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Status</th>
                              <th className='w-[50%]'>Title</th>
                              <th>Food Category</th>
                              <th>Price</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <tr>
                              <td colSpan={100}>
                                <IconNoData/>
                              </td>
                            </tr> */}
                            {/* <tr>
                              <td colSpan={100}>
                                <IconServerError/>
                              </td>
                            </tr> */}
                           {Array.from(Array(5).keys()).map((key) => (
                            <tr key={key}>
                            <td>{counter++}</td>
                            <td><Pills/></td>
                            <td>dgdg</td>
                            <td>gdfgd</td>
                            <td>dgdg</td>
                            <td>
                              <ul className="table-action " >
                                {true ? (<>
                                <li>
                                  <button className='tooltip' data-tooltip="Edit" onClick={() => handleEdit(item)}><FilePenLine /></button>
                                </li>
                                <li><button className='tooltip' data-tooltip="Archive" onClick={() => handleArchive()}><Archive/></button></li>
                                </>) : (<>
                                  <li>
                                  <button className='tooltip' data-tooltip="Restore" onClick={() => handleRestore()}><ArchiveRestore /></button>
                                  </li>
                                <li>
                                  <button className='tooltip' data-tooltip="Delete" onClick={() => handleDelete()}><Trash2 /></button>
                                  </li>
                                </>)}
                              </ul>
                            </td>
                          </tr>
                           ))}
                              
                  
                            
                              

                          </tbody>
                        </table>
                        <LoadMore/>
                      </div>
                      </div>
                      {store.isDelete && <ModalDelete/>}
                      {store.isConfirm && <ModalConfirm/>}
                      {store.isView && <ModalViewMovie movieInfo={movieInfo}/>}
        </>  
  )
 
}

export default RecipeTable