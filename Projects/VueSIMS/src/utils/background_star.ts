// background_star.ts
import { ref } from 'vue';

// 定义 Canvas 的宽度和高度
export const canvasWidth = ref(window.innerWidth);
export const canvasHeight = ref(window.innerHeight);

// 定义 Canvas 和 Context 的引用
export const canvas = ref<HTMLCanvasElement | null>(null);
export const ctx = ref<CanvasRenderingContext2D | null>(null);

// 定义鼠标位置
export const mousePosition = ref({ x: 0, y: 0 });

// 定义 Dot 类
export class Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: Color;

  constructor() {
    this.x = Math.random() * canvasWidth.value;
    this.y = Math.random() * canvasHeight.value;
    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();
    this.radius = Math.random() * 2;
    this.color = new Color();
  }

  draw() {
    if (ctx.value) {
      ctx.value.beginPath();
      ctx.value.fillStyle = this.color.style;
      ctx.value.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.value.fill();
    }
  }
}

// 定义 Color 类
export class Color {
  r: number;
  g: number;
  b: number;
  style: string;

  constructor(min: number = 0) {
    this.r = colorValue(min);
    this.g = colorValue(min);
    this.b = colorValue(min);
    this.style = createColorStyle(this.r, this.g, this.b);
  }
}

// 辅助函数
function colorValue(min: number): number {
  return Math.floor(Math.random() * 255 + min);
}

function createColorStyle(r: number, g: number, b: number): string {
  return `rgba(${r}, ${g}, ${b}, 0.8)`;
}

// 初始化 Dots
export const dots = {
  nb: 1000,
  distance: 50,
  d_radius: 100,
  array: [] as Dot[],
};

// 创建 Dots
export function createDots() {
  for (let i = 0; i < dots.nb; i++) {
    dots.array.push(new Dot());
  }
}

// 移动 Dots
export function moveDots() {
  for (let i = 0; i < dots.nb; i++) {
    const dot = dots.array[i];
    if (dot.y < 0 || dot.y > canvasHeight.value) {
      dot.vy = -dot.vy;
    } else if (dot.x < 0 || dot.x > canvasWidth.value) {
      dot.vx = -dot.vx;
    }
    dot.x += dot.vx;
    dot.y += dot.vy;
  }
}

// 连接 Dots
export function connectDots() {
  for (let i = 0; i < dots.nb; i++) {
    for (let j = i; j < dots.nb; j++) {
      const iDot = dots.array[i];
      const jDot = dots.array[j];
      if (Math.abs(iDot.x - jDot.x) < dots.distance && Math.abs(iDot.y - jDot.y) < dots.distance) {
        if (Math.abs(iDot.x - mousePosition.value.x) < dots.d_radius && Math.abs(iDot.y - mousePosition.value.y) < dots.d_radius) {
          if (ctx.value) {
            ctx.value.beginPath();
            ctx.value.strokeStyle = averageColorStyles(iDot, jDot);
            ctx.value.moveTo(iDot.x, iDot.y);
            ctx.value.lineTo(jDot.x, jDot.y);
            ctx.value.stroke();
            ctx.value.closePath();
          }
        }
      }
    }
  }
}

// 绘制 Dots
export function drawDots() {
  for (let i = 0; i < dots.nb; i++) {
    dots.array[i].draw();
  }
}

// 动画循环
export function animateDots() {
  if (ctx.value) {
    ctx.value.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
    moveDots();
    connectDots();
    drawDots();
    requestAnimationFrame(animateDots);
  }
}

// 平均颜色样式
export function averageColorStyles(dot1: Dot, dot2: Dot): string {
  const r = Math.floor((dot1.color.r * dot1.radius + dot2.color.r * dot2.radius) / (dot1.radius + dot2.radius));
  const g = Math.floor((dot1.color.g * dot1.radius + dot2.color.g * dot2.radius) / (dot1.radius + dot2.radius));
  const b = Math.floor((dot1.color.b * dot1.radius + dot2.color.b * dot2.radius) / (dot1.radius + dot2.radius));
  return createColorStyle(r, g, b);
}

// 组件挂载时初始化
export function initCanvas() {
  if (canvas.value) {
    ctx.value = canvas.value.getContext('2d');
    if (ctx.value) {
      ctx.value.lineWidth = 0.3;
      ctx.value.strokeStyle = new Color(150).style;
      createDots();
      animateDots();
    }
  }

//   // 监听鼠标移动
//   canvas.value?.addEventListener('mousemove', (e) => {
//     mousePosition.value = { x: e.pageX, y: e.pageY };
//   });

//   // 监听鼠标离开
//   canvas.value?.addEventListener('mouseleave', () => {
//     mousePosition.value = { x: canvasWidth.value / 2, y: canvasHeight.value / 2 };
//   });

}