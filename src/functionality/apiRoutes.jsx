export const Host = "https://backendforeshore.vercel.app/api"
// const Host = "http://localhost:5000/api"

export  const apiRoutes = {
    sendEmail : `${Host}/admin/list`,
    auth : {
        signIn : `${Host}/auth/signIn`,
        signUp : `${Host}/sign-up`,
    },
    property : {
        getAllProperties : `${Host}/admin/getAllProperties`,
        getOne : (id)=>(`${Host}/admin/getProperty/${id}`),
        getAllPropertiesForUser : `${Host}/admin/getAllPropertiesForUser`
      
    },
    type : {
        getAllTypes : `${Host}/admin/getAllTypes`,
      
    },
    contact : {
        contactUs : `${Host}/admin/contactUS`,
        subsecribe : `${Host}/admin/subscribe`
    }
}



