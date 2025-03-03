import Image from "next/image";
import { Phone, SquarePlay, CircleCheckBig, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import ModeToggle from "@/components/theme/theme-toggle";

import { EnquiryForm } from "@/components/forms/enquiry-form";
import { YoutubeModal } from "@/components/modal/youtube-modal";
import { TestimonialsCard } from "@/components/testimonials-card";
// import { TestimonialsCarousel } from "@/components/testimonials-carousel";

export default function Home() {

  return (
    <div className="grid items-center bg-gray-950 dark:bg-white font-[family-name:var(--font-geist-sans)]">

      <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950" data-id="3">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-2" data-id="4">
          <a data-id="5" className="flex items-center gap-2" href="#">
            <Image className="bg-white" src="/cross_business_boundary_logo.svg" alt="Cross Business Boundary Logo" width={140} height={70} priority />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex" data-id="6">
            <a data-id="7" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#sec-video">Video</a>
            <a data-id="8" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#sec-courses">Courses</a>
            <a data-id="9" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#sec-webinar">Webinar</a>
            <a data-id="10" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#sec-about-me">About Me</a>
          </nav>
          <div className="flex place-content-center gap-4" data-id="11">
            <div>
              <a className="flex text-gray-500 dark:text-gray-400 text-xs" data-id="14" href="tel:+91 9910209303">
                <Phone size={18} /> +91 9910209303
              </a>
              <a className="flex mt-2 text-xs" href="https://www.youtube.com/user/peanutsmanish" target="_blank">
                <SquarePlay color="#FF0000" size={18} /> Youtube
              </a>
            </div>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center bg-gray-950 dark:bg-white text-gray-400 dark:text-gray-500">
        <div className="container mx-auto flex flex-wrap items-center justify-items-center">
          <div className="h-full p-4 lg:w-1/3 flex flex-wrap items-center justify-items-center"> 
            <Image src="/Manish-kumars.png" alt="Manish Kumar Sinha" width={408} height={537} layout="responsive" />
          </div>
          <div className="h-full p-4 items-center justify-items-center lg:w-2/3">
            <div className="mt-2 lg:mt-16 text-center">
              <h1 className="text-4xl lg:text-6xl font-medium text-purple-400 underline-effect-green">Manish Kumar Sinha</h1>
            </div>
            <div className="mt-2 lg:mt-4">
              <div className="text-1xl lg:text-4xl font-medium">Success Planner</div>
            </div>
            <div className="w-full h-px max-w-6xl mx-auto py-1 my-4" style={{backgroundImage: "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)"}} />
            <div className="mt-2 lg:mt-4">
              <div className="text-xl lg:text-2xl font-medium">Find Mantra of having CASH RICH BUSINESS</div>
            </div>
            <EnquiryForm enquiryType="SuccessPlanner" />
          </div>
        </div>
        <div id="sec-video" className="w-full mx-auto flex flex-wrap py-4 items-center justify-items-center bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400">
          <div className="flex justify-center w-screen items-center h-full items-center justify-items-center">
            <h1 className="text-4xl lg:text-6xl font-medium underline-effect-purple">Video</h1>
          </div>
          <div className="grid grid-cols-9 gap-8 w-full p-8">
            <div className="col-span-12 md:col-span-3 bg-teal-400">
              <YoutubeModal youtubeId="ocxVWn9hWe4" />
            </div>
            <div className="col-span-12 md:col-span-3 bg-teal-400">
              <YoutubeModal youtubeId="SW4Bqk0LPdc" />
            </div>
            <div className="col-span-12 md:col-span-3 bg-teal-400">
              <YoutubeModal youtubeId="Vb2Iiv_U_KU" />
            </div>
          </div>
        </div>
        <div id="sec-courses" className="w-full flex flex-col py-4 row-start-2 items-center justify-items-center">
          <div className="flex justify-center items-center items-center justify-items-center xxmy-4">
            <h1 className="text-4xl lg:text-6xl font-medium underline-effect-purple">Courses</h1>
          </div>
          <div className="container mx-auto flex flex-wrap my-4">
            <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400">
              <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center">
                <div className="w-full flex justify-center items-center items-center justify-items-center my-4">
                  <h1 className="text-2xl lg:text-4xl font-medium underline-effect-purple">CRB - CASH RICH BUSINESS WORKSHOP</h1>
                </div>
              </div>
              <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center">
                <div className="h-full p-4 lg:w-1/2 flex flex-col items-center justify-items-center"> 
                  <Image src="/cashrich_company.png" alt="Cash Rich Company Venture" width={400} height={337} layout="responsive" />
                </div>
                <div className="h-full p-4 items-center justify-items-center lg:w-1/2">
                  <div className="align-items-center justify-content-center course-content-inner">
                    <p> Having cash rich business is initial steps toward creating business empire. Cash rich company should have surplus fund for one year to survive. Any business cannot achieve status of cash rich business if business is working on concept of money rotation or low margin of profit.</p>
                    <br />
                    <strong>95% Business does not achieve status of cash rich business due to</strong>
                    <ul className="list-disc pl-8">
                      <li>Fund Rotation in wrong direction (Long tern fund is used for short term or vice versa)</li>
                      <li>Not follow financial discipline</li>
                      <li>Ignorance of statutory compliance and</li>
                      <li>Heavy debtors in balance sheet.</li>
                    </ul>
                    <br />
                    <p>No business can survive for longer period or in recession/ slowdown cycle of business without implementation of cash rich business concept.</p>
                    <br />
                    <strong>We provide guidance and consultancy to convert your existing business into CRB (Cash Rich Business)</strong>
                    <ul className="list-disc pl-8">
                      <li>How to Increase Revenue</li>
                      <li>How to Optimize all Resource    </li>
                      <li>How to Manage Debtors</li>
                      <li>How to Maximize Profit.</li>
                      <li>How to Save Outflow of Money to Comply Statutory Compliance on Time</li>
                      <li>How to Create Business, Marketing and Sales Policy.</li>
                    </ul>
                  </div>
                </div>
                <Separator />
                <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center py-4">
                  <div className="w-full flex justify-center items-center items-center justify-items-center">
                    <h4 className="text-xl lg:text-2xl font-medium">Book Free 30 Minutes session to understand CRB Concept</h4>
                  </div>
                  <div className="w-full flex justify-center items-center items-center justify-items-center">
                    <EnquiryForm  enquiryType="CRB" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col py-4 row-start-2 items-center justify-items-center">
          {/* <div className="flex justify-center items-center items-center justify-items-center xxmy-4">
            <h1 className="text-4xl lg:text-6xl font-medium underline-effect-purple">Courses</h1>
          </div> */}
          <div className="container mx-auto flex flex-wrap my-4">
            <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400">
              <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center">
                <div className="w-full flex justify-center items-center items-center justify-items-center my-4">
                  <h1 className="text-2xl lg:text-4xl font-medium underline-effect-purple">BSP - BUSINESS SUCCESSION PLANNING</h1>
                </div>
              </div>
              <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center">
                <div className="h-full p-4 items-center justify-items-center lg:w-1/2">
                  <div className="align-items-center justify-content-center course-content-inner">
                    <p>Family and business dispute is very common. We face defamation of family reputation in society and business crises due to such dispute.</p>
                    <strong>Business and Family Dispute arises in</strong>
                    <ul className="list-disc pl-8">
                      <li>Absence of Written Agreement Between Owners</li>
                      <li>Absence of Business Goal</li>
                      <li>Absence of Authority and Delegation between Stakeholder.</li>
                    </ul>
                    <p>Business is started with motive to create massive wealth and business empire. Creation of business empire with massive wealth is long term process. 90% business ends in second generation due to absence of BSP (Business Succession Planning).  Business houses can avoid family and business dispute and enjoy business legacy like Tata Group, Aditya Birla Group, and Reliance Group etc.</p>
                    <strong>BSP workshop provides roadmap for successful legacy business</strong>
                    <ul className="list-disc pl-8">
                      <li>Learn how to plan legacy</li>
                      <li>Learn to identify best time to transfer of ownership.</li>
                      <li>Learn how to create other business vertical</li>
                      <li>Learn tips how to avoid family and business dispute.</li>
                    </ul>
                  </div>
                </div>
                <div className="h-full p-4 lg:w-1/2 flex flex-col items-center justify-items-center"> 
                  <Image src="/succession_planning_and_will.png" alt="Cash Rich Company Venture" width={408} height={537} layout="responsive" />
                </div>
                <Separator />
                <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center py-4">
                  <div className="w-full flex justify-center items-center items-center justify-items-center">
                    <h4 className="text-xl lg:text-2xl font-medium">Book Free 30 Minutes session to understand BSP process</h4>
                  </div>
                  <div className="w-full flex justify-center items-center items-center justify-items-center">
                    <EnquiryForm  enquiryType="BSP" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sec-webinar" className="w-full flex flex-col py-4 row-start-2 items-center justify-items-center">
          <div className="flex justify-center items-center items-center justify-items-center xxmy-4">
            <h1 className="text-4xl lg:text-6xl font-medium underline-effect-purple">Webinar</h1>
          </div>
          <div className="container mx-auto flex flex-wrap my-4">
            <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400">
              <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center">
                <div className="w-full flex justify-center items-center items-center justify-items-center my-4">
                  <h1 className="text-2xl lg:text-4xl font-medium underline-effect-purple">Register For Succession Planning Webinar</h1>
                </div>
              </div>
              <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center">
                <div className="h-full p-4 lg:w-1/2 flex flex-col items-center justify-items-center"> 
                  <iframe src="https://www.youtube.com/embed/_8stA7nU8ec?autoplay=0&controls=0&rel=1" allowFullScreen width={560} height={315}/>
                </div>
                <div className="h-full p-4 items-center justify-items-center lg:w-1/2">
                  <div className="align-items-center justify-content-center course-content-inner">
                    <p className="text-xl"><strong>If you are struggling with</strong></p>
                    <div className="flex"><CircleCheckBig color="red"/>&nbsp;&nbsp;Ownership confict in business</div>
                    <div className="flex"><CircleCheckBig color="red"/>&nbsp;&nbsp;Legal harrashment to retain property title</div>
                    <div className="flex"><CircleCheckBig color="red"/>&nbsp;&nbsp;Family dispute for inheritance property</div>
                    <br />
                    <div className="text-red-400 font-medium" >Yes, I am facing ownership dispute </div>
                    <br />
                    <div className="flex grid text-center items-center justify-items-center">
                      <div className="w-2/3">
                        <a href="https://us02web.zoom.us/meeting/register/tZctcuqtrjIrGNIR_auzygWY9VY0TOFXKLQ4" target="_blank">
                          <button className="bg-green-600 text-white rounded-lg cursor-pointer">
                            <div> <strong>Yes I&apos;am ready</strong> </div>
                            <div>Claim your ₹999 value 90 minutes sucession planing webinar for FREE</div>
                            <div><strong>Join</strong></div>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sec-about-me" className="w-full flex flex-col py-4 row-start-2 items-center justify-items-center">
          <div className="flex justify-center items-center items-center justify-items-center xxmy-4">
            <h1 className="text-4xl lg:text-6xl font-medium underline-effect-purple">About Me</h1>
          </div>
          <div className="container mx-auto flex flex-wrap my-4">
            <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400">
              {/* <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center">
                <div className="w-full flex justify-center items-center items-center justify-items-center my-4">
                  <h1 className="text-4xl lg:text-6xl font-medium underline-effect-purple">About Me</h1>
                </div>
              </div> */}
              <div className="flex flex-wrap w-full rounded-lg items-center justify-items-center">
                <div className="h-full p-4 lg:w-1/3 flex flex-col items-center justify-items-center">
                  <Image src="/Manish_2.png" alt="Manish Kumar Sinha" width={408} height={537} layout="responsive" />
                </div>
                <div className="h-full p-4 items-center justify-items-center lg:w-2/3">
                  <div className="align-items-center justify-content-center course-content-inner">
                    <h4 className="text-xl">My Mission</h4>
                    <div>
                      I am on Mission to provide roadmap for your business legacy and reduce family dispute. I have seen various cases of second generation not retaining the same success of business in my last 15 years of professional journey. The business either shuts down or remains in family dispute instead putting focus on core business. This situation has occurred in businesses majorly in absence of effective succession planning.
                      <ul className="list-disc pl-8">
                        <li>Wrong identification of ownership</li>
                        <li>Lack of implementation of succession planning in business</li>
                        <li>Not adopting implementation of various department and vertical of business</li>
                        <li>Lack of business ethic and system automation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl">Impact of Ineffective Business Succession Planning</h4> 
                      Lack of effective business succession planning leads
                      <ul className="list-disc pl-8">
                        <li>All family members struggle to retain ownership</li>
                        <li>Not focus on core business activity</li>
                        <li>Increase business and family dispute among family members</li>
                        <li>Heavy legal expenditure in court</li>
                        <li>Damage of family reputation in society</li>
                        <li>Difficult to operate Bank, Statutory compliance, loan institution and business creditors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col py-4 row-start-2 items-center justify-items-center">
          <div className="flex justify-center items-center items-center justify-items-center my-4">
            <h1 className="text-4xl lg:text-6xl font-medium underline-effect-purple">Testimonials</h1>
          </div>
            <TestimonialsCard />
        </div>
      </main>

      <footer className="relative pt-8 pb-6 bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <Image className="bg-white" src="/cross_business_boundary_logo.svg" alt="Cross Business Boundary Logo" width={140} height={70} priority />
              {/* <h4 className="text-3xl fonat-semibold">Cross Business Boundary</h4> */}
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <a className="mr-2" href="button"> <Image className="bg-white" src="/x.svg" alt="x" width={24} height={24} /> </a>
                <a className="mr-2" href="button"> <Image className="" src="/facebook.svg" alt="x" width={24} height={24} /> </a>
                <a className="mr-2" href="button"> <Image className="" src="/instagram.svg" alt="x" width={24} height={24} /> </a>
                <a className="mr-2" href="button"> <Image className="" src="/linkedin.svg" alt="x" width={24} height={24} /> </a>
                <a className="mr-2" href="button"> <Image className="" src="/youtube.svg" alt="x" width={24} height={24} /> </a>
                <a className="mr-2" href="button"> <Image className="" src="/whatsapp.svg" alt="x" width={24} height={24} /> </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <span className="block uppercase text-sm font-bold mb-2">Policies</span>
                  <ul className="list-unstyled">
                    <li><a className="font-semibold block pb-2 text-sm" href="">Privacy Policy</a></li>
                    <li><a className="font-semibold block pb-2 text-sm" href="">Terms and condition</a></li>
                  </ul>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <span className="block uppercase text-sm font-bold mb-2">Contact Us</span>
                  <ul className="list-unstyled">
                    <li><a className="flex font-semibold block pb-2 text-sm" href="mailto:crossbusinessboundary@gmail.com" > <Mail /> &nbsp;crossbusinessboundary@gmail.com</a></li>
                    <li><a className="flex font-semibold block pb-2 text-sm" href="tel:+91 9910209303"> <Phone /> &nbsp;9910209303</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm font-semibold py-1">
                Copyright © <span id="get-current-year">2025</span> by Cross Business Boundary.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}