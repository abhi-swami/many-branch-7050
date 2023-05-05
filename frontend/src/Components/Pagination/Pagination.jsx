import { Button } from "@chakra-ui/react";
import { useSelector, shallowEqual } from "react-redux";
import styles from "../../CSS/Pagination.module.css";

const Pagination = ({ handlePage }) => {
  // const posts=useSelector((store)=>store.posts);

  const { current, total } = useSelector((store) => {
    return {
      current: store.searchReducer.currentPage,
      total: store.searchReducer.totalPage,
    };
  }, shallowEqual);
  const tp = new Array(total).fill(0);

  const handleBtnClick = (val) => {
    handlePage(val);
  };
  const handlePrevNext = (val) => {
    handlePage(Number(current) + val);
  };
  return (
    <div className={styles.paginationWrapper}>
      {current > 1 && <Button onClick={() => handlePrevNext(-1)}>Prev</Button>}

      {total &&
        tp
          ?.map((el, ind) => (
            <Button
              key={ind}
              className={current === ind + 1 ? styles.activeBtn : null}
              onClick={() => handleBtnClick(ind + 1)}
            >
              {ind + 1}
            </Button>
          ))
          .filter((item, ind) =>
            ind < current + 2 && ind > current - 4 ? true : false
          )}

      {current < total && (
        <Button onClick={() => handlePrevNext(1)}>Next</Button>
      )}
    </div>
  );
};

export default Pagination;
