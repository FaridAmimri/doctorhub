/** @format */

import { publicRequest } from '@/utils/request'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const BookingList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['appointments'],
    queryFn: () =>
      fetch(publicRequest + 'appointments').then((res) => res.json())
  })

  console.log(data)

  return <div>BookingList</div>
}

export default BookingList
