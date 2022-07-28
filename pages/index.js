import Head from 'next/head'
import styles from '../styles/container/index.module.css'
import Link from 'next/link'
import { useEffect } from 'react'

// containers
import Ads from './container/ads_page/Ads'
import Dashboard from './container/dashboard_page/Dashboard'
import Home from './container/home_page/Home'
import Inbox from './container/inbox_page/Inbox'
import Landing from './container/landing_page/Landing'
import Login from './container/login_page/Login'
import Profile from './container/profile_page/Profile'
import Support from './container/support_page/Support'


export default function Index() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="developer" content="Aizazulah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceylon Proposals</title>
        {/* git add . */}
        {/* git commit -m "first commit"  */}
        {/* git push -u origin main */}
        {/* vercel --prod */}
        {/* https://ceylon.vercel.app/ */}
      </Head>
      <div>
        <Link href='/container/ads_page/Ads'>
          <h1>Offer page</h1>
        </Link>
        <Link href='/container/dashboard_page/Dashboard'>
          <h1>Dashboard page</h1>
        </Link>
        <Link href='/container/home_page/Home'>
          <h1>Home page</h1>
        </Link>
        <Link href='/container/inbox_page/Inbox'>
          <h1>Inbox page</h1>
        </Link>
        <Link href='/container/landing_page/Landing'>
          <h1>Landing page</h1>
        </Link>
        <Link href='/container/login_page/Login'>
          <h1>Login page</h1>
        </Link>
        <Link href='/container/profile_page/Profile'>
          <h1>Profile page</h1>
        </Link>
        <Link href='/container/support_page/Support'>
          <h1>Support page</h1>
        </Link>
        <input />
      </div>
    </>
  )
}