import React from 'react';

const Form = ({value, handleChange}) => {

    return (
        <div>
            <form className='inp_config'ddd>
                    <input
                    type='text'
                    name='name'
                    value={value} 
                    onChange={handleChange}
                    required/>
            </form>
        </div>
    );
};

export default Form;