'use server';

import { sendEmail } from "@/app/api/sendmail/route";

export async function sendEnquiryEmail(data: any) :Promise<any>{
  const enqMessage = getMessageforEnquiryType(data.enquiryType);
  const emailBody = getEmailBody(data);
  const result = await sendEmail(data.email, "Cross Business Boundary - "+enqMessage, emailBody);
  return result;
}

function getMessageforEnquiryType(enquiryType: string) {
  switch(enquiryType) {
    case 'CRB':
      return 'Cash Rich Business Workshop';
    case 'BSP':
      return 'Business Succession Planning';
    default:
      // SuccessPlanner
      return 'Success Planning session';
  }
}

function getEmailBody(data: any) :string{

  const enqMessage = getMessageforEnquiryType(data.enquiryType);

  return "" +
    `<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="" style="background-color:rgb(255,255,255)">
      <tbody>
        <tr>
          <td id="" class="" align="center" valign="top">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px">
              <tbody>
                <tr>
                  <td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
                      <colgroup>
                          <col span="1">
                          <col span="1">
                          <col span="1">
                          <col span="1">
                          <col span="1">
                          <col span="1">
                          <col span="1">
                          <col span="1">
                          <col span="1">
                          <col span="1">
                          <col span="1">
                          <col span="1">
                        </colgroup>
                        <tbody>
                          <tr>
                            <td style="background-color:#ffffff;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:24px" class="" valign="top" colspan="12" width="100%">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td style="padding-left:48px;padding-right:48px;padding-top:24px" class="" align="center" valign="top"><img width="200" style="width:200px;height:auto;max-width:100%" alt="Logo" src="http://crossbusinessboundary.com/logo.png" class=""></td>
                                  </tr>
                                  <tr>
                                    <td style="padding-top:24px" class="" valign="top">
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent;border-top:20px solid transparent;margin-bottom:0;margin-top:0">
                                        <tbody>
                                          <tr>
                                            <td style="min-width:100%" valign="top"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding-left:48px;padding-right:48px;padding-top:24px" class="" valign="top">
                                      <div class="" style="font-size:16px;text-align:center;width:100%">
                                        <h1 class="">Hi,
                                          ${data.name} !
                                        </h1>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding-left:48px;padding-right:48px;padding-top:24px" class="" valign="top">
                                      <div class="" style="font-size:16px;text-align:center;width:100%">
                                        <p>Thanks to connect with us. We're glad you're here and shown interest in ${enqMessage}. </p>
                                        <p class=""> CBB team will contact with you on ${data.mobile} for the same.</p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding-top:24px" class="" valign="top">
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent;border-top:20px solid transparent;margin-bottom:0;margin-top:0">
                                        <tbody>
                                          <tr>
                                            <td style="min-width:100%" valign="top"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding-top:24px" class="" valign="top">
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top">
                                              <table border="0" cellpadding="0" cellspacing="24" width="100%" style="table-layout:fixed">
                                                <colgroup>
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                </colgroup>
                                                <tbody>
                                                  <tr>
                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover" class="" valign="top" colspan="12" width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                          <tr>
                                                            <td class="" align="center" valign="top">
                                                              <table border="0" cellpadding="0" cellspacing="0" width="" class="">
                                                                <tbody>
                                                                  <tr>
                                                                    <td style="padding-left:24px;padding-top:24px;padding-right:24px" valign="top" class=""><a href="https://www.facebook.com/groups/492158155084974" style="display:inline-block" target="_blank" data-saferedirecturl=""><img width="44" style="border:0;width:44px;height:auto;max-width:100%" alt="Facebook icon" src="http://crossbusinessboundary.com/facebook.svg" class=""></a></td>
                                                                    <td style="padding-left:24px;padding-top:24px;padding-right:24px" valign="top" class=""><a href="https://www.instagram.com/manishbskumar/" style="display:inline-block" target="_blank" data-saferedirecturl=""><img width="44" style="border:0;width:44px;height:auto;max-width:100%" alt="Instagram icon" src="http://crossbusinessboundary.com/instagram.svg" class=""></a></td>
                                                                    <td style="padding-left:24px;padding-top:24px;padding-right:24px" valign="top" class=""><a href="https://twitter.com/MANISHK83783468" style="display:inline-block" target="_blank" data-saferedirecturl=""><img width="44" style="border:0;width:44px;height:auto;max-width:100%" alt="Twitter icon" src="http://crossbusinessboundary.com/x.svg" class=""></a></td>
                                                                    <td style="padding-left:24px;padding-top:24px;padding-right:24px" valign="top" class=""><a href="https://www.youtube.com/user/peanutsmanish" style="display:inline-block" target="_blank" data-saferedirecturl=""><img width="44" style="width:44px;height:auto;max-width:100%" alt="YouTube icon" src="http://crossbusinessboundary.com/youtube.svg" class=""></a></td>
                                                                    <td style="padding-left:24px;padding-top:24px;padding-right:24px" valign="top" class=""><a href="https://www.linkedin.com/in/manish-kumar-sinha-india-no-s-1-cash-rich-business-coach-82678323/" style="display:inline-block" target="_blank" data-saferedirecturl=""><img width="44" style="width:44px;height:auto;max-width:100%" alt="LinkedIn icon" src="http://crossbusinessboundary.com/linkedin.svg" class=""></a></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding-top:24px" class="" valign="top">
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td style="background-color:transparent;background-position:center;background-repeat:no-repeat;background-size:cover" valign="top">
                                              <table border="0" cellpadding="0" cellspacing="24" width="100%" style="table-layout:fixed">
                                                <colgroup>
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                  <col span="1">
                                                </colgroup>
                                                <tbody>
                                                  <tr>
                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover" class="" valign="top" colspan="12" width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                          <tr>
                                                            <td class="" align="center" valign="top">
                                                              <div class="" style="font-size:12px;text-align:center;display:inline-block;width:100%">
                                                                <p><em>Copyright (C) 2021 Cross Business Boundary. All rights reserved.</em></p>
                                                                <p>
                                                                    You are receiving this email because you opted in via our website.
                                                                </p>
                                                                <div>
                                                                  <span>Cross Business Boundary</span>
                                                                  <div>
                                                                    <div>124 India Gate Circle</div>
                                                                    <span>New Delhi</span> <span>110001</span> 
                                                                    <div>India</div>
                                                                  </div>
                                                                  <br>
                                                                </div>
                                                              </div>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
      </tbody>
    </table>
  `;

}