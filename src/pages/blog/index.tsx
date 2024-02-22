import Link from 'next/link'
import React, { useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Page = () => {
  const { t } = useTranslation('common')

  const [cnt, setCnt] = useState(0)
  console.log(cnt)

  return (
    <>
      <div>Blog</div>
      <p className='text-xl text-amber-400'>
        Content {t('hello')}
      </p>
      <div className=' flex flex-col gap-3'>
        <Link locale='jp' href='/blog' replace>Change to into Japanese</Link>
        <Link locale='en' href='/blog' replace>Change to English</Link>
      </div>

      <button onClick={() => setCnt((val) => val + 1)} className='bg-amber-700 text-white rounded-md px-5 py-3'>Inc</button>
      <div>
        Cnt: {t('things', { count: cnt })}
      </div>
    </>
  )
}


export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

export default Page
