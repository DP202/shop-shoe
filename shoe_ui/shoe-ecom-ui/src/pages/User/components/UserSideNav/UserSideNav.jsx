import { Link } from 'react-router-dom'

function UserSideNav() {
  return (
    <div className='sticky top-[20px] left-0'>
      <div className='flex items-center border-b border-b-gray-200 py-4'>
        <Link to='/user/profile' className='h-12 w-12 flex-shrink-0 overflow-hidden border border-black/10'>
          <img
            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xABFEAABAwICBgUHCQUJAQAAAAABAAIDBBEFEwYSITFRYQdBcYGRFCIyUqHR0jNCYnKCkqKxwSM1REVUFSRTVWNzstPwNP/EABkBAQADAQEAAAAAAAAAAAAAAAADBAUCAf/EACMRAQEAAwACAgEFAQAAAAAAAAABAgMRBCESMUEjMjNRYSL/2gAMAwEAAhEDEQA/AO4oiICIiAiLF6R4zDgWEy187S8ts2OJu+R52NaP/bBcry3k6KekGkNFgcLTUl0k8t8mmi2ySEcB1DiTsC0TENI8XxJ5E1WaOnI/+ajdY/alIufs2WDlqqiqqZayvlzayb5R4GwDqa0dTR1Dv3qM3mqGzyLleRaw1ST2riKmbIZBTxOlO+SQZjz2udclV21L2jzXBvYAFi31kUbi1z/OFr2F9W/Hh3qtr2Vft/KWSL185kFpAx4+mwO/NeKZwpJM2gklopd+vSP1Ae1nou7wrXMTMXsyyn1SyVueC6bSQPbBj5jdEdja+NuqB/uN+b9YbOxb21wcA5pBaRcEG91xESb+e+/Wtn0Cx91DVx4LVvJpJj/dHuPyb/8AD+qfm8No4K5p39vxyQbNXrsdJRQDdSrauIiICIiAiIgIiIIK5Z0k4mavSCKha79lQR6xHUZXj9G2+8V1NcExmr8pxzE6kuvm1chB5B2qPY0BV/Jy5hxLpncupzLDaVksCwaqxrVmL3U9BuzR6cvJnAfS8FbaNYScbrXZ4PkMBGd/qu6mdnWfDrXSo2tY0NY0NaBYADYAs63i9jj33VtS4Ph9NQuooaSMUzwQ9hF8y+/WO8nmVoWN4ZNgVYKd5c+klP8Adpib3+g7mPaO9dMaFTxDD6bFKKSjrY8yGQbRexB6iD1EcV1PZlHKszmmZzWYxbQ3FaEufQny+DqAs2VvaNzu0eC1ycyUzi2qilgcN4mjcz80sR9XeZzXiQlzfNcWvBDmOG9rwbhw7CAqdJDVVxtQUk9Vsucpuwd5sPaqWYQ5zXtLXNNnNcCC08CEg7nozif9s4FR4gQGvmjGY0fNeNjh4grKLQ+iSqMmD19M4/IVZLex7Q7/AJay3xamu9xlUspy8ERF25EREBERAREQF831MpbUVGq0udnyANA3nXK+jyuG/wBkSUnSOcOnZ5jap9Q2+5zNr2n9O0Kr5U/56n0e8uN5wLDm4ThkFG3a5jbyOHznna4+KybVRaqrCsuXvtp2cVmqq0qi0r20qbGocorEqk/aNoB7VN14cV1a8keHADYNgWh9IeGtifBisTbF7hDPbr36rv07wt7cViNJqTy7Aa6AC7zCXMH0m7R7Qo/l7d3HsWXQ3rOjxl9/NzImjtDST+YXSVz/AKGIyNHKyfqmrXOaeQYwfoV0Ba2qcwjM2fuoiIpHAiIgIiICIiCDuWB0koKd9TR4g6IGphLomyDfquG0eICz6x+ORl+HSEb47PHcdvsuot07rsS6bzZGACqtKpL00rEjXqu0r2CqAK9ByklcWKt1BK8ayjWXvyc8HFUpT5rr7rL04qlIDIBG30pCGDvNlH91JJxmtF8Mp8GwKkoqVtmMZrG+8uO0nxKyy8RgNaGjcBYL2t7GckjFt7RERevBERAREQEREBeZGh7S1wu0ixC9KCg1J0TqeV9O83MZtc9Y6j4KFmcao3SNFTCLvjHnAfOb7x71hWkOAINwdxWJv1XXnf6bGnbNmPfy9Ar0CvCXUPUvFS6guXi6lOnC6u8Hgzq8PIuyEax+sdw/M+CtAHOc1kbdZ7jZreK2PDqQUdO2K93Hznu9Zx3q14mq5Z/K/UVvJ2zHDk+6ugpRFrssREQEREBERAREQEUXWLxHSTBMMJGIYrRwOBsWOmGtfs3oMoRsK1TGnR02IlkLdhaHPaN1zw5qHafYbM7Uw6kxGsubZjaZ0bB3yatx2XWOmmdUTPmf6T3aypebZ8JFzw5flavGSMk9E7eHWvaxvPr4r0HydT3eKzONHsZBUpahrAbec7gFZl0jhtc49pUJw7GwaMlsrqh7wDKCLHg3ktgC0ejxlmCvfNNTVM8bwGkUzA5zedrjZvWTptPdG5nakmIilfe2pWRPgN/tgX7lseL/ABRleVP1a2ZFb0ldS1rNejqYZ2etFIHD2KvdWFdKIiAiIgLxLLHDE+WZ7WRsBc57jYNHEleiuT9JekD8RxV2C07x5DSEeUgH5abfqH6LRbZ1k8toZrEukhhkLcCoPK4r28rqJcqI82Cxc/wA4ErA1umWkFUSBi0FGw7m0dIC4fak1h+Faq6Uk3JTMQZKrqjXfvCorq7ZYioq36h7WNs32KnBOykbqUUFPTNG4QxBvtVjmJmIL+Sqkl+Vke/6zrrM4Ni7AG09SbW2MefyK1fM5pmKPZrx2TlSa9l13sdIY3W2jaFWbDsXPqLGayisIZrtHzX7QspHpjVtbZ0MRPEFUL4mc+va9PJwv+NuMStqqSKmjL5nhjR1k2Wq1GltfKLMEUfO11iKitmqXa1RK57uq53LrHxMr9+nOXlYz69srieJmrmBYS1jPR6ieaoDEKgN1TM5zeDzrD2rGZnNMzmr+OMwnIo553O9q5eyiklbNJQU2cN0sbMt7exzbEK/psWrqRobQ4vitKBuHlAnHhKHLD5iZi6ctvotONIKawfU0WItA9CeEwPd9tt2/hW8aMaV0OkGtFGH01dE28tJL6TRxBGxzeY77LjGZxUtqqiCaGpo5cqrp3a0Eu/VPA8QdxHWEH0MixOi+NRaQYJT4jC3UMgIkjO+N4NnNPYQe0WKyyC0xatjw3C6uvmIEdNC+VxPBoJ/RfOrJnv1pZjeaVzpZTxe46zj4krtfShOYNB8SANjKGRdzntB9l1wrMQXmYmYrPM5pmc0F5mJmKzzOaZnNBeZiZis8zmmbzQXmYmYrPM5pmc0F5mJmKzzOaZnNBeZiZis8zmmZzQXmYmYrPM5pmc0F5mJmKzzOaZnNB0voexJzMRxLDHv/ZzMbUxC+5w81/s1D4rqgXAejytNNpxhJuNWZz4H9jmEj8TWrvwQaR0wkjQma39RDf74XCxJzX0dpPgkWkODzYbVSSRRylp147azSDcHatFPQ/Qf5vX/AHI/cg5Xm80zF1F3RJQgfvWv+7H8Kpnonoh/NK89rWfCg5lmJmLpLuiujG7Ea7wZ7l4d0XUg/mFae5nwoOdZijMXQz0Y0o3V9b4M+FeHdGlP1Vtb4M+FBz/N5pmLfT0awD+LrfBnwqD0bxf1VZ4M9yDQ8xTmLex0bxf1dX4M9y9Do0hP8ZW+DPcg0HMU5i6AOjOn662t8GfCvY6MKXrr67wZ8KDnmYozF0hvRbRn+YYgOzL+FVG9FNAd+JYj3ZfwIOZ5inMXT29EuHHfimJ9xi+BVG9EOFnfiuK+MP8A1oOe6NVGVpLhEnq1sJ/GF9MXXMqLolwumq4KluKYq50MjZGhzorEtIIv+z3bF0Ya3Wgr2Cao4IiCCxvBeSxvBEQRls9UKDEz1QpRB5yY/VCjyeL1ApRBHk8XqhR5PF6qIgeTxeqpFPF6qIgnIi9QKRDH6oREE5TPVCnLZwUIg9BjeCnUbwREE2HBLBEQf//Z'
            alt=''
            className='h-full w-full object-cover'
          />
        </Link>

        <div className='fle-grow pl-4'>
          <div className='mb-1 truncate  text-gray-400'>Đông tà</div>
          <Link to='/user/profile' className='flex items-center capitalize text-gray-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4 mr-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
              />
            </svg>
            Sửa hồ sơ
          </Link>
        </div>
      </div>

      <div className='mt-7'>
        <Link to='/user/profile' className='flex items-center capitalize text-blue-500  transition-colors'>
          <div className='flex items-center mr-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4 mr-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
              />
            </svg>
            Tài khoản của tôi
          </div>
        </Link>

        <Link to='/user/profile' className='mt-3 flex items-center capitalize text-blue-500  transition-colors'>
          <div className='flex items-center mr-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4 mr-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
              />
            </svg>
            Đổi mật khẩu
          </div>
        </Link>

        <Link to='/user/profile' className='mt-3 flex items-center capitalize text-blue-500  transition-colors'>
          <div className='flex items-center mr-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4 mr-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184'
              />
            </svg>
            Đơn mua
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UserSideNav
