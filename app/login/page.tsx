'use client';

import Head from "next/head";
import { useForm } from "react-hook-form";

export default function Login() {

  const { register, handleSubmit } = useForm();

  function handleSignIn(data) {
    console.log(data)
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

      <Head>
        <title>Home</title>
      </Head>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-slate-700 p-10 rounded-lg drop-shadow-2xl">
        <h1 className="font-medium mb-4 text-2xl text-white">Login</h1>
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(handleSignIn)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">Email address</label>
            <div className="mt-2">
              <input
                {...register('email')}
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">Password</label>
            </div>
            <div className="mt-2">
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}
