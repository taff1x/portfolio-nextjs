import { ApolloClient, InMemoryCache } from "@apollo/client"


export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})

// export async function sendMail(subject, body, mutationId = 'contact') {
//     const fromAddress = 'noreply@yourwebsite.com';
//     const toAddress = 'someone@yourwebsite.com';
//     const data = await fetchAPI(
//       `
//           mutation SendEmail($input: SendEmailInput!) {
//               sendEmail(input: $input) {
//                   message
//                   origin
//                   sent
//               }
//           }
//       `,
//       {
//         variables: {
//           input: {
//             clientMutationId: mutationId,
//             from: fromAddress,
//             to: toAddress,
//             body: body,
//             subject: subject,
//           },
//         },
//       }
//     );
  
//     return data?.sendEmail;
//   }