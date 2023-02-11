<template>

    <!-------------------PROJECT-------------------------->

    <!-- <div class="project-main" :style="{width: mainProjWidth, left: mainProjLeft}">
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
                <li class="content-item-container-li">
                    <div class="content-item-header">
                        <div class="collapsible-content-itemicon-container">
                            <font-awesome-icon icon="fa-solid fa-angle-down" class="collapsible-itemicon-img"/>
                        </div>
                        <div class="content-itemname-container">
                            <input type="text" class="content-itemname" placeholder="Enter item name">
                        </div>
                        <div class="content-itemcount-container">
                            <h6 class="content-itemcount-h6">0 item</h6>
                        </div>
                    </div>
                    <div class="content-table">
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
            <div class="addgrp-btn">
                <div class="addgrp-icon">
                    <font-awesome-icon icon="fa-solid fa-plus" class="addgrp-btn-img"/>
                </div>
                <div class="addgrp-label">
                    <h4>Add New Group</h4>
                </div>
            </div>
        </div>
    </div> -->

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
                    <transition name="grpCollapseTrans">
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
                    </transition>
                    
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
                <h3>Favorites</h3>
            </div>
        </div>
        <ul class="component" :style="{ opacity: contentOpacity, display: contentVisibility}">
            <li class="nav-li">
                <div href="" class="project-selected">
                    <div class="project-list">
                        <div class="ico-container">
                            <font-awesome-icon
                                icon="fa-solid fa-star"
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
                                icon="fa-solid fa-star"
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

</template>

<script>

export default {
    name: "Favorites",
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
        };
    },
    methods: {
        toggleProjBar(){
            this.projBarOpen = !this.projBarOpen;
            this.projBarWidth = this.projBarOpen ? '15.625rem' : '1.5rem';
            this.paneToggleLeft = this.projBarOpen ? '18.75rem' : '4.65rem';
            this.contentOpacity = this.projBarOpen ? '1' : '0';
            this.contentVisibility = this.projBarOpen ? 'flex' : 'none';
            // this.mainProjWidth = this.projBarOpen ? 'calc(100% - 19.625rem)' : 'calc(100% - 5.5rem)';
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

/*------------Transition---------------*/

.grpCollapseTrans-enter-active, .grpCollapseTrans-leave-active{
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.grpCollapseTrans-enter-from{
    opacity: 0;
}

.grpCollapseTrans-enter-to{
    opacity: 1;
}

.grpCollapseTrans-leave-from{
    opacity: 1;
}

.grpCollapseTrans-leave-to{
    opacity: 0;
}

</style>