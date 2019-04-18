<template>
    <div>

        <div class="main-content">

            <div>
                <div>
                    
                    <div class="display-flex padding-15px">
                        <div class="grid grid-2x">
                            <div class="col-1">
                                <div class="txt-site txt-18 txt-bold txt-main post-center">
                                    Data pages
                                </div>
                            </div>
                            <div class="col-2 content-right">
                                <button class="btn btn-blue" @click="openDataForm()">
                                    <i class="fa fa-lg fa-plus"></i>
                                    <span>Add Data</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="display-flex">
                        <table>
                            <thead class="gradient-blue">
                                <th width="80">No</th>
                                <th>Content 1</th>
                                <th>Content 2</th>
                                <th width="200">Actions</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in 10" :key="index">
                                    <td>
                                        <strong>{{ index + 1 }}</strong>
                                    </td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>
                                        <button class="btn btn-green btn-small icn" @click="openDataFormEdit()">
                                            <i class="fa fa-lw fa-pencil-alt"></i>
                                        </button>
                                        <button class="btn btn-red btn-small icn">
                                            <i class="fa fa-lw fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div class="display-flex padding-bottom-20px">
                        <div class="width width-all padding-15px">
                            <div class="grid grid-2x">
                                <div class="col-1">
                                    <ul class="link link-pos">
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-lg fa-angle-left"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="val">
                                                5 / 15
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-lg fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-2 content-right">
                                    <div class="txt-site txt-main txt-11 post-center">
                                        [221 - 223 / 223]
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            
        </div>

        <!-- app form -->
        <div class="app-popup" v-if="dataForm">

            <div class="padding-top-20px"></div>

            <div class="width width-600px width-center background-white border-radius">

                <!-- panel -->
                <div class="padding-15px gradient-blue grid grid-2x">
                    <div class="col-1">
                        <div class="txt-site txt-12 txt-bold post-center">
                            Masukan Data
                        </div>
                    </div>
                    <div class="col-2 content-right">
                        <button class="btn btn-circle gradient-blue" @click="openDataForm()">
                            <i class="fa fa-lg fa-times"></i>
                        </button>
                    </div>
                </div>

                <!-- content -->
                <form action="#">
                    <div class="border-bottom padding-15px">

                        <div class="margin-bottom-15px">
                            <div class="margin-5px">
                                <div class="txt-site txt-11 txt-primary">
                                    <span class="txt-site txt-11 txt-primary">
                                        Content 1
                                    </span>
                                </div>
                            </div>
                            <input 
                                type="text" 
                                class="txt txt-primary-color"
                                placeholder="Content 1">
                        </div>

                        <div class="margin-15px">
                            <div class="margin-5px">
                                <div class="txt-site txt-11 txt-primary">
                                    Content 2
                                </div>
                            </div>
                            <select name="content2" class="slc slc-primary">
                                <option value="opt1">Opt1</option>
                                <option value="opt1">Opt1</option>
                                <option value="opt1">Opt1</option>
                            </select>
                        </div>

                        <div class="margin-15px">
                            <div class="margin-5px">
                                <div class="txt-site txt-11 txt-primary">
                                    Content 3
                                </div>
                            </div>
                            <div style="padding: 0 15px;">
                                <div class="margin-5px">
                                    <input 
                                        name="ctn3" 
                                        type="radio" 
                                        value="content 1" 
                                        class="rad">
                                    <span class="txt-site txt-11 txt-main txt-bold">Content 1</span>
                                </div>
                                <div class="margin-5px">
                                    <input 
                                        name="ctn3" 
                                        type="radio" 
                                        value="content 1" 
                                        class="rad">
                                    <span class="txt-site txt-11 txt-main txt-bold">Content 1</span>
                                </div>
                                <div class="margin-5px">
                                    <input 
                                        name="ctn3" 
                                        type="radio" 
                                        value="content 1" 
                                        class="rad">
                                    <span class="txt-site txt-11 txt-main txt-bold">Content 1</span>
                                </div>
                            </div>
                        </div>

                        <div class="margin-15px">
                            <div class="margin-5px">
                                <div class="txt-site txt-11 txt-primary">
                                    Content 4
                                </div>
                            </div>
                            <div style="padding: 0 15px;">
                                <div>
                                    <input 
                                        name="ctn4" 
                                        type="checkbox" 
                                        value="content 1" 
                                        class="rad">
                                    <span class="txt-site txt-11 txt-main txt-bold">Content 1</span>
                                </div>
                                <div>
                                    <input 
                                        name="ctn4" 
                                        type="checkbox" 
                                        value="content 1" 
                                        class="rad">
                                    <span class="txt-site txt-11 txt-main txt-bold">Content 1</span>
                                </div>
                                <div>
                                    <input 
                                        name="ctn4" 
                                        type="checkbox" 
                                        value="content 1" 
                                        class="rad">
                                    <span class="txt-site txt-11 txt-main txt-bold">Content 1</span>
                                </div>
                            </div>
                        </div>

                        <div class="margin-top-15px">
                            <div class="margin-5px">
                                <div class="txt-site txt-11 txt-primary">
                                    Content 5
                                </div>
                            </div>
                            <textarea 
                                name="ctn5" 
                                class="txt txt-primary-color"
                                cols="30" 
                                rows="5"
                                placeholder="about"></textarea>
                        </div>

                    </div>

                    <div class="padding-15px">

                        <div class="grid grid-2x">
                            <div class="col-1">
                                <button class="btn btn-primary" @click="openDataForm()">
                                    <span>Cancel</span>
                                </button>
                            </div>
                            <div class="col-2 content-right">
                                <button class="btn btn-blue" type="submit">
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>

                    </div>
                
                </form>

            </div>

            <div class="padding-bottom-20px"></div>

        </div>


        <!-- app form -->
        <div class="app-popup" v-if="dataFormEdit">

            <div class="padding-top-20px"></div>

            <div class="width width-600px width-center background-white border-radius">

                <!-- panel -->
                <div class="padding-15px gradient-blue grid grid-2x">
                    <div class="col-1">
                        <div class="txt-site txt-12 txt-bold post-center">
                            Edit Data
                        </div>
                    </div>
                    <div class="col-2 content-right">
                        <button class="btn btn-circle gradient-blue" @click="openDataFormEdit()">
                            <i class="fa fa-lg fa-times"></i>
                        </button>
                    </div>
                </div>

                <!-- content -->
                <form action="#">
                    <div class="padding-15px border-bottom">

                        <div class="margin-bottom-15px">
                            <div class="margin-5px">
                                <div class="txt-site txt-11 txt-primary">
                                    <span class="txt-site txt-11 txt-primary">
                                        Content 1
                                    </span>
                                </div>
                            </div>
                            <input 
                                type="text" 
                                class="txt txt-primary-color"
                                placeholder="Content 1">
                        </div>

                        <div class="margin-top-15px">
                            <div class="margin-5px">
                                <div class="txt-site txt-11 txt-primary">
                                    Content 2
                                </div>
                            </div>
                            <select name="content2" class="slc slc-primary">
                                <option value="opt1">Opt1</option>
                                <option value="opt1">Opt1</option>
                                <option value="opt1">Opt1</option>
                            </select>
                        </div>

                    </div>

                    <div class="padding-15px">

                        <div class="grid grid-2x">
                            <div class="col-1">
                                <button class="btn btn-primary" @click="openDataFormEdit()">
                                    <span>Cancel</span>
                                </button>
                            </div>
                            <div class="col-2 content-right">
                                <button class="btn btn-blue" type="submit">
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </form>

            </div>
            
            <div class="padding-bottom-10px"></div>

        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            dataForm: false,
            dataFormEdit: false,
        }
    },
    methods: {
        openDataForm () {
            if (this.dataForm == false) {
                this.dataForm = true
            } else {
                this.dataForm = false
            }
        },
        openDataFormEdit () {
            if (this.dataFormEdit == false) {
                this.dataFormEdit = true
            } else {
                this.dataFormEdit = false
            }
        }
    }
}
</script>