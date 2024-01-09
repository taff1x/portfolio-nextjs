import { client } from "@/lib/client"
import { gql } from "@apollo/client"
import { FormData } from '@/app/components/contact-form'

export async function sendMail(data: FormData) {
  const { fullname, email, subject, message } = data
  
  const body = `Message from ${fullname}: ${message}`
  const mutationId = 'contact'
  const toAddress = 'info@softaff.pl';
  
    try {
      const response = await client.mutate({
        mutation: gql`
          mutation SendEmail($input: SendEmailInput!) {
            sendEmail(input: $input) {
              message
              origin
              sent
            }
          }
        `,
        variables: {
          input: {
            clientMutationId: mutationId,
            from: email,
            to: toAddress,
            body: body,
            subject: subject,
          },
        },
      });

      const sentStatus = response?.data?.sendEmail?.sent || false
      
      return { success: sentStatus };
    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof Error) message = error.message
      return { success: false, error: message };
    }
  }
  