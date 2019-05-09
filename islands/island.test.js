class Map {
  constructor(map) {
    this.map = map;
  }

  *coords() {
    for (let y = 0; y < this.map.length; y++) {
      for (let x = 0; x < this.map[y].length; x++) {
        yield new Coordinate(this.map[y][x]);
      }
    }
  }
}

class Coordinate {
  constructor(val) {
    this.val = val;
  }

  land() {
    return this.val === 1;
  }
}

describe("Map", () => {
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function length(obj) {
    let count = 0;
    for (let item of obj) {
      count++;
    }
    return count;
  }

  it("Creates a map", () => {
    //const map = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    //const newMap = new Map(map);

    const mapWidth = randomNum(2, 10);
    const mapHeight = randomNum(2, 10);

    const map = new Array(mapHeight).fill(new Array(mapWidth));
    const newMap = new Map(map);

    expect(length(newMap.coords())).toEqual(mapWidth * mapHeight);
  });

  it("Returns coordinates", () => {
    const map = [[0]];
    const newMap = new Map(map);

    expect(newMap.coords().next().value).toBeInstanceOf(Coordinate);
  });
});

describe("Coordinates", () => {
  it("Can describe sea", () => {
    expect(new Coordinate(0).land()).toBeFalsy();
  });

  it("Can describe land", () => {
    expect(new Coordinate(1).land()).toBeTruthy();
  });
});
