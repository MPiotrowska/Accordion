<template>
    <div class="accordion">
        <div v-if="loaded" class="accordion-content">
            <div class="accordion-image">
                <img :src="items[activeTab].image" alt="Accordion Image" />
            </div>
            <div class="accordion-content-section">
                <div class="accordion-name">{{ tag }}</div>
                <div class="accordion-title">{{ title }}</div>
                <div v-for="(item, index) in items" :key="index" class="accordion-item" tabindex="0" @keydown.up="prevTab"
                    @keydown.down="nextTab" :class="{ 'active': index === activeTab }" @click="toggleAccordion(index)">
                    <div class="accordion-item-svg-section">
                        <div class="accordion-item-title" :class="{ 'active': index === activeTab }">{{ item.title }}</div>
                        <img class='accordion-item-arrow' :class="{ 'active': index === activeTab }"
                            src="../assets/svg/arrow.svg" alt="Arrow" />
                    </div>
                    <div class="accordion-item-description" v-if="index === activeTab">{{ item.text }}</div>
                    <div class="accordion-item-image" v-if="index === activeTab"><img :src="item.image"
                            alt="Accordion Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            activeTab: 0,
            tag: null,
            title: null,
            items: [],
            loaded: false,
        };
    },

    created() {
        // Fetching data from the endpoint when the component is created
        this.fetchData();
    },

    methods: {
        async fetchData() {
            try {
                this.loaded = false;
                const response = await axios.get('https://eoyge3duj7xtdqd.m.pipedream.net');
                const data = response.data;

                // Updates component data with fetched data
                this.tag = data.tag;
                this.title = data.title;
                this.items = data.items;
                this.loaded = true;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },


        toggleAccordion(index) {
            this.activeTab = index;
        },
        prevTab() {
            this.activeTab = (this.activeTab - 1 + this.items.length) % this.items.length;
        },
        nextTab() {
            this.activeTab = (this.activeTab + 1) % this.items.length;
        },
    },
    computed: {
        activeItem() {
            return this.items[this.activeTab];
        },
    },
};
</script>

<style scoped lang="scss">
.accordion {
    font-family: $general-font-family;

    .accordion-name {
        color: $section-name-text-color;
        font-size: $text-size-name;
        line-height: $text-line-height-name;
        font-weight: $text-weight-general;
        margin-bottom: $space-sm;
    }

    .accordion-title {
        color: $general-heading-color;
        font-weight: $text-weight-bold ;
        font-size: $text-size-heading;
        line-height: $text-line-height-heading ;
        margin-bottom: $space-lg;
        padding-right: $space-xl;


        @media (max-width: $large) {
            font-size: $text-size-heading-mobile;
        }
    }

    .accordion-content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: $space-xl;

        @media (max-width: $large) {
            justify-content: space-between;

        }

        .accordion-content-section {
            flex: 1;
            max-width: 400px;


            .accordion-item {
                cursor: pointer;
                padding: 18px;
                border-radius: 3px;
                margin-top: $space-sm;
                background: $general-background;



                .accordion-item-image {
                    display: flex;
                    justify-content: center;

                    @media (min-width: $large) {
                        display: none;
                    }

                    img {
                        height: 120px;

                    }
                }

                .accordion-item-title {
                    font-weight: $text-weight-bold ;
                    font-size: $text-size-subheading;
                    color: $general-subheading-color;
                    line-height: $text-line-height-subheading;

                    &.active {
                        color: $active-text-color;
                    }

                    @media (max-width: $large) {
                        font-size: $text-size-subheading-mobile;
                        line-height: $text-line-height-subheading-mobile;
                    }
                }

                .accordion-item-description {
                    font-size: $text-size-general;
                    line-height: $text-line-height ;
                    font-weight: $text-weight-general;
                    padding-right: $space-xl;
                    padding-top: $space-sm;

                    @media (max-width: $large) {
                        font-size: $text-size-general-mobile;
                        padding-right: $space-sm;

                    }


                }

                .accordion-item-svg-section {
                    display: flex;
                    justify-content: space-between;

                    .accordion-item-arrow {
                        transform: rotate(180deg);

                        &.active {
                            transform: rotate(360deg);
                        }

                    }

                }
            }
        }
    }

    .accordion-image {
        flex: 2;
        max-height: 540px;
        max-width: 650px;
        margin-top: $space-lg;


        @media (max-width: $large) {
            display: none;
        }

        img {
            max-width: 100%;
            height: auto;


        }
    }

    @media (max-width: $large) {
        flex-direction: column;

        .accordion-content {
            flex-direction: column;
            max-height: $space-xs;

        }

    }
}
</style>
