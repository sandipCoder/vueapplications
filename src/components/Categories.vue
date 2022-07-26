<template>
<aside class="col-lg-3 col-sm-6 d-none d-lg-block">
    <!-- COMPONENTS SIDEBAR -->
    <div class="card">
        <article class="filter-group">
            <header class="card-header">
                <a href="#" class="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside1" aria-expanded="true">
                    <i class="icon-control fa fa-chevron-down"></i> Categories
                </a>
            </header>
            <div class="collapse show" id="collapse_aside1" style="">
                <div class="card-body">
                    <ul class="list-menu">
                        <li><a href="#" @click="getallProducts"> All Products </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">smartphones </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">laptops </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">skincare </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">groceries </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">home-decoration </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">furniture </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">tops </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">womens-dresses </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">womens-shoes </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">mens-shirts </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">mens-shoes </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">mens-watches </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">womens-watches </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">womens-bags </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">womens-jewellery </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">motorcycle </a></li>
                        <li><a href="#" @click="getCAtegories($event.target.text)">lighting </a></li>
                    </ul>
                </div>
                <!-- card-body.// -->
            </div>
        </article>
        <!-- filter-group // -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" class="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_aside2" aria-expanded="false">
                    <i class="icon-control fa fa-chevron-down"></i> Price
                </a>
            </header>

            <div class="collapse show" id="collapse_aside2" style="">
                <div class="card-body">

                    <input type="range" class="custom-range w-100" v-model="max" min="0" max="1000" name="">
                    <div class="row mb-3">
                        <div class="col-6">
                            <label class="form-label">Min</label>
                            <input class="form-control" v-model="min" placeholder="$0" type="number" />
                        </div>
                        <!-- col end.// -->
                        <div class="col-6">
                            <label class="form-label">Max</label>
                            <input class="form-control" v-model="max" placeholder="$1,0000" type="number" />
                        </div>
                        <!-- col end.// -->
                    </div>
                    <!-- row end.// -->
                    <button class="btn btn-light w-100" @click="applyfilterminMax" type="button">Apply</button>
                </div>
                <!-- card-body.// -->
            </div>
        </article>
        <!-- filter-group // -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" class="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_aside3" aria-expanded="false">
                    <i class="icon-control fa fa-chevron-down"></i> Size
                </a>
            </header>
            <div class="collapse show" id="collapse_aside3" style="">
                <div class="card-body">
                    <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> XS </span>
                    </label>
                    <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> SM </span>
                    </label>
                    <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> LG </span>
                    </label>
                    <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> XL </span>
                    </label>
                </div>
                <!-- card-body.// -->
            </div>
        </article>
        <!-- filter-group // -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" class="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_aside4" aria-expanded="false">
                    <i class="icon-control fa fa-chevron-down"></i> Brand type
                </a>
            </header>
            <div class="collapse show" id="collapse_aside4" style="">
                <div class="card-body">
                    <label class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" checked="" name="choose_x" />
                        <span class="form-check-label"> Samsung </span>
                    </label>
                    <label class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" checked="" name="choose_x" />
                        <span class="form-check-label"> Huawei </span>
                    </label>
                    <label class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" name="choose_x" />
                        <span class="form-check-label"> Tesla model </span>
                    </label>
                    <label class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" name="choose_x" />
                        <span class="form-check-label"> Oneplus </span>
                    </label>
                    <label class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" name="choose_x" />
                        <span class="form-check-label"> Panasonic </span>
                    </label>
                </div>
                <!-- card-body.// -->
            </div>
        </article>
        <!-- filter-group // -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" class="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_aside5" aria-expanded="false">
                    <i class="icon-control fa fa-chevron-down"></i> Colors
                </a>
            </header>
            <div class="collapse show" id="collapse_aside5" style="">
                <div class="card-body">
                    <label class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="check_opt_a" checked="" />
                        <span class="form-check-label"> Lightblue </span>
                    </label>
                    <label class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="check_opt_a" />
                        <span class="form-check-label"> Orange </span>
                    </label>
                    <label class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="check_opt_a" />
                        <span class="form-check-label"> Darkblue </span> </label><label class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="check_opt_a" />
                        <span class="form-check-label"> Silver </span>
                    </label>
                    <!-- form-check end.// -->
                </div>
            </div>
        </article>
        <!-- filter-group // -->
    </div>
    <!-- card.// -->
    <!-- ============= COMPONENTS SIDEBAR END .// ============= -->
</aside>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    name: "Categories",
    data() {
        return {
            showcategories: false,
            hidecategories: true,
            min: 10,
            max: 100,
            value: ''
        }
    },

    //go product page
    methods: {
        ...mapActions({
            getCAtegoriesdata: "productmodule/getCAtegoriesdata",
        }),

        getCAtegories(text) {
            this.getCAtegoriesdata(text)
            this.$emit('shocategory', this.showcategories, text)
        },

        getallProducts() {
            this.$emit('hideCategory', this.hidecategories)
        },

        applyfilterminMax() {
            console.log(this.min, this.max)
        },

        applyfilterminMax(){
            this.$emit('getfilterVal',this.max)
        }
    }
}
</script>

<style scoped>
.card-header .title {
    margin-bottom: 0;
    color: initial;
    display: block;
}
</style>
