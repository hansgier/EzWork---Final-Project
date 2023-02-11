<template>

    <!----------------Home---------------->

    <div class="home-pane">
        <div class="home-container">
        <div class="greeting-pane">
            <h5>Welcome, <strong>user!</strong></h5>
            <h3>Quickly access your recent projects and get started</h3>
        </div>
        <div class="img-container">
            <img src="src/assets/images/particles1.svg" />
        </div>
        </div>
        <div class="get-start-container">
            <button class="get-started-btn" @click="show = !show">Get Started</button>
        </div>
    </div>


    <!----------------Get Started---------------->

    <div class="get-started-div">
        <transition name="gstDivFade">
            <div class="gst-main" v-if="show">
                <!----------------Box---------------->
                <div class="gst-box">
                    <!----------------Header---------------->

                    <div class="gst-header">
                        <div class="gst-header-title">
                            <h2 class="gst-h2">Create Project</h2>
                        </div>
                        <div class="gst-x-container" @click="show = !show">
                            <font-awesome-icon icon="fa-solid fa-x" class="x-img" />
                        </div>
                    </div>

                    <!----------------Content---------------->

                    <form class="gst-content">
                        <div class="gst-prjname-container">
                            <h5 class="gst-content-h5">Project name</h5>
                        </div>
                        <div class="prjname-inputfield">
                            <input
                                type="text"
                                placeholder="New Project Name"
                                class="prj-name"
                            />
                        </div>
                        <hr />
                        <div class="gst-instruc">
                            <h5 class="gst-content-h5">
                                Select what you’re managing in this project
                            </h5>
                        </div>
                        <div class="gst-ctgory-container">
                            <div class="gst-ctgory">
                                <div class="ctgory-icon">
                                    <font-awesome-icon
                                        icon="fa-solid fa-basket-shopping"
                                        class="ctg-item-img"
                                    />
                                </div>
                                <div class="ctgory-name">
                                    <h6 class="ctgory-h6">Items</h6>
                                </div>
                            </div>
                            <div class="gst-ctgory">
                                <div class="ctgory-icon">
                                    <font-awesome-icon
                                        icon="fa-solid fa-list-check"
                                        class="ctg-tasks-img"
                                    />
                                </div>
                                <div class="ctgory-name">
                                    <h6 class="ctgory-h6">Tasks</h6>
                                </div>
                            </div>
                            <div class="gst-ctgory">
                                <div class="ctgory-icon">
                                    <font-awesome-icon icon="fa-solid fa-paperclip" class="ctg-projects-img"/>
                                </div>
                                <div class="ctgory-name">
                                    <h6 class="ctgory-h6">Projects</h6>
                                </div>
                            </div>
                            <div class="gst-ctgory">
                                <div class="ctgory-icon">
                                    <font-awesome-icon
                                        icon="fa-solid fa-gear"
                                        class="ctg-custom-img"
                                    />
                                </div>
                                <div class="ctgory-name">
                                    <h6 class="ctgory-h6">Custom</h6>
                                </div>
                            </div>
                        </div>
                        <div class="gst-buttons-container">
                            <div class="gst-cancel-btn" @click="show = false">Cancel</div>
                            <button class="gst-create-btn" type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </transition>

    </div>

</template>

<script>
export default {
    name: "HomePane",
    data() {
        return {
            show: false
        }
    },
};

</script>

<style scoped>
@import "@/assets/get-started.css";


/*------------------Transition------------------*/

    .gstDivFade-enter-active, .gstDivFade-leave-active{
        transition: opacity .3s ease-in-out;
    }

    .gstDivFade-enter-from{
        opacity: 0;
    }

    .gstDivFade-enter-to{
        opacity: 1;
    }

    .gstDivFade-leave-from{
        opacity: 1;
    }

    .gstDivFade-leave-to{
        opacity: 0;
    }


/*------------------Home Pane------------------*/

.home-pane {
  position: absolute;
  padding-left: 5rem;
  width: 100%;
  height: 4em;
  left: 0;
  top: 0;
  font-size: 22px;
  display: flex;
  flex-direction: row;
  background: #1c1f3b;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 0.1px;
  border-color: rgba(255, 255, 255, 0.5);
  border-style: solid;
}

.home-container {
  position: relative;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  user-select: none;
}

.greeting-pane {
  padding: 0 4em;
  margin-right: 2rem;
  justify-content: center;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
}

.img-container {
  position: relative;
  height: 100%;
  display: inline-block;
  overflow: hidden;
}

img {
  margin: 0;
  padding: 0;
  border: 0;
  width: 25rem;
  vertical-align: baseline;
}

h5 {
  font-size: 1rem;
  font-weight: 400;
  color: white;
}

h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #92f6ff;
}

.get-start-container {
  width: 20%;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.get-started-btn {
  padding: 0.6rem 1.7rem;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: sans-serif;
  letter-spacing: 0.01rem;
  color: white;
  background: #2f8f9d;
  outline: none;
  border: none;
  border-radius: 0.1rem;
  transition: 0.5s;
  cursor: pointer;
}

.get-started-btn:hover {
  background: #3bacb6;
}

</style>
