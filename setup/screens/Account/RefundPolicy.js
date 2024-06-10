import React from 'react'
import styled from 'styled-components'


const RefundPolicy = () => {
  return (
    <Container>
        <Data>
     <Points>
     A. The Users agree and acknowledge that the subscription charges paid under any of the subscription plans for availing the investment advisory services shall be non-refundable. The Company does not owe any liability to refund the subscription charges should the User decided to discontinue availing services or terminate the account or under any other circumstances whatsoever.
     </Points>
     <Points>
     B. The User further acknowledges that in the event the User intends to upgrade from an existing plan to another plan during the subsistence of existing plan, the monies remaining unutilised under the existing plan would be utilised under the upgraded plan on pro-rata basis. Similarly, the User shall have the liberty to downgrade from an existing plan to another plan, and the unutilised monies under the existing plan shall be utilised on pro-rata basis in the downgrade plan. Provided however that at the time of renewal of subscription plan at an annual interval, the User shall be at liberty to choose any plan of his choice without any compulsion of continuing with the existing plan.
     </Points>
     <Points>
     C. The User agrees and acknowledges that the Company may get privy to certain private and confidential information of the User at the time or during the course of subscription to investments plans. Such information will be utilised by the Company for internal purposes and will be kept confidential. However, the said information may be disclosed by the Company pursuant to compliance with any order of a competent court, authority or statute.
     </Points>
     <Points>
     D. The Company reserves the right to cancel, discontinue, withdraw or modify the terms and conditions of any plan without assigning any reason whatsoever and without any prior notice to the Users. In such circumstances, the User shall be provided with proportionate refund of the subscription charges for the balance period within such reasonable time not exceeding 60 days.
     </Points>
     <Points>
     E. The User agrees and confirms that no refund shall be provided under any circumstances, in case the subscription to any plan is discontinued or terminated by the User, the details and information with respect to the subscription plans shall be made available by the Company only on its online platform. However, the Company may send promotional email, text messages etc. from time to time to update the Users about the subscription plans. The User gives consent to receive such emails, text messages etc. on the email address or phone number registered with the Company. In case of any change in the details as registered, the User shall inform the Company giving sufficient advance notice to effect the necessary changes in the records. The Company shall not be held liable for any omission in receipt of such reminders, messages etc. on account of change in email address, phone number or other details registered in the records of the Company.
     </Points>
     <Points>
     F. The User agrees that the investment plan subscribed to by the User and the investment advise provided there under shall be for the sole consumption and use only by the User and not by any third party. The User shall not utilise the information under the investment plan or investment advice for any business, non-personal or illegal purposes or purpose other than investments through the online platform of the Company. The User agrees that it shall not recompile, disassemble, copy, modify, distribute, transmit, display, perform, reproduce, publish or create derivative works from, transfer, or sell any information, services etc accessed under any subscription plan, investment advice or otherwise. By accessing the details of any of the plans, whether subscribed or not, any unauthorised use of the same by the User shall be unlawful and subject to civil or criminal proceedings or penalties.
     </Points>
     <Points>
     G. The User confirms and agrees having read, understood, agreed and accepted the Terms and Conditions, Privacy Policy, subscription plans and charges, fee etc. thereof and all details relating to or in connection with the services availed by the User.
     </Points>
     <Points>
     H. The User authorises the Company to debit the bank account for applicable subscription charges, fee, taxes, cess etc., details whereof are given by the User at the time of registration of investment account with the Company. Any costs, expenses, charges etc. arising out of any failure in exercise of such authority shall be borne by the User and shall be recoverable by the Company from the User.
     </Points>
        </Data>
    </Container>
  )
}

const Container = styled.ScrollView`
    flex: 1;
    padding: 10px 4px;
    backgroundColor:#fff
`
const Data = styled.View`
`
const Points = styled.Text`
    fontSize: 16px;
    marginTop: 10px;
`



export default RefundPolicy