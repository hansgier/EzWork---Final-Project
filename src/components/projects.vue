<template>

    <!-------------------PROJECT-------------------------->

    <div class="project-main" :style="{width: mainProjWidth, left: mainProjLeft}">
        <div class="title-container">
            <div class="title-block">
                <form class="project-title">
                    <input 
                        type="text" 
                        class="project-title-input" 
                        ref="textbox" 
                        v-bind:style="{ width: textWidth + '%' }" 
                        v-model="text" 
                        @mouseleave="decreaseWidth"
                        @click="adjustWidth"
                        @blur="checkText"
                    >
                </form>
                <div class="project-btngrp">
                    <div class="info-btn">
                        <font-awesome-icon icon="fa-solid fa-circle-info" class="info-btn-img"/>
                    </div>
                    <div class="fav-btn">
                        <font-awesome-icon icon="fa-solid fa-star" class="star-btn-img"/>
                    </div>
                </div>
                <div class="delete-btn">
                    <font-awesome-icon icon="fa-solid fa-trash" class="del-btn-img"/>
                </div>
            </div>
            <div class="description-block">
                <input type="text" class="descrip-p" placeholder="Write your description here...">
            </div>
        </div>
        <div class="switchview-container">
            <div class="maintable-btn">
                <div class="maintable-icon">
                    <font-awesome-icon icon="fa-solid fa-house-chimney" class="maintable-img"/>
                </div>
                <div class="main-table-label">
                    <h4 class="selected-label">Main Table</h4>
                </div>
            </div>
            <div class="divider"></div>
            <div class="chart-btn">
                <h4 class="selected-label">Chart</h4>
            </div>
        </div>
        <div class="options-container">
            <div class="option-btn-newtask">
                <div class="options-btn-label">
                    <h4 class="option-h4-newtask">New Task</h4>
                </div>
            </div>
            <div class="option-btn">
                <div class="options-btn-icon">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="srch-btn-img"/>
                </div>
                <div class="options-btn-label">
                    <h4 class="option-h4">Search</h4>
                </div>
            </div>
            <div class="option-btn">
                <div class="options-btn-icon">
                    <font-awesome-icon icon="fa-solid fa-filter" class="flter-btn-img"/>
                </div>
                <div class="options-btn-label">
                    <h4 class="option-h4">Filter</h4>
                </div>
            </div>
            <div class="option-btn">
                <div class="options-btn-icon">
                    <font-awesome-icon icon="fa-solid fa-sort" class="sort-btn-img"/>
                </div>
                <div class="options-btn-label">
                    <h4 class="option-h4">Sort</h4>
                </div>
            </div>
        </div>
        <div class="content-container">
            <ul>
                <li class="content-item-container-li" v-for="(grp, index) in grp" :key="index.id">
                    <div class="content-item-header">
                        <div class="collapsible-content-itemicon-container" @click="collapseGrp = !collapseGrp">
                            <font-awesome-icon icon="fa-solid fa-angle-down" class="collapsible-itemicon-img"/>
                        </div>
                        <div class="content-itemname-container">
                            <input type="text" class="content-itemname" placeholder="Enter item name">
                        </div>
                        <div class="content-itemcount-container">
                            <h6 class="content-itemcount-h6">0 item</h6>
                        </div>
                        <div class="content-itemdelete-container">
                            <font-awesome-icon icon="fa-solid fa-trash-can" class="item-trash-img" @click="deleteGrp(index)"/>
                        </div>
                    </div>
                    <div class="content-table" v-if="collapseGrp">
                        <table>
                            <tr class="row-header">
                                <th class="select">
                                    <input type="checkbox" class="table-select-chkbox">
                                </th>
                                <th class="long-th">Task</th>
                                <th class="header-th">Status</th>
                                <th class="header-th">Timeline</th>
                                <th class="header-th">Duration</th>
                                <th class="blank-th"></th>
                            </tr>
                            <tr class="row-data">
                                <td class="select">
                                    <input type="checkbox" class="table-select-chkbox">
                                </td>
                                <td class="addtask-td">
                                    <input type="text" placeholder="+ Add Task" class="input-addtask">
                                    <div class="minus-btn-container">
                                        <font-awesome-icon icon="fa-solid fa-square-minus" class="minus-item"/>
                                    </div>
                                </td>
                                <td class="data-td"></td>
                                <td class="data-td"></td>
                                <td class="data-td"></td>
                                <td class="blank-td"></td>
                            </tr>
                        </table>
                    </div>
                </li>
            </ul>
        </div>
        <div class="addgrp-container">
            <div class="addgrp-btn" @click="addNewGrp">
                <div class="addgrp-icon">
                    <font-awesome-icon icon="fa-solid fa-plus" class="addgrp-btn-img"/>
                </div>
                <div class="addgrp-label">
                    <h4>Add New Group</h4>
                </div>
            </div>
        </div>
    </div>

    
    <!-------------------PROJECT PANE-------------------------->

    <nav class="proj-container" :style="{ width: projBarWidth}">
        <div class="header-component" :style="{ opacity: contentOpacity, display: contentVisibility}">
            <div class="projects">
                <h3>Projects</h3>
            </div>
        </div>
        <div class="component" :style="{ opacity: contentOpacity, display: contentVisibility}">
            <div class="option-selected" @click="show = !show">
                <div class="options">
                    <div class="ico-container">
                        <font-awesome-icon icon="fa-solid fa-plus" class="add-img" />
                    </div>
                    <div class="label">
                        <h6>Add</h6>
                    </div>
                </div>
            </div>
            <div href="" class="option-selected">
                <div class="options">
                    <div class="ico-container">
                        <font-awesome-icon icon="fa-solid fa-filter" class="filter-img" />
                    </div>
                    <div class="label">
                        <h6>Filter</h6>
                    </div>
                </div>
            </div>
            <div href="" class="option-selected">
                <div class="options">
                    <div class="ico-container">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="  " />
                    </div>
                    <div class="label">
                        <h6>Search</h6>
                    </div>
                </div>
            </div>
        </div>
        <ul class="component" :style="{ opacity: contentOpacity, display: contentVisibility}">
            <li class="nav-li">
                <div href="" class="project-selected">
                    <div class="project-list">
                        <div class="ico-container">
                            <font-awesome-icon
                                icon="fa-solid fa-list-check"
                                class="prj-img"
                            />
                        </div>
                        <div class="project-label">
                            <h6>My First Project</h6>
                        </div>
                        <div class="delete-container">
                            <font-awesome-icon icon="fa-solid fa-trash" class="del-img" />
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-li">
                <div href="" class="project-selected">
                    <div class="project-list">
                        <div class="ico-container">
                            <font-awesome-icon
                                icon="fa-solid fa-list-check"
                                class="prj-img"
                            />
                        </div>
                        <div class="project-label">
                            <h6>My Second Project</h6>
                        </div>
                        <div class="delete-container">
                            <font-awesome-icon icon="fa-solid fa-trash" class="del-img" />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
    <font-awesome-icon
        icon="fa-solid fa-angle-left"
        class="pane-toggle"
        :style="{ left: paneToggleLeft }"
        @click="toggleProjBar"
    />

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
    name: "Projects",
    data() {
        return {
            projBarOpen: true,
            projBarWidth: "15.625rem",
            mainProjWidth: "calc(100% - 19.625rem)",
            mainProjLeft: "19.625rem",
            paneToggleLeft: "18.75rem",
            contentOpacity: 1,
            contentVisibility: 'flex',
            text: "My First Project",
            originaltext: "My First Project",
            textWidth: 50,
            collapseGrp: true,
            grpCount: 1,
            grp: [
                { id: 1,},
            ],
            idCounter: 1,
            show: false,
        };
    },
    methods: {
        toggleProjBar(){
            this.projBarOpen = !this.projBarOpen;
            this.projBarWidth = this.projBarOpen ? '15.625rem' : '1.5rem';
            this.paneToggleLeft = this.projBarOpen ? '18.75rem' : '4.65rem';
            this.contentOpacity = this.projBarOpen ? '1' : '0';
            this.contentVisibility = this.projBarOpen ? 'flex' : 'none';
            this.mainProjWidth = this.projBarOpen ? 'calc(100% - 19.625rem)' : '100%';
            this.mainProjLeft = this.projBarOpen ? '19.625rem' : '5.5rem';
        },
        checkText() {
            if (!this.text) {
                this.text = this.originaltext;
            } else {
                this.originaltext = this.text;
            }
        },
        decreaseWidth(){
            this.textWidth = auto;
        },
        adjustWidth(){
            this.textWidth = 100;
        },
        addNewGrp(){
            let id = this.idCounter;

            // find the first available id
            for (let i = 1; i <= this.idCounter; i++) {
                if (!this.grp.find((item) => item.id === i)) {
                    id = i;
                    break;
                }
            }
            this.idCounter = Math.max(id + 1, this.idCounter + 1);
            this.grp.push({
                id: (this.grp.length + 1),
            });
            this.grpCount++;
        },
        deleteGrp(index){
            if (this.grpCount > 1){
                this.grp.splice(index,1);
                // this.id--;
                this.grpCount--;
            }
        },
    },
};
</script>

<style scoped>
@import "@/assets/project-pane.css";
@import "@/assets/projects.css";
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
</style>