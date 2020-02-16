import Legra from "https://unpkg.com/legra?module";
import { getRandom } from "./helpers.js";

const ctx = document.querySelector("canvas").getContext("2d");
const legra = new Legra(ctx);

const LEGO_CANVAS_SIZE = {
  WIDTH: 20,
  HEIGHT: 20
};

const LINE_SIZE = {
  MIN: 1,
  MAX: 8
};

const RECT_SIZE = {
  MIN: 1,
  MAX: 6
};

const COLOR_YELLOW = "#FDCE51";
const COLOR_BLUE = "#3772FF";
const COLOR_RED = "#DF2935";
const COLOR_CYAN = "#0FA3B1";
const COLOR_GREY = "#E6E8E6";
const COLOR_GREEN = "#2CF6B3";

const COLOR_DEFAULT = COLOR_GREEN;
const COLOR_BASE = COLOR_YELLOW;
const COLOR_PALETTE = [COLOR_BLUE, COLOR_RED, COLOR_CYAN, COLOR_GREY];

function drawBase() {
  legra.rectangle(0, 0, LEGO_CANVAS_SIZE.WIDTH, LEGO_CANVAS_SIZE.HEIGHT, {
    filled: true,
    color: COLOR_BASE
  });
}

function drawRect(
  position = { x: 0, y: 0 },
  color = COLOR_DEFAULT,
  orientation = "vertical",
  length = 2
) {
  const size =
    orientation === "vertical" ? { w: 2, h: length } : { w: length, h: 2 };

  legra.rectangle(position.x, position.y, size.w, size.h, {
    filled: true,
    color
  });
}

function drawLine(
  position = { x: 0, y: 0 },
  color = COLOR_DEFAULT,
  orientation = "vertical",
  length = 2
) {
  const size =
    orientation === "vertical" ? { w: 1, h: length } : { w: length, h: 1 };

  legra.rectangle(position.x, position.y, size.w, size.h, {
    filled: true,
    color
  });
}

const draw = () => {
  ctx.clearRect(0, 0, 480, 480);

  drawBase();

  for (let i = 0; i <= 50; i++) {
    const position = {
      x: getRandom(0, LEGO_CANVAS_SIZE.WIDTH),
      y: getRandom(0, LEGO_CANVAS_SIZE.HEIGHT)
    };
    const length = getRandom(LINE_SIZE.MIN, LINE_SIZE.MAX);
    const orientation = getRandom(0, 10) >= 5 ? "vertical" : "horizontal";
    const color = COLOR_PALETTE[getRandom(0, COLOR_PALETTE.length)];

    drawLine(position, color, orientation, length);
  }

  for (let i = 0; i <= 50; i++) {
    const position = {
      x: getRandom(0, LEGO_CANVAS_SIZE.WIDTH),
      y: getRandom(0, LEGO_CANVAS_SIZE.HEIGHT)
    };
    const length = getRandom(RECT_SIZE.MIN, RECT_SIZE.MAX);
    const orientation = getRandom(0, 10) >= 5 ? "vertical" : "horizontal";
    const color = COLOR_PALETTE[getRandom(0, COLOR_PALETTE.length)];

    drawRect(position, color, orientation, length);
  }
};

draw();
