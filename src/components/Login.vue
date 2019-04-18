<template>
    <div class="app-popup background-blue">
        <div class="app-login padding-25px grid grid-2x">
            <div class="col-1">
                <div class="post-center">
                    <div class="image image-200px image-circle" style="margin: auto;"></div>
                </div>
            </div>
            <div class="col-2">
                <div class="txt-site txt-14 txt-bold txt-main txt-center margin-top-20px">
                    DDMS LOGIN
                </div>
                <div class="margin-20px">
                    <div class="margin-bottom-5px txt-site txt-11 txt-main">Username</div>
                    <input 
                        type="text" 
                        class="txt txt-primary-color"
                        placeholder="Username"> 
                </div>
                <div class="margin-20px">
                    <div class="margin-bottom-5px txt-site txt-11 txt-main">Password</div>
                    <input 
                        type="password" 
                        class="txt txt-primary-color"
                        placeholder="Password"> 
                </div>
                <div class="margin-20px">
                    <router-link to="/dashboard">
                        <input 
                            type="submit" 
                            class="btn btn-width-all background-blue"> 
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
