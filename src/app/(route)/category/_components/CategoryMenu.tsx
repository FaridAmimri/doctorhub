/** @format */
'use client'

import { CategoryType } from '@/types/types'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command'
import { getData } from '@/utils/getData'
import Link from 'next/link'
import Image from 'next/image'
import { publicRequest } from '@/utils/request'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

const CategoryMenu = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch(publicRequest + 'categories').then((res) => res.json())
  })

  const pathname = usePathname()

  const categoryPath = pathname.split('/')[2]

  return (
    <div className='h-screen '>
      <Command>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList className='overflow-visible'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            {data &&
              data.map((categoryLink: CategoryType) => (
                <CommandItem
                  key={categoryLink.id}
                  className='p-2 cursor-pointer'
                >
                  <Link
                    href={`/category/${categoryLink.slug}`}
                    className={`flex items-center gap-2 p-2 text-sm rounded-md  w-full ${
                      categoryPath === categoryLink.slug && 'bg-blue-100'
                    }`}
                  >
                    <Image
                      src={categoryLink.icon}
                      alt='icon'
                      width={25}
                      height={25}
                    />
                    <label className='cursor-pointer'>
                      {categoryLink.slug}
                    </label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  )
}

export default CategoryMenu
