export const Host = "https://backendforeshore.vercel.app/api"
// const Host = "http://localhost:3000/api"

export  const apiRoutes = {
    sendEmail : `${Host}/admin/list`,
    auth : {
        signIn : `${Host}/auth/signIn`,
        signUp : `${Host}/sign-up`,
    },
    property : {
        getAllProperties : `${Host}/admin/getAllProperties`,
        getOne : (id)=>(`${Host}/admin/getProperty/${id}`),
      
    },
    type : {
        getAllTypes : `${Host}/admin/getAllTypes`,
      
    },
}



