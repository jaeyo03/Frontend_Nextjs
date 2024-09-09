import Link from "next/link";

export default function Header() {
    return (
        <nav className="relative flex items-center justify-between p-4 lg:px-6">
            <div className="block flex-none md:hidden">
                <button aria-label="Open mobile menu"
                        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </button>
            </div>
            <div className="flex w-full items-center">
                <div className="flex w-full md:w-1/3"><a
                    className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6" href="/">
                    <div
                        className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 32"
                             className="h-4 w-4 fill-black dark:fill-white h-[16px] w-[16px]">
                            <path d="M4 0H28V4H8V12H24V16H8V28H4V0Z"></path>
                            <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                        </svg>
                    </div>
                    <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">FitFit</div>
                </a>
                    <ul className="hidden gap-6 text-sm md:flex md:items-center">
                        <li><a
                            className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                            href="/search/clothing">Clothing</a></li>
                    </ul>
                </div>
                <div className="hidden justify-center md:flex md:w-1/3">
                    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full"><input type="text"
                                                                                             placeholder="Search for products..."
                                                                                             autoComplete="off"
                                                                                             className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
                                                                                             name="search" value=""/>
                        <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" aria-hidden="true" className="h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                            </svg>
                        </div>
                    </form>
                </div>
                <div className="flex justify-end md:w-1/3">
                    <button aria-label="Open User Info">
                        <div
                            className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" aria-hidden="true"
                                 className="h-4 transition-all ease-in-out hover:scale-110 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}