import React from 'react';

const withClassFunction= (WrappedContent,className)=>{
    return props=>(
        <div className={className}>
            <WrappedContent {...props}/>
        </div>
    )
       

}

export default withClassFunction;