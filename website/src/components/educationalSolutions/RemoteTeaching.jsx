"use client";
import * as React from "react";

export function RemoteTeaching() {
  return (
    <div className="mb-20">
      <div className="mt-20 text-6xl font-semibold leading-none text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Remote Teaching With Apple
      </div>
      <div className="mt-12 mb-20 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden h-[300px] flex-col grow px-14 pt-9 pb-32 w-full bg-gray-200 text-zinc-900 max-md:px-5 max-md:pb-24 max-md:mt-5 max-md:max-w-full">
              <div className="self-start text-4xl font-medium leading-none">
                Class Delivery Tool
              </div>
              <div className="mt-8 text-lg font-light leading-7 max-md:max-w-full">
                Host dynamic remote classes with integrated video conferencing,
                screen sharing, live polls, and real-time chat—everything
                accessible in just one click for a seamless teaching experience.
              </div>
            </div>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="overflow-hidden h-[300px] grow px-14 pt-9 pb-16 w-full bg-zinc-900 max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="text-4xl font-medium leading-[50px] text-neutral-100 max-md:mr-2.5 max-md:max-w-full">
                Collaboration & Content
                <br />
                Delivery Tool
              </div>
              <div className="mt-8 text-lg font-light leading-7 text-white max-md:max-w-full">
                Effortlessly manage assignments, monitor student progress, and
                provide personalized feedback—all within a single, easy-to-use
                platform that keeps your class connected and engaged.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden h-[300px] flex-col grow px-14 pt-9 pb-24 w-full bg-gray-200 text-zinc-900 max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="self-start text-4xl font-medium leading-[50px] max-md:max-w-full">
                White-boarding &<br />
                Screen Recording Tool
              </div>
              <div className="mt-8 text-lg font-light leading-7 max-md:max-w-full">
                Simplify teaching with interactive whiteboard apps that let you
                visually explain concepts and record full lessons as MP4 videos,
                ensuring students can revisit them anytime for offline learning.
              </div>
            </div>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden h-[300px] flex-col grow px-14 pt-9 pb-44 w-full bg-gray-200 text-zinc-900 max-md:px-5 max-md:pb-24 max-md:mt-5 max-md:max-w-full">
              <div className="self-start text-4xl font-medium leading-none max-md:max-w-full">
                Content Creation Tool
              </div>
              <div className="mt-8 text-lg font-light leading-7 max-md:max-w-full">
                Design engaging lessons using Apple tools by adding animated
                text, music, stickers, and voiceovers to make learning
                interactive and enjoyable for students.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col items-start px-16 py-16 mt-5 w-full bg-gray-200 max-w-[1240px] text-zinc-900 max-md:px-5 max-md:max-w-full">
        <div className="text-4xl font-medium leading-none">Assessment Tool</div>
        <div className="mt-2.5 text-lg font-light leading-7 max-md:max-w-full">
          Effortlessly conduct real-time assessments through interactive
          quizzes, polls, and exit tickets. Instantly analyze student
          performance with visual progress tracking tools, enabling you to
          tailor your lessons, address learning gaps, and improve engagement—all
          within a single, easy-to-use platform.
        </div>
      </div>
    </div>
  );
}
