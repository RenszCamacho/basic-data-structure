let nestedArray = [
  // top, or first level - the outer most array
  ["deep"], // an array within an array, 2 levels of depth
  [
    ["deeper"],
    ["deeper"], // 2 arrays nested 3 levels deep
  ],
  [
    [
      ["deepest"],
      ["deepest"], // 2 arrays nested 4 levels deep
    ],
    [
      [
        ["deepest-est?"], // an array nested 5 levels deep
      ],
    ],
  ],
];

const myNestedArray = [
  ["loop", 6, true],
  [
    ["deep", true],
    [false, 8],
  ],
  [
    [
      ["deeper", true, 44],
      [false, "boolean"],
    ],
  ],
  [[[["deepest"]]]],
];
console.log(myNestedArray);
