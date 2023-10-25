import { Button } from '@/components/ui/button'

export function ServiceTable() {
  return (
    <div className='flex-1 rounded-lg border border-zinc-200 border-dashed dark:border-zinc-800 pt-4'>
      <table className='w-full text-left'>
        <thead>
          <tr>
            <th className='p-2'>Service ID</th>
            <th className='p-2'>Customer Name</th>
            <th className='p-2'>Status</th>
            <th className='p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2'>12345</td>
            <td className='p-2'>John Doe</td>
            <td className='p-2'>Active</td>
            <td className='p-2'>
              <Button className='bg-yellow-500 text-white' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                  <path d='m15 5 4 4' />
                </svg>
              </Button>
              <Button className='bg-blue-500 text-white ml-2' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                </svg>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='p-2'>67890</td>
            <td className='p-2'>Jane Smith</td>
            <td className='p-2'>Inactive</td>
            <td className='p-2'>
              <Button className='bg-yellow-500 text-white' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                  <path d='m15 5 4 4' />
                </svg>
              </Button>
              <Button className='bg-blue-500 text-white ml-2' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                </svg>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='p-2'>11223</td>
            <td className='p-2'>Alice Johnson</td>
            <td className='p-2'>Active</td>
            <td className='p-2'>
              <Button className='bg-yellow-500 text-white' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                  <path d='m15 5 4 4' />
                </svg>
              </Button>
              <Button className='bg-blue-500 text-white ml-2' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                </svg>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='p-2'>44556</td>
            <td className='p-2'>Bob Williams</td>
            <td className='p-2'>Inactive</td>
            <td className='p-2'>
              <Button className='bg-yellow-500 text-white' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                  <path d='m15 5 4 4' />
                </svg>
              </Button>
              <Button className='bg-blue-500 text-white ml-2' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                </svg>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='p-2'>78901</td>
            <td className='p-2'>Charlie Brown</td>
            <td className='p-2'>Active</td>
            <td className='p-2'>
              <Button className='bg-yellow-500 text-white' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                  <path d='m15 5 4 4' />
                </svg>
              </Button>
              <Button className='bg-blue-500 text-white ml-2' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                </svg>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='p-2'>23456</td>
            <td className='p-2'>Diana Prince</td>
            <td className='p-2'>Inactive</td>
            <td className='p-2'>
              <Button className='bg-yellow-500 text-white' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                  <path d='m15 5 4 4' />
                </svg>
              </Button>
              <Button className='bg-blue-500 text-white ml-2' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                </svg>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='p-2'>34567</td>
            <td className='p-2'>Edward Cullen</td>
            <td className='p-2'>Active</td>
            <td className='p-2'>
              <Button className='bg-yellow-500 text-white' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                  <path d='m15 5 4 4' />
                </svg>
              </Button>
              <Button className='bg-blue-500 text-white ml-2' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                </svg>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='p-2'>45678</td>
            <td className='p-2'>Fiona Shrek</td>
            <td className='p-2'>Inactive</td>
            <td className='p-2'>
              <Button className='bg-yellow-500 text-white' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                  <path d='m15 5 4 4' />
                </svg>
              </Button>
              <Button className='bg-blue-500 text-white ml-2' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                </svg>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='p-2'>56789</td>
            <td className='p-2'>George Weasley</td>
            <td className='p-2'>Active</td>
            <td className='p-2'>
              <Button className='bg-yellow-500 text-white' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                  <path d='m15 5 4 4' />
                </svg>
              </Button>
              <Button className='bg-blue-500 text-white ml-2' variant='outline'>
                <svg
                  className=' h-4 w-4'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                </svg>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center'>
          <Button className='mr-1' variant='outline'>
            Previous
          </Button>
          <Button className='ml-1' variant='outline'>
            Next
          </Button>
        </div>
        <p className='text-sm text-gray-700 text-center'>Showing 1 to 10 of 100 entries</p>
      </div>
    </div>
  )
}
