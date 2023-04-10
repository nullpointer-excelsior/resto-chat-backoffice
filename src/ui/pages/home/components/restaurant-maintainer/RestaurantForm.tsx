import React from 'react'
import { Grid, TextField, Button, Box, Container } from '@mui/material'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import InputGrid from '../../../../shared/components/InputGrid';
import FormTitle from '../../../../shared/components/FormTitle';


const styles = {
  root: {
    maxWidth: '450px',
    display: 'block',
    margin: '0 auto',
  },
  submitButton: {
    marginTop: '24px',
  }
}

export interface IRestaurantForm {
  restaurantName: string
  menuUrl: string
  chatbotName: string
}

export interface IFormStatus {
  message: string
  type: string
}

export interface IFormStatusProps {
  [key: string]: IFormStatus
}

export default function RestaurantForm({ title, initialValues, onSubmit }) {

//   const classes = useStyles()

  const validationSchema = Yup.object().shape({
    restaurantName: Yup
      .string()
      .required('Please enter full name'),
    menuUrl: Yup
      .string()
      .required('Please enter menu url'),
    chatbotName: Yup
      .string()
      .required('Please enter a chatbot name')
  })

  const onSubmitForm = async (values: IRestaurantForm, actions) => {

    await onSubmit(values, actions)
    setTimeout(() => actions.setSubmitting(false), 500)

  }

  return (
    <Container maxWidth="sm" sx={{ padding: 4, fontSize: 10}}>
      <Formik initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={validationSchema} >
        {(props: FormikProps<IRestaurantForm>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props
          return (
            <Form>
              <FormTitle title={title} />
              <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} rowSpacing={4} sx={{ fontSize: 10}}>
              <InputGrid>
                  <TextField
                    fullWidth
                    size="small"
                    name="restaurantName"
                    id="restaurantName"
                    label="Restaurant Name"
                    value={values.restaurantName}
                    type="text"
                    helperText={
                      errors.restaurantName && touched.restaurantName
                        ? errors.restaurantName
                        : 'Please enter restaurant name'
                    }
                    error={
                      errors.restaurantName && touched.restaurantName
                        ? true
                        : false
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  </InputGrid>
                <InputGrid>
                  <TextField
                    fullWidth
                    size="small"
                    name="menuUrl"
                    id="menuUrl"
                    label="menu URL"
                    value={values.menuUrl}
                    type="text"
                    helperText={
                      errors.menuUrl && touched.menuUrl
                        ? errors.menuUrl
                        : 'Please enter menu url link'
                    }
                    error={
                      errors.menuUrl && touched.menuUrl
                        ? true
                        : false
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGrid>
                <InputGrid>
                  <TextField
                    fullWidth
                    size="small"
                    name="chatbotName"
                    id="chatbotName"
                    label="Chatbot name"
                    value={values.chatbotName}
                    type="text"
                    helperText={
                      errors.chatbotName && touched.chatbotName
                        ? errors.chatbotName
                        : 'Please enter menu url link'
                    }
                    error={
                      errors.chatbotName && touched.chatbotName
                        ? true
                        : false
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGrid>

                <Grid item lg={10} md={10} sm={10} xs={10} sx={{ marginTop: '24px'}}>
                  <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>Guardar</Button>
                </Grid>

              </Grid>
            </Form>
          )
        }}
      </Formik>
      
</Container>
  )
}
