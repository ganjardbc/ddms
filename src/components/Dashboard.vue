<template>
    <div>

        <div class="main-content">

            <div class="padding-15px grid grid-2x">
                
                <div class="column-1">
                    <div class="txt-site txt-18 txt-main-color txt-bold post-center">
                        Dashboard
                    </div>
                </div>

                <div class="column-2 content-right">

                    <form action="#" style="display: inline-block; vertical-align: top;">
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

                    <button class="btn btn-blue btn-qube icn">
                        <i class="fa fa-lg fa-print"></i>
                    </button>

                    <button class="btn btn-blue btn-qube icn" @click="openMenuMore()">
                        <i class="fa fa-lg fa-ellipsis-h"></i>
                    </button>

                    <div
						style="top: 40px;" 
						class="app-menu-popup" 
						v-if="menuMore">
						<ul>
							<li>
								Opsi 1
							</li>
							<li>
								Opsi 2
							</li>
							<li>
								Opsi 3
							</li>
						</ul>
					</div>

                </div>

            </div>

            <div>

                <div class="display-flex">
                    <div class="card" v-for="(item, index) in 4" :key="index">
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
                </div>

                <div>

                    <div class="display-flex" style="width: 100%;">
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