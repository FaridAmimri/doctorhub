/** @format */

import DoctorList from '@/_components/DoctorList'

const categoryPage = async ({ params }: { params: { catSlug: string } }) => {
  const category = params.catSlug.toUpperCase()
  const doctorsByCategoryApi = `doctors?cat=${params.catSlug}`

  return (
    <div>
      <DoctorList api={doctorsByCategoryApi} title={category} />
    </div>
  )
}

export default categoryPage
