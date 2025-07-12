import { Divider } from '@mantine/core'
import SearchBar from '../FindTalents/Searchbar'
import Talents from '../FindTalents/Talents'

const FindTalents = () => {
  return (
    <div className='min-h-[90vh] p-4 mt-6'>
      <SearchBar />
      <Divider />
      <Talents />
    </div>
  )
}

export default FindTalents