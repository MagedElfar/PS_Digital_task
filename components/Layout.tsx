import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC, ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { getCart } from '../store/thunk-action';
import Footer from './Footer';
import NavBar from './NavBar';

interface Props {
    children:ReactNode
}

const Layout:FC <Props> = ({children}) => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const id:string | null = JSON.parse(localStorage.getItem("cart")!);
        if(id) {
            dispatch(getCart({id}))
        }
    } , [])
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <NavBar />
            <main className='site-main'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout