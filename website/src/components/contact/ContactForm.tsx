import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 gap-10 p-16 max-md:p-10 max-sm:p-5">
      <div className="flex gap-10 max-md:flex-col max-md:gap-5">
        <div className="relative flex-1">
          <div className="mb-9 text-sm font-medium leading-5 text-neutral-400">
            First Name
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="406:334" width="278" height="2" viewBox="0 0 278 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="form-underline" style="width: 100%; height: 1px; position: absolute; bottom: 0"> <path d="M0 1H278" stroke="#8D8D8D"></path> </svg>',
              }}
            />
          </div>
        </div>
        <div className="relative flex-1">
          <div className="mb-9 text-sm font-medium leading-5 text-neutral-400">
            Last Name
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="406:340" width="278" height="2" viewBox="0 0 278 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="form-underline" style="width: 100%; height: 1px; position: absolute; bottom: 0"> <path d="M0 1H278" stroke="#8D8D8D"></path> </svg>',
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10 max-md:flex-col max-md:gap-5">
        <div className="relative flex-1">
          <div className="mb-9 text-sm font-medium leading-5 text-neutral-400">
            Email
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="406:337" width="278" height="2" viewBox="0 0 278 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="form-underline" style="width: 100%; height: 1px; position: absolute; bottom: 0"> <path d="M0 1H278" stroke="#8D8D8D"></path> </svg>',
              }}
            />
          </div>
        </div>
        <div className="relative flex-1">
          <div className="mb-9 text-sm font-medium leading-5 text-neutral-400">
            Phone Number
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="406:347" width="278" height="2" viewBox="0 0 278 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="form-underline" style="width: 100%; height: 1px; position: absolute; bottom: 0"> <path d="M0 1H278" stroke="#8D8D8D"></path> </svg>',
              }}
            />
          </div>
        </div>
      </div>
      <div className="relative flex-1 w-full">
        <div className="mb-9 text-sm font-medium leading-5 text-neutral-400">
          Message
        </div>
        <div className="mt-1.5 mb-8 text-xs font-light leading-5 text-neutral-400">
          Write your message..
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="406:343" width="595" height="2" viewBox="0 0 595 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="form-underline" style="width: 100%; height: 1px; position: absolute; bottom: 0"> <path d="M0 1H595" stroke="#8D8D8D"></path> </svg>',
            }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center px-20 py-6 ml-auto bg-black border-black border-solid cursor-pointer border-[1.385px] h-[57px] rounded-[119px] w-[235px] max-md:mx-auto max-md:mt-5 max-md:mb-0 max-sm:mx-0 max-sm:mt-5 max-sm:mb-0 max-sm:w-full">
        <div className="text-xl leading-8 text-center text-white">
          Send Message
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
