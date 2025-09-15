import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Add the email to your newsletter service (Mailchimp, ConvertKit, etc.)
    // 2. Save to a database
    // 3. Send a welcome email

    // Example with a service like Mailchimp:
    // const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY)
    // await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    //   email_address: email,
    //   status: 'subscribed',
    // })

    console.log('Newsletter subscription:', {
      email,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
