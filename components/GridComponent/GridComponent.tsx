// import cx from "classnames";

// const getCol = (col: number, content: any) => {
//   switch (col) {
//     case 1:
//       return <div className="col-span-1 bg-blue-600 text-white">{content}</div>;
//     case 2:
//       return <div className="col-span-2 bg-blue-600 text-white">{content}</div>;
//     case 3:
//       return <div className="col-span-3 bg-blue-600 text-white">{content}</div>;
//     case 4:
//       return <div className="col-span-4 bg-blue-600 text-white">{content}</div>;
//     case 5:
//       return <div className="col-span-5 bg-blue-600 text-white">{content}</div>;
//     case 6:
//       return <div className="col-span-6 bg-blue-600 text-white">{content}</div>;
//     case 7:
//       return <div className="col-span-7 bg-blue-600 text-white">{content}</div>;
//     case 8:
//       return <div className="col-span-8 bg-blue-600 text-white">{content}</div>;
//     case 9:
//       return <div className="col-span-9 bg-blue-600 text-white">{content}</div>;
//     case 10:
//       return (
//         <div className="col-span-10 bg-blue-600 text-white">{content}</div>
//       );
//     case 11:
//       return (
//         <div className="col-span-11 bg-blue-600 text-white">{content}</div>
//       );
//     default:
//     case 12:
//       return (
//         <div className="col-span-12 bg-blue-600 text-white">{content}</div>
//       );
//   }
// };

// const getRow = (row: number) => {
//   switch (row) {
//     case 5:
//       return "row-span-5";
//     case 2:
//       return "row-span-2";
//     case 3:
//       return "row-span-3";
//     case 4:
//       return "row-span-4";
//     default:
//     case 1:
//       return "row-span-1";
//   }
// };

interface Props {
  containerCol: number;
  containerRow?: number;
  index: any;
  remove: any;
}

export const GridComponent = ({
  containerCol = 3,
  containerRow = 1,
  index,
  remove,
}: Props) => {
  return (
    <div
      className={`col-span-${containerCol} row-span-${containerRow} bg-blue-600 text-white p-2 rounded-lg font-semibold text-lg`}
    >
      <div className="flex justify-between items-center text-lg">
        <span>{index}</span>
        <button onClick={remove} className="font-bold text-2xl">
          &#215;
        </button>
      </div>
    </div>
  );
};
