<template>
  <div class="leaderboard">
    <h1>Leaderboard</h1>
    <div
        class="entry"
        v-for="(user, idx) in getLeaderboards"
        :key="idx"
        :class="{'gold': idx === 0, 'silver': idx === 1, 'bronze': idx === 2, 'me': user.username === username}"
    >
      <span class="place" v-if="idx<3"><font-awesome-icon icon="ranking-star"/></span>
      <span class="place" v-else>{{ idx + 1 }}º</span>
      <span class="user">{{ user.username }}</span>
      <span class="user">{{ user.totalPoints }} pontos</span>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "leaderBoard",
  components: {
    FontAwesomeIcon
  },
  computed: {
    ...mapGetters([
      'getLeaderboards',
      'username'
    ])
  },
  mounted() {
    this.$store.dispatch('getLeaderboard')
  }
}

import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

</script>

<style scoped>
h1 {
  color: #9400d3;
}

.leaderboard {
  position: relative;
  margin: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.entry {
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  border: 2px solid #9400d3;
  border-left: 4px solid #9400d3;
  border-right: 4px solid #9400d3;
  padding: 1rem;
  background: #b19cd9;
  color: white;
  width: 60%;
  opacity: 0.85;
}


.entry:first-of-type {
  border-top: 4px solid #9400d3;
}

.entry:last-of-type {
  border-bottom: 4px solid #9400d3;
}

.gold {
  color: gold;
  font-size: 3rem;
  font-weight: 700;
}

.silver {
  color: lightgray;
  font-size: 2.5rem;
  font-weight: 600;
}

.bronze {
  color: #cd7f32;
  font-weight: 500;
}

.me {
  transform: scale(1.05);
  opacity: 1;
}


@media (max-width: 50rem) {
  .leaderboard {
    position: relative;
    z-index: -1;
    margin: 5rem 0;
  }

  .entry {
    width: 90%;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
  }

  .gold {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .silver {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .bronze {
    font-size: 1.2rem;
  }

  .me {
    z-index: 1;
    transform: scale(1.1);
    opacity: 1;
  }

}

</style>