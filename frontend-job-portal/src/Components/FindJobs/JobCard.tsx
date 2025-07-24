import { Divider, Text } from '@mantine/core'
import { IconBookmark, IconClock } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { timeAgo } from '../../Service/Utilities'

const JobCard = (props:any) => {
  return (
    <Link to={`/jobs/${props.id}`} className='w-96 min-h-74 flex flex-col gap-6 my-4 bg-zinc-800 p-6 rounded-xl hover:border-amber-400 hover:border-2  '>


      <div className='flex justify-between'>
        <div className='p-2 rounded-lg bg-zinc-700'><img className='w-7' src={`/Icons/${props.company}.png`} alt="" /></div>
        <div>
          <div>{props.jobTitle}</div>
          <div className='text-gray-500'>{props.company} &#x2022; {props.applicants?props.applicants.length:0} Applicants</div>
        </div>
        <div><IconBookmark className='text-gray-300 cursor-pointer hover:scale-108'/></div>
      </div>



      <div className='flex justify-between text-sm'>
        <div className='px-4 pb-1 rounded-lg text-amber-400 bg-zinc-700'>{props.experience}</div>
        <div className='px-4 pb-1 rounded-lg text-amber-400 bg-zinc-700'>{props.jobType}</div>
        <div className='px-4 pb-1 rounded-lg text-amber-400 bg-zinc-700'>{props.location}</div>
      </div>



      <div >
        <Text className='!text-justify !text-sm !text-gray-300'>{props.about}</Text>
      </div>

      <Divider />

      <div className='flex justify-between'>
        <div className='font-bold'>
          &#8377;{props.packageOffered} LPA
        </div>
        <div className='flex items-center text-sm text-gray-400'><IconClock stroke={1.5} className='h-4 ' /> {timeAgo(props.postTime)}</div>
      </div>

    </Link>
  )
}

export default JobCard