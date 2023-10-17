// import { useCallback, useState } from 'react'
//
// function useApiCreateInvitation() {
//   const axios = useAxios()
//
//   const [submitting, setSubmitting] = useState(false)
//
//   const createInvitation = useCallback(
//     async (invitation: InvitationCreateViewModel) => {
//       setSubmitting(true)
//
//       try {
//         return await axios.post(`${env.api.url}/v1.0/invitations`, invitation)
//       } finally {
//         setSubmitting(false)
//       }
//     },
//     [axios],
//   )
//
//   return { createInvitation, submitting }
// }
//
// export default useApiCreateInvitation
