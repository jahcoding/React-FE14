import React from 'react';

const render = {
  count1: 0,
  count2: 0,
};

export default React.memo(function Count({ id, value, data }) {

  console.warn(`🔴 Count${id} render: ${++render[`count${id}`] }`);
  console.log(data)
  return (
    <div>
      <h1 className="cyan">{value}</h1>
      
    </div>
  );
}, function(prevProps, nextProps) {
    if(prevProps.value === nextProps.value){
      return true
    }else{
      return false
    }
})
