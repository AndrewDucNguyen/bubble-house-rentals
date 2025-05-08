export const RentalInquiryEmail = ({
  firstName,
  lastName,
  email,
  number,
  eventDate,
  setupTime,
  pickupTime,
  itemsInterested,
  eventType,
  surfaceType,
  powerAvailable,
  petStatus,
  eventLocation,
  preferredContact,
  street,
  city,
  state,
  postal,
  additionalNotes,
}) => {
  const main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };

  const container = {
    display: 'flex',
    margin: '10px auto',
    justifyContent: 'space between',
  };

  const section = {
    borderRadius: '8px',
    marginBottom: '10px',
    width: '50%'
  };

  const h3 = {
    color: '#1a1a1a',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 0 16px',
    padding: '0',
  };

  const text = {
    color: '#1a1a1a',
    fontSize: '18px',
    lineHeight: '24px',
    margin: '8px 0',
  };

  return {
    html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html dir="ltr" lang="en">
        <head>
          <title>New Rental Inquiry</title>
          <link
            rel="preload"
            as="image"
            href="https://www.thebubblehouserentals.com/assets/images/logo.png" />
          <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
          <meta name="x-apple-disable-message-reformatting" />
        </head>
        <body style="${Object.entries(main).map(([key, value]) => `${key}: ${value}`).join(';')}">
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="max-width:600px;margin:0 auto;padding:20px 0 48px">
            <tbody>
              <tr style="width:100%">
                <td>
                  <img
                    alt="The Bubble House Rentals Logo"
                    height="auto"
                    src="https://www.thebubblehouserentals.com/assets/images/logo.png"
                    style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto"
                    width="250"
                    loading="eager"
                    decoding="async"
                    importance="high"
                    role="presentation" />
                  <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}">Hi, ${firstName} ${lastName}</p>
                  <p
                    style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}">
                    Thank you for reaching out! We've received your rental reuest and will contact you shortly to confirm availability and finalize the details. Here is what we have on file from your submission:
                  </p>

                  <div style="${Object.entries(container).map(([key, value]) => `${key}: ${value}`).join(';')}">
                    
                    <div style="${Object.entries(section).map(([key, value]) => `${key}: ${value}`).join(';')}">
                      <h3 style="${Object.entries(h3).map(([key, value]) => `${key}: ${value}`).join(';')}">Personal Information</h3>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Name:</strong> ${firstName} ${lastName}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Email:</strong> ${email}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Phone:</strong> ${number}</p>

                      <h3 style="${Object.entries(h3).map(([key, value]) => `${key}: ${value}`).join(';')}">Location</h3>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}">${street}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}">${city}, ${state} ${postal}</p>
                    </div>

                    <div style="${Object.entries(section).map(([key, value]) => `${key}: ${value}`).join(';')}">
                      <h3 style="${Object.entries(h3).map(([key, value]) => `${key}: ${value}`).join(';')}">Event Information</h3>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Event Date:</strong> ${new Date(eventDate).toLocaleDateString()}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Setup Time:</strong> ${setupTime}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Pickup Time:</strong> ${pickupTime}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Items Interested:</strong> ${itemsInterested.join(', ')}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Event Type:</strong> ${eventType}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Surface Type:</strong> ${surfaceType}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Power Available:</strong> ${powerAvailable}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Pets:</strong> ${petStatus}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Event Location:</strong> ${eventLocation}</p>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Preferred Contact:</strong> ${preferredContact}</p>

                      <h3 style="${Object.entries(h3).map(([key, value]) => `${key}: ${value}`).join(';')}">Additional Information</h3>
                      <p style="${Object.entries(text).map(([key, value]) => `${key}: ${value}`).join(';')}"><strong>Additional Notes:</strong> ${additionalNotes || 'N/A'}</p>
                    </div>

                  </div>
                  
                  <p
                    style="font-size:16px;line-height:26px;margin-top:16px;margin-bottom:16px">
                    The Bubble House Rentals
                  </p>

                </td>
              </tr>
            </tbody>
          </table>
          <!--/$-->
        </body>
      </html>
    `
  };
};

export default RentalInquiryEmail; 