<template>
    <div>

        <div class="main-content">

            <div>
                <div>
                    
                    <div class="display-flex padding-15px">
                        <div class="grid grid-2x grid-mobile-none">
                            <div class="col-1">
                                <div class="txt-site txt-18 txt-bold txt-main margin-top-5px margin-bottom-5px">
                                    Component Pages
                                </div>
                            </div>
                            <div class="col-2 content-right">
                                <form action="#" class="width width-full">
                                    <div class="display-flex background-dark-grey border-radius">
                                        <select 
                                            name="search" 
                                            class="slc slc-primary"
                                            required>
                                            <option value="val">Urutkan</option>
                                            <option value="val1">Val 1</option>
                                            <option value="val1">Val 1</option>
                                            <option value="val1">Val 1</option>
                                        </select>

                                        <input 
                                            type="text" 
                                            class="txt txt-main-color txt-primary-color" 
                                            placeholder="Masukan kata kunci"
                                            required>
                                        
                                        <button 
                                            class="btn btn-blue btn-no-radius"
                                            type="submit">
                                            Cari
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="display-flex">
                        <table>
                            <thead class="background-blue">
                                <th width="80">No</th>
                                <th>Content 1</th>
                                <th class="app-desktop">Content 2</th>
                                <th class="app-desktop">Content 3</th>
                                <th class="app-desktop">Content 4</th>
                                <th width="200">Actions</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in 10" :key="index">
                                    <td>
                                        <strong>{{ index + 1 }}</strong>
                                    </td>
                                    <td>1</td>
                                    <td class="app-desktop">2</td>
                                    <td class="app-desktop">3</td>
                                    <td class="app-desktop">4</td>
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

    </div>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>