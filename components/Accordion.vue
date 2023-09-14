
<template>
    <div class="accordion">
        <div class="accordion-content">
            <div class="accordion-image">
                <img :src="items[activeTab].image" alt="Accordion Image" />
            </div>
            <div class="accordion-content-section">
                <div class="accordion-name">{{ tag }}</div>
                <div class="accordion-title">{{ title }}</div>
                <div v-for="(item, index) in items" :key="index" class="accordion-item"
                    :class="{ 'active': index === activeTab }" @click="toggleAccordion(index)">
                    <div class="accordion-item-svg-section">
                        <div class="accordion-item-title" :class="{ 'active': index === activeTab }">{{ item.title }}</div>
                        <img class='accordion-item-arrow' :class="{ 'active': index === activeTab }"
                            src="../assets/svg/arrow.svg" alt="arrow" />
                    </div>



                    <div class="accordion-item-description" v-if="index === activeTab">{{ item.text }}</div>
                    <div class="accordion-item-image" v-if="index === activeTab"><img :src="items[activeTab].image"
                            alt="Accordion Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import accordionData from './AccordionData.json';



export default {

    data() {
        return {
            activeTab: 0,
            tag: accordionData.tag,
            title: accordionData.title,
            items: accordionData.items,
        };
    },
    methods: {
        toggleAccordion(index) {
            this.activeTab = index;
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
        margin-bottom: 15px;
    }

    .accordion-title {
        color: $general-heading-color;
        font-weight: $text-weight-bold ;
        font-size: $text-size-heading;
        line-height: $text-line-height-heading ;
        margin-bottom: 34px;
        padding-right: 40px;

        @media (max-width: $large) {
            font-size: $text-size-heading-mobile;
        }
    }

    .accordion-content {
        display: flex;
        justify-content: space-around;
        align-items: center;


        @media (max-width: $large) {
            justify-content: space-between;

        }



        .accordion-content-section {
            flex: 1;
            padding-right: 40px;
            padding-left: 40px;
            max-width: 400px;


            .accordion-item {
                cursor: pointer;
                padding: 18px;
                border-radius: 3px;
                margin-top: 18px;

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
                    padding-right: 40px;
                    padding-top: 15px;





                    @media (max-width: $large) {
                        font-size: $text-size-general-mobile;
                        padding-right: 15px;

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
            max-height: 10px;

        }

    }
}
</style>
