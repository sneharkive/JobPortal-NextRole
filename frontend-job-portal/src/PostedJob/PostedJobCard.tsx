
const PostedJobCard = (props:any) => {
  return (
    <div className='bg-zinc-700 rounded-xl p-2 border-l-2 border-l-amber-400'>
      <div className='text-sm font-semibold'>{props.jobTitle}</div>
      <div className='text-xs text-gray-300'>{props.location}</div>
      <div className='text-xs text-gray-300'>{props.posted}</div>
    </div>
  )
}

export default PostedJobCard