/** @format */

import CategoryMenu from './_components/CategoryMenu'

const layout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='mx-auto max-w-screen-xl p-4  grid grid-cols-4'>
      <div className='hidden md:block'>
        <CategoryMenu />
      </div>
      <div className='col-span-3'>{children}</div>
    </div>
  )
}

export default layout
