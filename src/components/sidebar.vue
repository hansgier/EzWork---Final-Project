<template>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <!------Sidebar------->

    <div class="sidebar">
        <router-link to="/home">
            <div class="logo-wrapper">
                <div class="logo-button-selected">
                    <div class="logo-container">
                    <img
                        src="src/assets/images/svg/logo-no-background.svg"
                        class="image-logo"
                    />
                    </div>
                </div>
            </div>
        </router-link>
        <div class="divider"></div>
        <div class="nav-area">
        <div class="top-nav-area">
            <div class="bttn-wrapper">
                <router-link to="/home">
                    <div class="item-wrapper">
                        <div href="" class="bttn-select">
                        <font-awesome-icon icon="fa-solid fa-house" class="btn-img" />
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="bttn-wrapper">
                <router-link to="/projects">
                    <div class="item-wrapper">
                        <div href="" class="bttn-select">
                        <font-awesome-icon icon="fa-solid fa-briefcase" class="btn-img" />
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="bttn-wrapper">
                <router-link to="/favorites">
                    <div class="item-wrapper">
                        <div class="bttn-select">
                            <font-awesome-icon icon="fa-solid fa-star" class="btn-img" />
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="bottom-nav-area">
            <div class="bttn-wrapper">
            <div class="item-wrapper" >
                <div href="" class="bttn-select" @click="showSearch = !showSearch">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="btn-img"
                    />
                </div>
            </div>
            </div>
            <div class="bttn-wrapper">
            <div class="item-wrapper">
                <div class="bttn-select" @click="showNotif = !showNotif">
                    <font-awesome-icon icon="fa-solid fa-bell" class="btn-img" />
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="divider2"></div>
        <div class="footer-nav-area">
        <div class="acc-wrapper" @click="showSettings = !showSettings" >
            <div class="acc-selected">
            <div class="acc-container">
                <font-awesome-icon icon="fa-solid fa-user" class="account-img" />
            </div>
            </div>
        </div>
        </div>
    </div>

    <!------Settings------->
    <transition name="settingsTransition">
        <div class="settings-container" v-if="showSettings">
            <div class="account-block">
                <div class="account-profilelabel">
                    <div class="account-logo">
                        <font-awesome-icon icon="fa-solid fa-compass" class="user-img"/>
                    </div>
                    <div class="account-name">
                        <h5 class="username-h5">Juan Dela Cruz</h5>
                    </div>
                </div>
                <div class="account-switch">
                    <div class="switchacc-btn">
                        <div class="switchacc-label">
                            <h6 class="switch-h6">Switch Accounts</h6>
                        </div>
                        <div class="switchacc-ico">
                            <font-awesome-icon icon="fa-solid fa-angle-right" class="switch-img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="othersettings-block">
                <div class="othersettings-wrapper">
                    <div class="myprofile-btn">
                        <div class="settings-ico">
                            <font-awesome-icon icon="fa-solid fa-user" class="myprofile-img"/>
                        </div>
                        <div class="othersettings-label">
                            <h6 class="settings-h6">My Profile</h6>
                        </div>
                    </div>
                </div>
                <div class="othersettings-wrapper">
                    <div class="notificationsettings-btn">
                        <div class="settings-ico">
                            <font-awesome-icon icon="fa-solid fa-bell" class="bell-img"/>
                        </div>
                        <div class="othersettings-label">
                            <h6 class="settings-h6">Notification Settings</h6>
                        </div>
                        <div class="notif-btn">
                            <font-awesome-icon icon="fa-solid fa-angle-right" class="settings-angle-left-img"/>
                        </div>
                    </div>
                </div>
                <div class="othersettings-wrapper">
                    <div class="feedback-btn">
                        <div class="settings-ico">
                            <font-awesome-icon icon="fa-solid fa-comment" class="feedback-img"/>
                        </div>
                        <div class="othersettings-label">
                            <h6 class="settings-h6">Give Feedback</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="logout-block">
                <router-link class="no-underline" to="/">
                    <div class="logout-btn">
                        <div class="logout-ico">
                            <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="logout-img"/>
                        </div>
                        <div class="logout-label">
                            <h5 class="logout-h5">Log out</h5>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </transition>


    <!------Search------->

    <transition name="searchTransition">
        <div class="search-container" v-if="showSearch">
            <div class="searchbox-block">
                <input type="text" placeholder="Search something ..." class="searchbox-input">
            </div>
            <div class="searchcategories-block">
                <div class="categobtn selected">All</div>
                <div class="categobtn">Projects</div>
                <div class="categobtn">Updates</div>
            </div>
            <div class="searchrecent-block">
                <div class="recentsearch-header">
                    <div class="recentsearch-ico">
                        <font-awesome-icon icon="fa-solid fa-clock" class="clock-img"/>
                    </div>
                    <div class="recentsearch-label">
                        <h4 class="recentsearch-h4">Recent Searches</h4>
                    </div>
                </div>
                <div class="recentsearch-content">
                    <ul>
                        <li class="recent-li">
                            <div class="recent-ico">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="recent-img"/>
                            </div>
                            <div class="recent-label">
                                <h6 class="recent-name">Lorem Ipsum</h6>
                            </div>
                        </li>
                        <li class="recent-li">
                            <div class="recent-ico">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="recent-img"/>
                            </div>
                            <div class="recent-label">
                                <h6 class="recent-name">Lorem Ipsum</h6>
                            </div>
                        </li>
                        <li class="recent-li">
                            <div class="recent-ico">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="recent-img"/>
                            </div>
                            <div class="recent-label">
                                <h6 class="recent-name">Lorem Ipsum</h6>
                            </div>
                        </li>
                        <li class="recent-li">
                            <div class="recent-ico">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="recent-img"/>
                            </div>
                            <div class="recent-label">
                                <h6 class="recent-name">Lorem Ipsum</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else></div>
    </transition>

    <!------Notifications------->

    <transition name="notifTransition">
        <div class="notification-container" v-if="showNotif">
            <div class="notif-header-block">
                <div class="headertitle-container">
                    <h2 class="header-h2">Notifications</h2>
                </div>
                <div class="header-options-container">
                    <font-awesome-icon icon="fa-solid fa-ellipsis" class="more-img"/>
                </div>
                <div class="header-x-container" @click="showNotif = !showNotif">
                    <font-awesome-icon icon="fa-solid fa-x" class="cancelnotif-img"/>
                </div>
            </div>
            <div class="notif-categ-block">
                <div class="btn-selected"></div>
                <div class="all-btn">All</div>
                <div class="unread-btn">Unread</div>
                <div class="today-btn">Today</div>
            </div>
            <div class="notif-content-block">
                <ul>
                    <li class="notif">
                        <div class="notificon-container">
                            <img src="src/assets/images/notif-icon.svg" alt="" class="notificon-img">
                        </div>
                        <div class="notiftxt-container">
                            <div class="person-block">
                                <h3 class="person-h3">EzWork</h3>
                            </div>
                            <div class="content-block">
                                <p>Your deadline has expired.</p>
                            </div>
                            <div class="details-block">
                                <p>2 mins ago | My First Project</p>
                            </div>
                        </div>
                        <div class="notifdel-container">
                            <font-awesome-icon icon="fa-solid fa-trash-can" class="trash-img"/>
                        </div>
                    </li>
                    <li class="notif">
                        <div class="notificon-container">
                            <img src="src/assets/images/notif-icon.svg" alt="" class="notificon-img">
                        </div>
                        <div class="notiftxt-container">
                            <div class="person-block">
                                <h3 class="person-h3">EzWork</h3>
                            </div>
                            <div class="content-block">
                                <p>Your deadline has expired.</p>
                            </div>
                            <div class="details-block">
                                <p>3 mins ago | My First Project</p>
                            </div>
                        </div>
                        <div class="notifdel-container">
                            <font-awesome-icon icon="fa-solid fa-trash-can" class="trash-img"/>
                        </div>
                    </li>
                    <li class="notif">
                        <div class="notificon-container">
                            <img src="src/assets/images/notif-icon.svg" alt="" class="notificon-img">
                        </div>
                        <div class="notiftxt-container">
                            <div class="person-block">
                                <h3 class="person-h3">EzWork</h3>
                            </div>
                            <div class="content-block">
                                <p>Your deadline has expired.</p>
                            </div>
                            <div class="details-block">
                                <p>5 mins ago | My First Project</p>
                            </div>
                        </div>
                        <div class="notifdel-container">
                            <font-awesome-icon icon="fa-solid fa-trash-can" class="trash-img"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </transition>

</template>

<script>
import { RouterLink } from "vue-router";
export default {
    name: "SideBar",
    data() {
        return {
            showSettings: false,
            showSearch: false,
            showNotif: false,
        }
    },
};
</script>

<style scoped>
@import "@/assets/sidebar.css";
@import "@/assets/settings.css";
@import "@/assets/search.css";
@import "@/assets/notifications.css";
.no-underline{
    text-decoration: none;
}

/*------------------Settings Transition------------------*/

.searchTransition-enter-active, .searchTransition-leave-active{
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.searchTransition-enter-from{
    left: -44rem;
    opacity: 0;
}

.searchTransition-enter-to{
    left: 4rem;
    opacity: 1;
}

.searchTransition-leave-from{
    left: 4rem;
    opacity: 1;
}

.searchTransition-leave-to{
    left: -34rem;
    opacity: 0;
}

/*------------------Search Transition------------------*/

.settingsTransition-enter-active, .settingsTransition-leave-active{
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.settingsTransition-enter-from{
    left: -44rem;
    opacity: 0;
}

.settingsTransition-enter-to{
    left: 4rem;
    opacity: 1;
}

.settingsTransition-leave-from{
    left: 4rem;
    opacity: 1;
}

.settingsTransition-leave-to{
    left: -44rem;
    opacity: 0;
}

/*------------------Notifications Transition------------------*/

.notifTransition-enter-active, .notifTransition-leave-active{
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.notifTransition-enter-from{
    left: -44rem;
    opacity: 0;
}

.notifTransition-enter-to{
    left: 4rem;
    opacity: 1;
}

.notifTransition-leave-from{
    left: 4rem;
    opacity: 1;
}

.notifTransition-leave-to{
    left: -44rem;
    opacity: 0;
}


</style>
