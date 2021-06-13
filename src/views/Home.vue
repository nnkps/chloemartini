<template>
  <div class="home">
    <div class="row">
        <div class="column">
            <div class="cell">
              <img class="image-scaled" src="../assets/GabinetCieni.png" alt="Gabinet Cieni">
            </div>
        </div>
        <div class="column">
            <div class="cell">
              <p>
                ”Gabinet Cieni”<br>
                (eng. “Shadow Cabinet”)<br> 
                is a podcast about grey eminences of the music industry on newonce.radio hosted by myself.
              </p>
              <p class="small">(in polish language only)</p><br>
              <p class="small">
                <a class="button" href="https://newonce.net/podcast/gabinet-cieni-ft-chloe-martini">Listen to the episodes</a>
              </p>
            </div>
        </div>
    </div> 
  </div>
</template>

<style scoped>
.home {
  color: white;
}

.home p {
  font-size: calc((2 - 1) * 1.2vw + 1rem);
  font-style: italic;
  text-align: left;
  line-height: 1.2;
}

.home p.small {
  font-size: calc((1.2 - 1) * 1.2vw + 1rem);
}

.image-scaled {
  width: 100%;
  height: auto;
}
</style>
