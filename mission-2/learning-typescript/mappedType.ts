const arrayOfNumber: number[] = [1, 4, 6];

const arrayOfString: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNumber.map((num) =>
  num.toString()
);
console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"];

type AreaOfString = {
  [key in "height | width"]: string;
};

// generic

type AreaGeneric<T> = {
  [key in keyof T]: T[key];
};

const houseArea: AreaGeneric<{ height: number; width: boolean }> = {
  height: 43,
  width: false,
};
