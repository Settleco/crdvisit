<template>
<header class="backdrop-blur-xl bg-[#FFFFFF8c] rounded-b-xl">
  <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex-1 md:flex md:items-center md:gap-12">
        <a class="block text-teal-600" href="/">
          <span class="sr-only">Home</span>
            <img class="h-8 w-8" src="/meta/logo.png" alt="">
        </a>
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <nav class="hidden md:block" aria-labelledby="header-navigation">
          <h2 class="sr-only" id="header-navigation">Header navigation</h2>

          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Home
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Status
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Help
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:gap-4 sm:flex">
            <a
              class="px-5 py-2.5 text-sm font-medium text-white bg-[#6762a6] rounded-md shadow"
              href="/"
            >
              Login
            </a>

            <div class="hidden sm:flex">
              <a
                class="px-5 py-2.5 text-sm font-medium text-[#6762a6] bg-violet-200 rounded-md"
                href="/"
              >
                Register
              </a>
            </div>
          </div>

          <div class="block md:hidden">
            <button
              class="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
</template>