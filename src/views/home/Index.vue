<template>
  <div class="home">
    <!-- {{ $t('message.hello') }} -->
    <!-- <div class="lang">
      中文：{{ lang.zh }} <br />
      英文：{{ lang.en }} <br />
      日语：{{ lang.ja }}
    </div>
    <el-form label-width="80px" :model="lang">
      <el-form-item label="中文">
        <el-input v-model="lang.zh"></el-input>
      </el-form-item>
      <el-form-item label="英文">
        <el-input v-model="lang.en"></el-input>
      </el-form-item>
      <el-form-item label="日语">
        <el-input v-model="lang.ja"></el-input>
      </el-form-item>
    </el-form> -->
    <a
      href="https://oss.luckymp.com/temp/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83v1.0.pdf"
      target="_blank"
      class="href"
      >协议</a
    >

    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      :on-change="handleChange"
    >
      <template #default>
        <i class="el-icon-plus"></i>
      </template>
      <template #file="{file}">
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </template>
    </el-upload>
    <input type="file" @change="fileUploadChange($event)" />
    <div ref="container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { io } from 'socket.io-client';

export default defineComponent({
  name: 'Home',
  components: {},
  data() {
    return {
      lang: {
        zh: '中文',
        en: '英文',
        ja: '日语'
      },
      dialogImageUrl: '',
      disabled: false
    };
  },
  async mounted() {
    // console.log((this.$i18n.locale = 'en'));
    // const socket = io('http://192.168.70.19:7979', {
    //   transports: ['websocket', 'polling']
    // });
    // console.log(socket);
    // socket.on('connect', () => {
    //   // either with send()
    //   socket.send('Hello!');
    // });
    // // handle the event sent with socket.send()
    // socket.on('message', data => {
    //   console.log(data);
    // });
  },
  methods: {
    async fileUploadChange(e: any) {
      console.log(e.target.files[0]);
      const img = await this.blobToImg(e.target.files[0]);
      const canvas = this.imgToCanvas(img);
      const blob: any = await this.watermark(canvas, 'text');
      console.log(blob);
      // 此处将Blob读取到img标签，并在dom内渲染出来；如果是上传文件，可以将blob添加到FormData中
      const newImage = await this.blobToImg(blob);
      console.log(newImage);
      (this.$refs as any).container.appendChild(newImage);
    },
    async handleChange(file: any, fileList: any) {
      console.log(file);
      const img = await this.blobToImg(file.raw);
      const canvas = this.imgToCanvas(img);
      const blob: any = await this.watermark(canvas, 'text');
      console.log(blob);
      // 此处将Blob读取到img标签，并在dom内渲染出来；如果是上传文件，可以将blob添加到FormData中
      const newImage = await this.blobToImg(blob);
      (this.$refs as any).container.appendChild(newImage);
    },
    handleRemove(file: any) {
      console.log(file);
    },
    handlePictureCardPreview(file: any) {
      this.dialogImageUrl = file.url;
    },
    handleDownload(file: any) {
      console.log(file);
    },
    blobToImg(blob: any) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          const img: any = new Image();
          // base64编码的图片对象赋值给img的src
          img.src = reader.result;
          img.addEventListener('load', () => resolve(img));
        });
        reader.readAsDataURL(blob);
      });
    },
    imgToCanvas(img: any) {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx: any = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      return canvas;
    },
    watermark(canvas: any, text: any) {
      return new Promise((resolve, reject) => {
        const ctx = canvas.getContext('2d');
        // 设置填充字号和字体，样式
        ctx.font = '24px 宋体';
        ctx.fillStyle = '#FFC82C';
        // 设置右对齐
        ctx.textAlign = 'right';
        // 在指定位置绘制文字，这里指定距离右下角20坐标的地方
        ctx.fillText(text, canvas.width - 20, canvas.height - 20);
        canvas.toBlob((blob: any) => resolve(blob));
      });
    }
    // imgWatermark(dom: any, text: any) {
    //   const input = document.createElement('input');
    //   input.setAttribute('type', 'file');
    //   input.setAttribute('accept', 'image/*');
    //   input.onchange = async () => {
    //     const img = await this.blobToImg(input.files[0]);
    //     const canvas = this.imgToCanvas(img);
    //     const blob = await this.watermark(canvas, text);
    //     // 此处将Blob读取到img标签，并在dom内渲染出来；如果是上传文件，可以将blob添加到FormData中
    //     const newImage = await this.blobToImg(blob);
    //     dom.appendChild(newImage);
    //   };
    //   input.click();
    // }
  }
});
</script>
<style lang="scss" scoped>
.home {
  padding: 20px;
  .lang {
    margin: 20px;
  }
}
</style>
