<template>
  <div>
    <Navbar class="sticky top-0 z-1"/>
    <router-view></router-view>
    <BottomFooter />
  </div>
</template>

<style>
@font-face {
    font-family: 'Gooper Deck Bold';
    src: url('/fonts/GooperDeck-Bold.ttf');
}

@font-face {
    font-family: 'Gooper Deck Black';
    src: url('/fonts/GooperDeck-Black.ttf');
}

.gooper-deck-bold {
    font-family: 'Gooper Deck Bold', serif;
}

.gooper-deck-black {
    font-family: 'Gooper Deck Black', serif;
}

 *{
    font-family: 'SF Pro Display', sans-serif;
 }
</style>