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

            <div class="display-flex-mobile">

                <div class="card" v-for="(item, index) in 3" :key="index">
                    
                    <div class="padding-15px gradient-blue">
                        Apps
                    </div>

                    <div class="padding-25px">
                        <div class="card-diagram width width-center ">
                            <div class="post-middle">
                                <div class="txt-site txt-20 txt-main txt-bold txt-center">
                                    120%
                                </div>
                                <div class="txt-site txt-11 txt-primary txt-center">
                                    Percentage
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="display-flex">

                <div class="card" v-for="(item, index) in 2" :key="index">
                    
                    <div class="padding-15px gradient-blue">
                        Apps
                    </div>

                    <div class="padding-25px">
                        <div class="card-diagram width width-center ">
                            <div class="post-middle">
                                <div class="txt-site txt-20 txt-main txt-bold txt-center">
                                    120%
                                </div>
                                <div class="txt-site txt-11 txt-primary txt-center">
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
