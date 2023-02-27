const Form = ({value, handleChange}) => {

    return (
        <div>
            <form className='inp_config'>
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