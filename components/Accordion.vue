
<template>
    <div class="accordion">
        <div class="accordion-content">
            <div class="accordion-image">
                <img :src="items[activeTab].image" alt="Accordion Image" />
            </div>
            <div>
                <div class="accordion-name">{{ tag }}</div>
                <div class="accordion-title">{{ title }}</div>
                <div v-for="(item, index) in items" :key="index" class="accordion-item"
                    :class="{ 'active': index === activeTab }" @click="toggleAccordion(index)">
                    <div class="accordion-item-title">{{ item.title }}</div>
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
    .accordion-name {
        color: $section-name-text-color;
        font-family: $general-font-family;
        font-size: $text-size-name;
        line-height: $text-line-height-name;
        font-weight: $text-weight-general;
    }

    .accordion-title {
        color: $general-heading-color;
        font-weight: $text-weight-bold ;
        font-family: $general-font-family;
        font-size: $text-size-heading;
        line-height: $text-line-height-heading ;

        @media (max-width: $large) {
            font-size: $text-size-heading-mobile;
        }
    }

    .accordion-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 90px;

        .accordion-item {
            cursor: pointer;
            padding: 10px;
            border: 1px solid #ccc;
            margin-top: 10px;

            &.active {
                background-color: #f0f0f0;

            }

            .accordion-item-image {

                @media (min-width: $large) {
                    display: none;
                }

                img {
                    height: 120px;

                }
            }

            // .accordion-item-description {
            //     // Styles for the accordion item description
            // }
        }
    }

    .accordion-image {
        @media (max-width: $large) {
            display: none;
        }

        img {
            max-width: 100%;
            height: auto;
            display: block;

        }
    }

    // Media query for mobile view
    @media screen and (max-width: $large) {
        flex-direction: column;

        .accordion-content {
            flex-direction: column;
            max-height: 10px;

            // .accordion-item {
            //     // Mobile styles for accordion items
            // }
        }

        // .accordion-image {
        //     // Mobile styles for the image container
        // }
    }
}
</style>
