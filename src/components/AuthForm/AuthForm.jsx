import LableInput from '../_share/LableInput/LableInput';

const AuthForm = ({handleInputChange, dataForm, handleSubmit}) => {
    const {email, password} = dataForm

    return (
        <>
        <h1>AuthForm</h1> 
        <form onSubmit={handleSubmit}> 
            <LableInput title="Email" cbOnChange={handleInputChange} name="email" value={email} />
            <LableInput title="Password" cbOnChange={handleInputChange} name="password" value={password} />
            <button type='submit'>Submit</button>
        </form>

        </>

        );
}
 
export default AuthForm;