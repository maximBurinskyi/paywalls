// import {
//   GridColumnMenuContainer,
//   GridFilterMenuItem,
//  // HideGridColMenuItem,
// } from '@mui/x-data-grid';

// const CustomColumnMenu = (props) => {
//   const { hideMenu, currentColumn, open } = props;
//   return (
//     <GridColumnMenuContainer
//       hideMenu={hideMenu}
//       currentColumn={currentColumn}
//       open={open}
//     >
//       <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
//       <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
//     </GridColumnMenuContainer>
//   );
// };

// export default CustomColumnMenu;
import {
  GridColumnMenuContainer,
  GridFilterMenuItem,
  GridColumnMenuFilterItem,
  HideGridColMenuItem,
  GridColumnMenuHideItem,
} from '@mui/x-data-grid';

const CustomColumnMenu = (props) => {
  const { hideMenu, colDef, open } = props;
  return (
    <GridColumnMenuContainer hideMenu={hideMenu} colDef={colDef} open={open}>
      <GridColumnMenuFilterItem onClick={hideMenu} colDef={colDef} />
      <GridColumnMenuHideItem onClick={hideMenu} colDef={colDef} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
