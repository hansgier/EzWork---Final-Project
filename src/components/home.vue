<template>
  <div class="home-container">
    <div class="section-component">
      <div class="collapsible-section">
        <div class="colla-header">
          <font-awesome-icon icon="fa-solid fa-angle-down" class="angle-down" @click="show=!show"/>
          <h1>Projects</h1>
        </div>
        <div class="colla-content" v-if="show">
          <div class="items-component">
            <div href="" class="item-container" role="button">
              <div class="item-name"><h4>My First Project</h4></div>
              <div class="created-time-text"><h5>1 min</h5></div>
              <div class="fav-star">
                <div class="star-wrapper">
                  <div class="star-button">
                    <font-awesome-icon
                      icon="fa-solid fa-star"
                      class="star-img"
                    />
                  </div>
                </div>
              </div>
              <div class="delete-component">
                <div class="delete-wrapper">
                  <div class="delete-button">
                    <font-awesome-icon
                      icon="fa-solid fa-trash"
                      class="del-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div href="" class="item-container">
              <div class="item-name"><h4>My Second Project</h4></div>
              <div class="created-time-text"><h5>3 hrs</h5></div>
              <div class="fav-star">
                <div class="star-wrapper">
                  <div class="star-button">
                    <font-awesome-icon
                      icon="fa-solid fa-star"
                      class="star-img"
                    />
                  </div>
                </div>
              </div>
              <div class="delete-component">
                <div class="delete-wrapper">
                  <div class="delete-button">
                    <font-awesome-icon
                      icon="fa-solid fa-trash"
                      class="del-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="item-container">
              <div class="item-name"><h4>My Third Project</h4></div>
              <div class="created-time-text"><h5>7 days</h5></div>
              <div class="fav-star">
                <div class="star-wrapper">
                  <div class="star-button">
                    <font-awesome-icon
                      icon="fa-solid fa-star"
                      class="star-img"
                    />
                  </div>
                </div>
              </div>
              <div class="delete-component">
                <div class="delete-wrapper">
                  <div class="delete-button">
                    <font-awesome-icon
                      icon="fa-solid fa-trash"
                      class="del-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="collapsible-section">
        <div class="colla-header">
          <font-awesome-icon icon="fa-solid fa-angle-down" class="angle-down" @click="showS=!showS"/>
          <h1>Summary</h1>
        </div>
        <div class="colla-content" v-if="showS">
          <div class="summa-section">
            <div class="summa-wrapper">
              <div class="summa-content">
                <h1>0</h1>
                <h6>All Projects</h6>
              </div>
            </div>
            <div class="summa-wrapper">
              <div class="summa-content">
                <h1>0</h1>
                <h6>Today</h6>
              </div>
            </div>
            <div class="summa-wrapper">
              <div class="summa-content">
                <h1>0</h1>
                <h6>This Week</h6>
              </div>
            </div>
            <div class="summa-wrapper">
              <div class="summa-content">
                <h1>0</h1>
                <h6>Last Month</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: true,
      showS:true,
    }
  },
};
</script>

<style scoped>
@import "@/assets/home.css";
</style>
