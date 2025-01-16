export const Host = "https://backendforeshore.vercel.app/api"
// export const Host = "http://localhost:3000"

export  const apiRoutes = {
    sendEmail : `${Host}/admin/list`,
    auth : {
        signIn : `${Host}/login`,
        signUp : `${Host}/sign-up`,

    },
}



