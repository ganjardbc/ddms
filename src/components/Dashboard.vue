<template>
    <div>

        <div class="main-content">

            <div class="padding-15px grid grid-2x grid-mobile-none">
                
                <div class="column-1">
                    <div class="txt-site txt-18 txt-main-color txt-bold margin-top-5px margin-bottom-5px">
                        Dashboard
                    </div>
                </div>

                <div class="column-2 content-right display-flex">

                    <form action="#" style="width: 100%;">
                        <div class="input-group">
                            <input 
                                type="date" 
                                class="txt txt-main-color txt-trans-color" 
                                placeholder="Date"
                                required>
                            <button 
                                class="btn btn-no-radius btn-blue icn"
                                type="submit">
                                <i class="far fa-lg fa-calendar"></i>
                            </button>
                        </div>
                    </form>

                    <div class="margin-left-5px margin-right-5px">
                        <button class="btn btn-blue btn-qube icn">
                            <i class="fa fa-lg fa-print"></i>
                        </button>
                    </div>

                    <div>
                        <button 
                            class="btn btn-blue btn-qube icn" 
                            @click="openMenuMore()">
                            <i class="fa fa-lg fa-ellipsis-h"></i>
                        </button>
                    </div>

                    <div
						style="top: 40px;" 
						class="app-menu-popup" 
						v-if="menuMore">
						<ul>
							<li @click="openMenuMore()">
								Opsi 1
							</li>
							<li @click="openMenuMore()">
								Opsi 2
							</li>
							<li @click="openMenuMore()">
								Opsi 3
							</li>
						</ul>
					</div>

                </div>

            </div>

            <div>

                <div class="display-flex-mobile">

                    <div class="card" v-for="(item, index) in 2" :key="index">
                        <div class="padding-15px background-blue">
                            Statistik
                        </div>
                        <div class="padding-15px">
                            <div class="margin-10px txt-site txt-primary txt-14">
                                Customers
                            </div>
                            <div class="margin-15px txt-site txt-main txt-20 txt-bold">
                                36,254
                            </div>
                            <div class="margin-top-10px txt-site txt-green txt-11">
                                <i class="fa fa-lw fa-arrow-up"></i>
                                5.27%
                            </div>
                            <div class="margin-bottom-10px txt-site txt-primary txt-11">
                                Since last month
                            </div>
                        </div>
                    </div>

                    <div class="card" v-for="(item, index) in 2" :key="index">
                        <div class="padding-15px background-blue">
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

                <div>

                    <div class="display-flex-mobile" style="width: 100%;">
                        <table>
                            <thead class="background-blue">
                                <th>No</th>
                                <th>Content 1</th>
                                <th>Content 2</th>
                                <th>Content 3</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in 5" :key="index">
                                    <td>
                                        <strong>{{ index + 1 }}</strong>
                                    </td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- <table>
                            <thead class="background-blue">
                                <th>No</th>
                                <th>Content 1</th>
                                <th>Content 2</th>
                                <th>Content 3</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in 5" :key="index">
                                    <td>
                                        <strong>{{ index + 1 }}</strong>
                                    </td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table> -->

                        
                            <div class="card">
                                <div class="padding-15px background-blue">
                                    Diagram
                                </div>
                                <div class="card-mid">
                                    <div class="padding-10px txt-site txt-primary txt-14">
                                        Diagram will show in here
                                    </div>
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
    data () {
        return {
            dataForm: false,
            dataFormEdit: false,
            menuMore: false,
        }
    },
    methods: {
        openMenuMore () {
            if (this.menuMore == true) {
                this.menuMore = false
            } else {
                this.menuMore = true
            }
        }
    }
}
</script>