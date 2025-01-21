export const Host = "https://backendforeshore.vercel.app/api"

export  const apiRoutes = {
    sendEmail : `${Host}/admin/list`,
    auth : {
        signIn : `${Host}/login`,
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



