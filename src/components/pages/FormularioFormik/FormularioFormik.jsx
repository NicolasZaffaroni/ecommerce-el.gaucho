import { Button, TextField } from '@mui/material'
import {useFormik} from "formik"
import  * as Yup from "yup"

const FormularioFormik = () => {

    const{handleSubmit,handleChange,errors}= useFormik({
        initialValues: {
            nombre: " ",
            email:" ",
            password: ""
        },
        onSubmit: (data) => {console.log(data)},
        validationSchema: Yup.object({
            name: Yup.string().required("Este campo es obligatorio").min(3,"El nombre debe tener al menos 3 caracteres"),
            email: Yup.string().email("El email debe contener @").required("Este campo es obligatorio"),
            password: Yup.string().required("Este campo es obligatorio").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,{
                message:"La contraseña debe contener al menos un numero, un signo , una letra minuscula y mayuscula y como minimo 6 caracteres y como maximo 15 "
            }) 
        }),
        validateOnChange : false,
        
        
    })


return (
    <div style={{padding: "30px"}}>
        <form onSubmit={handleSubmit}>
            <TextField label="Nombre" variant='outlined' error={errors.name ? true : false} name="nombre" onChange={handleChange} helperText={errors.name} />
            <TextField label="Email" variant='outlined' error={errors.email ? true : false} name="email" onChange={handleChange} helperText={errors.email} />
            <TextField label="Password" variant='outlined' error={errors.password ? true : false} name="password" onChange={handleChange} helperText={errors.password} />
            <Button type="submit" variant="contained">
                Enviar
            </Button>
        </form>
    </div>
)
}

export default FormularioFormik