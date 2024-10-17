<template>
    

    <section id="faq" class="faq section">

      
      <a-anchor :affix="false" :getCurrentAnchor="getCurrentAnchor">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
<div class="container">

  <div class="row gy-4">

    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
      <div class="content px-xl-5">
        <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
        </p>
      </div>
    </div>

    <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">

      <div class="faq-container">
        <a-collapse
          v-model:activeKey="activeKey"
          :bordered="false"
          style="background: rgb(255, 255, 255)"
        >
          <template #expandIcon="{ isActive }">
            <caret-right-outlined :rotate="isActive ? 90 : 0" />
          </template>
          <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
            <p>{{ text }}</p>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="This is panel header 2" :style="customStyle">
            <p>{{ text }}</p>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="This is panel header 3" :style="customStyle">
            <p>{{ text }}</p>
          </a-collapse-panel>
        </a-collapse>
        <!-- <div class="faq-item faq-active">
          <h3><span class="num">1.</span> <span>Non consectetur a erat nam at lectus urna duis?</span></h3>
          <div class="faq-content">
            <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div>

        <div class="faq-item">
          <h3><span class="num">2.</span> <span>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span></h3>
          <div class="faq-content">
            <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div>

        <div class="faq-item">
          <h3><span class="num">3.</span> <span>Dolor sit amet consectetur adipiscing elit pellentesque?</span></h3>
          <div class="faq-content">
            <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div>

        <div class="faq-item">
          <h3><span class="num">4.</span> <span>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</span></h3>
          <div class="faq-content">
            <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div>

        <div class="faq-item">
          <h3><span class="num">5.</span> <span>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</span></h3>
          <div class="faq-content">
            <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div> -->
      </div>

    </div>
  </div>

</div>

</section><!-- /Faq Section -->

</template>
<script setup lang="ts">
import { CaretRightOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { defineComponent } from 'vue';

const activeKey = ref(['1']);
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const customStyle =
  'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden';

  const getCurrentAnchor = () => {
      return '#components-anchor-demo-static';
    };
</script>

<style lang="css" scoped>

/*--------------------------------------------------------------
# Faq Section
--------------------------------------------------------------*/
.faq .content h3 {
  font-weight: 400;
  font-size: 34px;
}

.faq .content p {
  font-size: 15px;
  color: color-mix(in srgb, var(--default-color), transparent 30%);
}

.faq .faq-container .faq-item {
  background-color: var(--surface-color);
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.faq .faq-container .faq-item:last-child {
  margin-bottom: 0;
}

.faq .faq-container .faq-item h3 {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 0 30px 0 0;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
}

.faq .faq-container .faq-item h3 .num {
  color: var(--accent-color);
  padding-right: 5px;
}

.faq .faq-container .faq-item h3:hover {
  color: var(--accent-color);
}

.faq .faq-container .faq-item .faq-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
}

.faq .faq-container .faq-item .faq-content p {
  margin-bottom: 0;
  overflow: hidden;
}

.faq .faq-container .faq-item .faq-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  line-height: 0;
  transition: 0.3s;
  cursor: pointer;
}

.faq .faq-container .faq-item .faq-toggle:hover {
  color: var(--accent-color);
}

.faq .faq-container .faq-active h3 {
  color: var(--accent-color);
}

.faq .faq-container .faq-active .faq-content {
  grid-template-rows: 1fr;
  visibility: visible;
  opacity: 1;
  padding-top: 10px;
}

.faq .faq-container .faq-active .faq-toggle {
  transform: rotate(90deg);
  color: var(--accent-color);
}

</style>