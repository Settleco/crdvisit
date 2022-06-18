<template>
  <div class="grid justify-items-center">
    <div class="flex w-22/24 justify-center py-15">
      <div class="md:flex items-center justify-between md:w-9/12 w-11/12 space-x-5">
        <div class="grid justify-items-center gooper-deck-bold text-stone-900 md:text-5xl text-4xl">
          Boost your
          <p
            class="
              gooper-deck-black
              text-transparent
              bg-clip-text bg-gradient-to-r
              from-purple-500
              to-pink-400
              md:py-2
              py-0.5
            "
          >productivity</p>
          with us
        </div>
        <div class="grid justify-items-center md:justify-items-end">
          <img class="flex drop-shadow-2xl md:w-3/4" src="/meta/profile.png" alt="" />
          <p class="text-xs text-gray-400">This is an example photo. May differ with actual site/product</p>
        </div>
      </div>
    </div>

    <div class="flex w-full mt-5 md:p-20 p-10 bg-[#91a4ff]">
      <div class="grid justify-items-start">
        <p class="gooper-deck-bold md:text-4xl text-2xl text-[#212529]">
          Make yourself a really nice <span class="gooper-deck-black text-[#4862db]">profile page</span>
        </p>
        <p class="mt-2 font-semibold w-3/4 text-stone-800">
          Thanks to our site and markdown support, you can have your own page
          for a small price. You can also point your own domain to this page.
        </p>
      </div>
    </div>

    <div class="flex w-full md:p-20 p-10 bg-[#8ce99a]">
      <div class="md:flex justify-between w-full text-[#212529] space-y-5">
        <div class="flex items-center left">
          <div>
            <p class="gooper-deck-bold text-4xl w-3/4">
              Set up your own domain <span class="text-[#2b8a3e] gooper-deck-black">with DNS</span>
            </p>
            <p class="mt-2 font-semibold w-3/4 text-stone-700">
                You can redirect your profile to your own site using our special(just a computer lol) systems
            </p>
          </div>
        </div>
        <div class="w-full bg-stone-700 rounded-md p-4 text-yellow-500">
          <p>$ dig +nocmd rexulec.crdvisit.net any +multiline +noall +answer</p>
          <p>rexulec.crdvisit.net. 300 IN A xxx.xx.xxx.xxx</p>
          <p>rexulec.crdvisit.net. 300 IN TXT "v=spf1 include:example.com -all"</p>
          <p>rexulec.crdvisit.net. 300 IN MX 10 mx1.example.com.</p>
          <p>rexulec.crdvisit.net. 300 IN MX 20 mx2.example.com.</p>
          <p class="mt-4">$ (we inspired this part from omg.lol, thanks to them!)</p>
        </div>
      </div>
    </div>

    <div class="flex w-full md:p-20 p-10 bg-[#66d9e8]">
      <div class="md:flex justify-between w-full text-[#212529] space-y-5">
        <div class="flex items-center left">
          <div>
            <p class="gooper-deck-bold text-4xl w-3/4">
              Want an <span class="text-[#0b7285] gooper-deck-black">E-Mail? ✨</span>
            </p>
            <p class="mt-2 font-semibold w-3/4 text-stone-700">
              ✨New✨ Now you can redirect emails to your own address.
            </p>
          </div>
        </div>
        <div class="w-full bg-[#c8e3fa] rounded-md p-4 space-y-2">
          <div class="space-y-1">
            <p class="font-medium w-3/4 text-stone-700">
              From: <span class="font-semibold">mert@settleco.net</span>
            </p>
            <p class="font-medium w-3/4 text-stone-700">
              To: <span class="font-semibold">alex@crdvisit.net</span>
            </p>
            <p class="font-medium w-3/4 text-stone-700">
              Subject: <span class="font-semibold">mert@settleco.net</span>
            </p>
          </div>
          <div class="h-0.5 w-full bg-gray-400">
          </div>
          <div>
            <p>{{">>"}} <span class="font-semibold">where did everyone go?</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full md:p-20 p-10 bg-[#d0ebff]">
      <div class="md:flex justify-between w-full text-[#212529] space-y-5">
        <div class="flex items-center left">
          <div>
            <p class="gooper-deck-bold text-4xl">
              Our <span class="text-[#1864ab] gooper-deck-black">Community</span>
            </p>
            <p class="mt-2 font-semibold md:w-3/4 text-stone-700">     
              You can reach our fun and non-violent community on Slack with the Standard membership package and you can write your questions to the authorities there.
              If you want to join our community, you can use the e-mail address we have given you, or if you are not given an e-mail address, you can reach us via any platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- #8ce99a -->

<script>
</script>
