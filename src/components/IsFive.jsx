import React, {useMemo, memo} from 'react';

let renderCount = 0;


function IsFive({ value }) {
  console.warn(`🔴 isFive render: ${++renderCount}`);

  // const getResult = () => {
  //   let i = 0;
  //   while (i < 1000000000) i++;
  //   return value === 5 ? '✅ Это пять :D' : '❌ Это не пять :(';
  // }
  const getResult = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return value === 5 ? '✅ Это пять :D' : '❌ Это не пять :(';
  }, [value])

  // return <h3>{getResult()}</h3>;
  return <h3>{getResult}</h3>;
}

export default memo(IsFive)
