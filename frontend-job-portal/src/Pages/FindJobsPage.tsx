import { Divider } from '@mantine/core'
import Jobs from '../FindJobs/Jobs'
import SearchBar from '../FindJobs/SearchBar'

const FindJobs = () => {
  return (
    <div className='min-h-[90vh] p-4 bg-zinc-900 text-white pt-6'>
  
      <SearchBar />
      <Divider />
      <Jobs />
    </div>
  )
}

export default FindJobs