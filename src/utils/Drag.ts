export default class Drag {
  private dialog: any;
  private header: any;
  private windowHeight: number;
  private windowWidth: number;
  private dialogLeft: number;
  private dialogTop: number;
  private dialogRight: number;
  private dialogBottom: number;
  private minLeft: number;
  private maxLeft: number;
  private minTop: number;
  private maxTop: number;
  private mouseClickPosition: any;
  private moving: boolean;
  constructor({ el }: { el: any }) {
    this.dialog = el.querySelector('.el-dialog');
    this.header = el.querySelector('.el-dialog__header');

    // 窗口大小
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    // 记录弹窗位置
    this.dialogLeft = 0;
    this.dialogTop = 0;
    this.dialogRight = 0;
    this.dialogBottom = 0;

    // 拖动极限值
    this.minLeft = 0;
    this.maxLeft = 0;
    this.minTop = 0;
    this.maxTop = 0;

    // 鼠标点击弹窗时的位置信息
    this.mouseClickPosition = null;

    this.moving = false;

    this.init();
  }
  init() {
    // 原有偏移量
    // this.translateX = getComputedStyle(this.dialog).transform.replace(/[^0-9\-,\.]/g,'').split(',')[4] || 0
    // this.translateY = getComputedStyle(this.dialog).transform.replace(/[^0-9\-,\.]/g,'').split(',')[5] || 0

    // 绑定事件
    document.body.addEventListener(
      'mousedown',
      this.mouseDown.bind(this),
      false
    );
    document.body.addEventListener(
      'mousemove',
      this.mouseMove.bind(this),
      false
    );
    document.body.addEventListener('mouseup', this.mouseUp.bind(this), false);
  }
  destory() {
    // 还原样式
    this.dialog.style.transform = ``;
    this.dialog.style.margin = '15vh auto 0';
    // 解绑事件
    document.body.removeEventListener(
      'mousedown',
      this.mouseDown.bind(this),
      false
    );
    document.body.removeEventListener(
      'mousemove',
      this.mouseMove.bind(this),
      false
    );
    document.body.removeEventListener(
      'mouseup',
      this.mouseUp.bind(this),
      false
    );
  }
  mouseDown(e: any) {
    if (this.findHeader(e.target)) {
      this.moving = true;
      const dialogRect = this.dialog.getBoundingClientRect();

      this.maxLeft = this.windowWidth - dialogRect.width;
      this.maxTop = this.windowHeight - dialogRect.height;

      const { left, top, right, bottom } = this.getPosition();
      this.dialogLeft = left;
      this.dialogTop = top;
      this.dialogRight = right;
      this.dialogBottom = bottom;
      this.dialog.style.margin = 0;
      this.dialog.style.transform = `translate3d(${left}px, ${top}px,0)`;

      this.mouseClickPosition = {
        x: e.pageX,
        y: e.pageY
      };
    }
  }
  mouseMove(e: any) {
    if (this.moving) {
      const offsetX = e.pageX - this.mouseClickPosition.x;
      const offsetY = e.pageY - this.mouseClickPosition.y;
      let translateX = this.dialogLeft + offsetX;
      let translateY = this.dialogTop + offsetY;

      if (translateX < 0) {
        translateX = 0;
      }
      if (translateX > this.maxLeft) {
        translateX = this.maxLeft;
      }
      if (translateY < 0) {
        translateY = 0;
      }
      if (translateY > this.maxTop) {
        translateY = this.maxTop;
      }

      this.dialog.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    }
  }
  mouseUp(e: any) {
    if (this.moving) {
      const { left, top } = this.getPosition();
      this.dialog.style.transform = `translate3d(${Math.round(
        left
      )}px, ${Math.round(top)}px,0)`;
      this.moving = false;
    }
  }
  findHeader(dom: any): any {
    // 查找dialog的header,用于触发拖动效果
    if (dom.nodeName === 'BODY') {
      return false;
    }
    if (dom === this.header) {
      return true;
    } else {
      return this.findHeader(dom.parentNode);
    }
  }
  getPosition(): any {
    // 获取dialog的位置信息
    const rect = this.dialog.getBoundingClientRect();
    const left = rect.left;
    const top = rect.top;
    const right = this.windowWidth - rect.right;
    const bottom = this.windowHeight - rect.bottom;
    return {
      left,
      top,
      right,
      bottom
    };
  }
}
