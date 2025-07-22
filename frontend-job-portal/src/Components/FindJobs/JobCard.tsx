import { Divider } from '@mantine/core'
import { IconBookmark, IconClock } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const JobCard = (props:any) => {
  return (
    <Link to='/jobs' className='w-96 h-90 flex flex-col gap-6 my-4 bg-zinc-800 p-6 rounded-xl hover:border-amber-400 hover:border-2  '>


      <div className='flex justify-between'>
        <div className='p-2 rounded-lg bg-zinc-700'><img className='w-7' src={`/Icons/${props.company}.png`} alt="" /></div>
        <div>
          <div>{props.jobTitle}</div>
          <div className='text-gray-500'>{props.company} &#x2022; {props.applicants} Applicants</div>
        </div>
        <div><IconBookmark className='text-gray-300 cursor-pointer hover:scale-108'/></div>
      </div>



      <div className='flex justify-between text-sm'>
        <div className='px-4 pb-1 rounded-lg text-amber-400 bg-zinc-700'>{props.experience}</div>
        <div className='px-4 pb-1 rounded-lg text-amber-400 bg-zinc-700'>{props.jobType}</div>
        <div className='px-4 pb-1 rounded-lg text-amber-400 bg-zinc-700'>{props.location}</div>
      </div>



      <div className='text-justify text-sm'>{props.description}</div>

      <Divider />

      <div className='flex justify-between'>
        <div className='font-bold'>
          &#8377;{props.package}
        </div>
        <div className='flex items-center text-sm text-gray-400'><IconClock stroke={1.5} className='h-4 ' /> {props.postedDaysAgo} days ago.</div>
      </div>

    </Link>
  )
}

export default JobCard