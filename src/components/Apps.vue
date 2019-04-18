<template>
    <div>

        <div class="main-content">

            <div class="padding-15px">
                <div class="grid grid-2x">
                    <div class="col-1">
                        <div class="txt-site txt-18 txt-bold txt-main post-center">
                            Apps
                        </div>
                    </div>
                    <div class="col-2 content-right">
                        <button class="btn btn-blue" @click="openDataForm()">
                            <i class="fa fa-lw fa-filter"></i>
                            <span>FILTER</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="txt-site txt-12 txt-primary txt-bold margin-left-15px">
                Content Apps 1
            </div>

            <div class="display-flex-mobile">

                <div class="card" v-for="(item, index) in 3" :key="index">
                    
                    <div class="padding-15px background-blue">
                        Apps
                    </div>

                    <div class="padding-top-25px padding-bottom-25px">
                        <div class="card-percentage border-50">
                            <div class="percentage-info">
                                <div class="percentage-title">
                                    50%
                                </div>
                                <div class="percentage-subtitle">
                                    Percentage
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="txt-site txt-12 txt-primary txt-bold margin-left-15px margin-top-15px">
                Content Apps 2
            </div>

            <div class="display-flex">

                <div class="card" v-for="(item, index) in 2" :key="index">
                    
                    <div class="padding-15px background-blue">
                        Apps
                    </div>

                    <div class="padding-top-25px padding-bottom-25px">
                        <div class="card-percentage border-75">
                            <div class="percentage-info">
                                <div class="percentage-title">
                                    75%
                                </div>
                                <div class="percentage-subtitle">
                                    Percentage
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>
