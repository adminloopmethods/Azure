import * as React from "react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { TeamCard } from "../../components/TeamCard";
import { Footer } from "../../components/Footer";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sanjeev Sharma",
      title: "Managing director and cofounder",
      svgContent:
        '<svg id="387:350" width="400" height="544" viewBox="0 0 400 544" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="team-card" style="width: 399px; height: 544px"> <rect x="0.5" y="0.5" width="398" height="543" rx="8.9073" fill="#272727" fill-opacity="0.41"></rect> <rect x="0.5" y="0.5" width="398" height="543" rx="8.9073" stroke="url(#paint0_linear_387_350)"></rect> <rect y="0.0625" width="399.973" height="411" rx="9.41" fill="url(#pattern0_387_350)"></rect> <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="19" y="448.91">Sanjeev Sharma</tspan></text> <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="18" font-weight="300" letter-spacing="0em"><tspan x="19" y="480.3">Managing director and cofounder</tspan></text> <path d="M153.578 496H153.516C146.103 496 140.094 502.011 140.094 509.427V509.488C140.094 516.903 146.103 522.915 153.516 522.915H153.578C160.991 522.915 167 516.903 167 509.488V509.427C167 502.011 160.991 496 153.578 496Z" fill="#383D38"></path> <path d="M146.511 504.945C146.157 504.616 145.98 504.209 145.98 503.724C145.98 503.24 146.158 502.814 146.511 502.484C146.866 502.155 147.322 501.99 147.881 501.99C148.44 501.99 148.878 502.155 149.232 502.484C149.586 502.813 149.762 503.227 149.762 503.724C149.762 504.221 149.585 504.616 149.232 504.945C148.877 505.275 148.428 505.44 147.881 505.44C147.334 505.44 146.866 505.275 146.511 504.945ZM149.465 506.833V516.923H146.277V506.833H149.465Z" fill="#FEFFFC"></path> <path d="M160.075 507.83C160.769 508.584 161.116 509.619 161.116 510.938V516.744H158.089V511.347C158.089 510.682 157.917 510.165 157.573 509.798C157.229 509.43 156.765 509.245 156.184 509.245C155.604 509.245 155.14 509.429 154.796 509.798C154.452 510.165 154.279 510.682 154.279 511.347V516.744H151.234V506.805H154.279V508.123C154.587 507.684 155.003 507.337 155.525 507.081C156.048 506.826 156.635 506.698 157.288 506.698C158.451 506.698 159.381 507.075 160.075 507.829V507.83Z" fill="#FEFFFC"></path> <path d="M72.8492 496H72.7879C65.3748 496 59.3652 502.011 59.3652 509.427V509.488C59.3652 516.903 65.3748 522.915 72.7879 522.915H72.8492C80.2623 522.915 86.2718 516.903 86.2718 509.488V509.427C86.2718 502.011 80.2623 496 72.8492 496Z" fill="#383D38"></path> <path d="M76.9813 501.476H68.6557C66.3556 501.476 64.4844 503.347 64.4844 505.648V513.267C64.4844 515.568 66.3556 517.44 68.6557 517.44H76.9813C79.2815 517.44 81.1526 515.568 81.1526 513.267V505.648C81.1526 503.347 79.2815 501.476 76.9813 501.476ZM65.9559 505.648C65.9559 504.159 67.1672 502.948 68.6557 502.948H76.9813C78.4698 502.948 79.6811 504.159 79.6811 505.648V513.267C79.6811 514.756 78.4698 515.968 76.9813 515.968H68.6557C67.1672 515.968 65.9559 514.756 65.9559 513.267V505.648Z" fill="white"></path> <path d="M72.8175 513.338C74.9564 513.338 76.6976 511.597 76.6976 509.456C76.6976 507.316 74.9574 505.575 72.8175 505.575C70.6777 505.575 68.9375 507.316 68.9375 509.456C68.9375 511.597 70.6777 513.338 72.8175 513.338ZM72.8175 507.048C74.1458 507.048 75.226 508.129 75.226 509.457C75.226 510.786 74.1458 511.867 72.8175 511.867C71.4893 511.867 70.409 510.786 70.409 509.457C70.409 508.129 71.4893 507.048 72.8175 507.048Z" fill="white"></path> <path d="M77.0571 506.203C77.6331 506.203 78.1026 505.734 78.1026 505.157C78.1026 504.58 77.634 504.111 77.0571 504.111C76.4802 504.111 76.0117 504.58 76.0117 505.157C76.0117 505.734 76.4802 506.203 77.0571 506.203Z" fill="white"></path> <path d="M45.9057 509.458C45.9057 516.254 40.869 521.874 34.3259 522.785C33.7141 522.87 33.0882 522.915 32.4528 522.915C31.7194 522.915 30.9992 522.856 30.2979 522.743C23.8925 521.711 19 516.155 19 509.458C19 502.025 25.0237 496 32.4538 496C39.8839 496 45.9075 502.025 45.9075 509.458H45.9057Z" fill="#383D38"></path> <path d="M34.3267 506.807V509.738H37.9523L37.3782 513.687H34.3267V522.786C33.715 522.871 33.089 522.915 32.4537 522.915C31.7203 522.915 31.0001 522.856 30.2987 522.743V513.687H26.9551V509.738H30.2987V506.151C30.2987 503.926 32.1021 502.121 34.3277 502.121V502.123C34.3343 502.123 34.3399 502.121 34.3465 502.121H37.9532V505.536H35.5965C34.8961 505.536 34.3277 506.105 34.3277 506.806L34.3267 506.807Z" fill="white"></path> <path d="M126.634 509.458C126.634 516.254 121.597 521.874 115.054 522.785C114.443 522.87 113.817 522.915 113.181 522.915C112.448 522.915 111.728 522.856 111.026 522.743C104.621 521.711 99.7285 516.155 99.7285 509.458C99.7285 502.025 105.752 496 113.182 496C120.612 496 126.636 502.025 126.636 509.458H126.634Z" fill="#383D38"></path> <path d="M105.185 501.936L111.39 510.233L105.146 516.98H106.552L112.019 511.074L116.435 516.98H121.217L114.664 508.216L120.475 501.936H119.07L114.036 507.375L109.968 501.936H105.186H105.185ZM107.251 502.971H109.448L119.149 515.945H116.952L107.251 502.971Z" fill="white"></path> <defs> <pattern id="pattern0_387_350" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_387_350" transform="matrix(0.00357143 0 0 0.00347561 0 -0.000487805)"></use> </pattern> <linearGradient id="paint0_linear_387_350" x1="199.5" y1="0" x2="199.5" y2="544" gradientUnits="userSpaceOnUse"> <stop offset="0.633628"></stop> <stop offset="1" stop-color="#2F2F2F"></stop> </linearGradient> </defs> </svg>',
    },
    {
      name: "Jaj Padmakaran",
      title: "Technical and Support Services Director",
      svgContent:
        '<svg id="387:396" width="401" height="545" viewBox="0 0 401 545" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="team-card" style="width: 399px; height: 544px"> <rect x="0.5" y="1.5" width="398" height="543" rx="8.9073" fill="#272727" fill-opacity="0.41"></rect> <rect x="0.5" y="1.5" width="398" height="543" rx="8.9073" stroke="url(#paint0_linear_387_396)"></rect> <rect y="0.0625" width="400.556" height="412" rx="9.41" fill="url(#pattern0_387_396)"></rect> <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="19" y="449.91">Jaj Padmakaran</tspan></text> <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="18" font-weight="300" letter-spacing="0em"><tspan x="19" y="481.3">Technical and Support Services Director</tspan></text> <path d="M153.578 497H153.516C146.103 497 140.094 503.011 140.094 510.427V510.488C140.094 517.903 146.103 523.915 153.516 523.915H153.578C160.991 523.915 167 517.903 167 510.488V510.427C167 503.011 160.991 497 153.578 497Z" fill="#383D38"></path> <path d="M146.511 505.945C146.157 505.616 145.98 505.209 145.98 504.724C145.98 504.24 146.158 503.814 146.511 503.484C146.866 503.155 147.322 502.99 147.881 502.99C148.44 502.99 148.878 503.155 149.232 503.484C149.586 503.813 149.762 504.227 149.762 504.724C149.762 505.221 149.585 505.616 149.232 505.945C148.877 506.275 148.428 506.44 147.881 506.44C147.334 506.44 146.866 506.275 146.511 505.945ZM149.465 507.833V517.923H146.277V507.833H149.465Z" fill="#FEFFFC"></path> <path d="M160.075 508.83C160.769 509.584 161.116 510.619 161.116 511.938V517.744H158.089V512.347C158.089 511.682 157.917 511.165 157.573 510.798C157.229 510.43 156.765 510.245 156.184 510.245C155.604 510.245 155.14 510.429 154.796 510.798C154.452 511.165 154.279 511.682 154.279 512.347V517.744H151.234V507.805H154.279V509.123C154.587 508.684 155.003 508.337 155.525 508.081C156.048 507.826 156.635 507.698 157.288 507.698C158.451 507.698 159.381 508.075 160.075 508.829V508.83Z" fill="#FEFFFC"></path> <path d="M72.8492 497H72.7879C65.3748 497 59.3652 503.011 59.3652 510.427V510.488C59.3652 517.903 65.3748 523.915 72.7879 523.915H72.8492C80.2623 523.915 86.2718 517.903 86.2718 510.488V510.427C86.2718 503.011 80.2623 497 72.8492 497Z" fill="#383D38"></path> <path d="M76.9813 502.476H68.6557C66.3556 502.476 64.4844 504.347 64.4844 506.648V514.267C64.4844 516.568 66.3556 518.44 68.6557 518.44H76.9813C79.2815 518.44 81.1526 516.568 81.1526 514.267V506.648C81.1526 504.347 79.2815 502.476 76.9813 502.476ZM65.9559 506.648C65.9559 505.159 67.1672 503.948 68.6557 503.948H76.9813C78.4698 503.948 79.6811 505.159 79.6811 506.648V514.267C79.6811 515.756 78.4698 516.968 76.9813 516.968H68.6557C67.1672 516.968 65.9559 515.756 65.9559 514.267V506.648Z" fill="white"></path> <path d="M72.8175 514.338C74.9564 514.338 76.6976 512.597 76.6976 510.456C76.6976 508.316 74.9574 506.575 72.8175 506.575C70.6777 506.575 68.9375 508.316 68.9375 510.456C68.9375 512.597 70.6777 514.338 72.8175 514.338ZM72.8175 508.048C74.1458 508.048 75.226 509.129 75.226 510.457C75.226 511.786 74.1458 512.867 72.8175 512.867C71.4893 512.867 70.409 511.786 70.409 510.457C70.409 509.129 71.4893 508.048 72.8175 508.048Z" fill="white"></path> <path d="M77.0571 507.203C77.6331 507.203 78.1026 506.734 78.1026 506.157C78.1026 505.58 77.634 505.111 77.0571 505.111C76.4802 505.111 76.0117 505.58 76.0117 506.157C76.0117 506.734 76.4802 507.203 77.0571 507.203Z" fill="white"></path> <path d="M45.9057 510.458C45.9057 517.254 40.869 522.874 34.3259 523.785C33.7141 523.87 33.0882 523.915 32.4528 523.915C31.7194 523.915 30.9992 523.856 30.2979 523.743C23.8925 522.711 19 517.155 19 510.458C19 503.025 25.0237 497 32.4538 497C39.8839 497 45.9075 503.025 45.9075 510.458H45.9057Z" fill="#383D38"></path> <path d="M34.3267 507.807V510.738H37.9523L37.3782 514.687H34.3267V523.786C33.715 523.871 33.089 523.915 32.4537 523.915C31.7203 523.915 31.0001 523.856 30.2987 523.743V514.687H26.9551V510.738H30.2987V507.151C30.2987 504.926 32.1021 503.121 34.3277 503.121V503.123C34.3343 503.123 34.3399 503.121 34.3465 503.121H37.9532V506.536H35.5965C34.8961 506.536 34.3277 507.105 34.3277 507.806L34.3267 507.807Z" fill="white"></path> <path d="M126.634 510.458C126.634 517.254 121.597 522.874 115.054 523.785C114.443 523.87 113.817 523.915 113.181 523.915C112.448 523.915 111.728 523.856 111.026 523.743C104.621 522.711 99.7285 517.155 99.7285 510.458C99.7285 503.025 105.752 497 113.182 497C120.612 497 126.636 503.025 126.636 510.458H126.634Z" fill="#383D38"></path> <path d="M105.185 502.936L111.39 511.233L105.146 517.98H106.552L112.019 512.074L116.435 517.98H121.217L114.664 509.216L120.475 502.936H119.07L114.036 508.375L109.968 502.936H105.186H105.185ZM107.251 503.971H109.448L119.149 516.945H116.952L107.251 503.971Z" fill="white"></path> <defs> <pattern id="pattern0_387_396" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_387_396" transform="scale(0.00357143 0.00347222)"></use> </pattern> <linearGradient id="paint0_linear_387_396" x1="199.5" y1="1" x2="199.5" y2="545" gradientUnits="userSpaceOnUse"> <stop offset="0.63"></stop> <stop offset="1" stop-color="#2F2F2F"></stop> </linearGradient> </defs> </svg>',
    },
    {
      name: "Parag Kohli",
      title: "Pre Sales Head",
      svgContent:
        '<svg id="387:373" width="401" height="545" viewBox="0 0 401 545" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="team-card" style="width: 399px; height: 544px"> <rect x="0.5" y="1.5" width="398" height="543" rx="8.9073" fill="#272727" fill-opacity="0.41"></rect> <rect x="0.5" y="1.5" width="398" height="543" rx="8.9073" stroke="url(#paint0_linear_387_373)"></rect> <rect y="0.0625" width="400.556" height="412" rx="9.41" fill="url(#pattern0_387_373)"></rect> <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="19" y="449.91">Parag Kohli</tspan></text> <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="18" font-weight="300" letter-spacing="0em"><tspan x="19" y="481.3">Pre Sales Head</tspan></text> <path d="M153.578 497H153.516C146.103 497 140.094 503.011 140.094 510.427V510.488C140.094 517.903 146.103 523.915 153.516 523.915H153.578C160.991 523.915 167 517.903 167 510.488V510.427C167 503.011 160.991 497 153.578 497Z" fill="#383D38"></path> <path d="M146.511 505.945C146.157 505.616 145.98 505.209 145.98 504.724C145.98 504.24 146.158 503.814 146.511 503.484C146.866 503.155 147.322 502.99 147.881 502.99C148.44 502.99 148.878 503.155 149.232 503.484C149.586 503.813 149.762 504.227 149.762 504.724C149.762 505.221 149.585 505.616 149.232 505.945C148.877 506.275 148.428 506.44 147.881 506.44C147.334 506.44 146.866 506.275 146.511 505.945ZM149.465 507.833V517.923H146.277V507.833H149.465Z" fill="#FEFFFC"></path> <path d="M160.075 508.83C160.769 509.584 161.116 510.619 161.116 511.938V517.744H158.089V512.347C158.089 511.682 157.917 511.165 157.573 510.798C157.229 510.43 156.765 510.245 156.184 510.245C155.604 510.245 155.14 510.429 154.796 510.798C154.452 511.165 154.279 511.682 154.279 512.347V517.744H151.234V507.805H154.279V509.123C154.587 508.684 155.003 508.337 155.525 508.081C156.048 507.826 156.635 507.698 157.288 507.698C158.451 507.698 159.381 508.075 160.075 508.829V508.83Z" fill="#FEFFFC"></path> <path d="M72.8492 497H72.7879C65.3748 497 59.3652 503.011 59.3652 510.427V510.488C59.3652 517.903 65.3748 523.915 72.7879 523.915H72.8492C80.2623 523.915 86.2718 517.903 86.2718 510.488V510.427C86.2718 503.011 80.2623 497 72.8492 497Z" fill="#383D38"></path> <path d="M76.9813 502.476H68.6557C66.3556 502.476 64.4844 504.347 64.4844 506.648V514.267C64.4844 516.568 66.3556 518.44 68.6557 518.44H76.9813C79.2815 518.44 81.1526 516.568 81.1526 514.267V506.648C81.1526 504.347 79.2815 502.476 76.9813 502.476ZM65.9559 506.648C65.9559 505.159 67.1672 503.948 68.6557 503.948H76.9813C78.4698 503.948 79.6811 505.159 79.6811 506.648V514.267C79.6811 515.756 78.4698 516.968 76.9813 516.968H68.6557C67.1672 516.968 65.9559 515.756 65.9559 514.267V506.648Z" fill="white"></path> <path d="M72.8175 514.338C74.9564 514.338 76.6976 512.597 76.6976 510.456C76.6976 508.316 74.9574 506.575 72.8175 506.575C70.6777 506.575 68.9375 508.316 68.9375 510.456C68.9375 512.597 70.6777 514.338 72.8175 514.338ZM72.8175 508.048C74.1458 508.048 75.226 509.129 75.226 510.457C75.226 511.786 74.1458 512.867 72.8175 512.867C71.4893 512.867 70.409 511.786 70.409 510.457C70.409 509.129 71.4893 508.048 72.8175 508.048Z" fill="white"></path> <path d="M77.0571 507.203C77.6331 507.203 78.1026 506.734 78.1026 506.157C78.1026 505.58 77.634 505.111 77.0571 505.111C76.4802 505.111 76.0117 505.58 76.0117 506.157C76.0117 506.734 76.4802 507.203 77.0571 507.203Z" fill="white"></path> <path d="M45.9057 510.458C45.9057 517.254 40.869 522.874 34.3259 523.785C33.7141 523.87 33.0882 523.915 32.4528 523.915C31.7194 523.915 30.9992 523.856 30.2979 523.743C23.8925 522.711 19 517.155 19 510.458C19 503.025 25.0237 497 32.4538 497C39.8839 497 45.9075 503.025 45.9075 510.458H45.9057Z" fill="#383D38"></path> <path d="M34.3267 507.807V510.738H37.9523L37.3782 514.687H34.3267V523.786C33.715 523.871 33.089 523.915 32.4537 523.915C31.7203 523.915 31.0001 523.856 30.2987 523.743V514.687H26.9551V510.738H30.2987V507.151C30.2987 504.926 32.1021 503.121 34.3277 503.121V503.123C34.3343 503.123 34.3399 503.121 34.3465 503.121H37.9532V506.536H35.5965C34.8961 506.536 34.3277 507.105 34.3277 507.806L34.3267 507.807Z" fill="white"></path> <path d="M126.634 510.458C126.634 517.254 121.597 522.874 115.054 523.785C114.443 523.87 113.817 523.915 113.181 523.915C112.448 523.915 111.728 523.856 111.026 523.743C104.621 522.711 99.7285 517.155 99.7285 510.458C99.7285 503.025 105.752 497 113.182 497C120.612 497 126.636 503.025 126.636 510.458H126.634Z" fill="#383D38"></path> <path d="M105.185 502.936L111.39 511.233L105.146 517.98H106.552L112.019 512.074L116.435 517.98H121.217L114.664 509.216L120.475 502.936H119.07L114.036 508.375L109.968 502.936H105.186H105.185ZM107.251 503.971H109.448L119.149 516.945H116.952L107.251 503.971Z" fill="white"></path> <defs> <pattern id="pattern0_387_373" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_387_373" transform="scale(0.00357143 0.00347222)"></use> </pattern> <linearGradient id="paint0_linear_387_373" x1="199.5" y1="1" x2="199.5" y2="545" gradientUnits="userSpaceOnUse"> <stop offset="0.63"></stop> <stop offset="1" stop-color="#2F2F2F"></stop> </linearGradient> </defs> </svg>',
    },
  ];

  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />

      {/* Main Content Section */}
      <div className="px-24 py-20 max-md:px-12 max-md:py-16 max-sm:px-5 max-sm:py-10">
        <div className="flex gap-11 items-start max-md:flex-col max-md:gap-8 max-sm:gap-5">
          <div className="text-lg font-medium leading-7 text-justify text-black w-[664px] max-md:w-full max-sm:text-base max-sm:leading-6">
            Service Provider for products as well as Apple Corporate partners,
            having head office at Naraina (Delhi) and branch office at Noida,
            Gurgaon. We are also MS Surface Partner. As an organisation we
            believe in teamwork, diversity, innovation and integrity. We're
            driven by professional eminence and always place our customers at
            the centre of anything and everything we do. Azure Innovations
            Corporate Background: Azure Innovations , commencing its operations
            since long. A passionate management team with well experienced
            Engineers and Professional Business Development team makes Azure
            Innovations as a best choice for Apple Solutions. To service,
            service and service was the commitment we gave to our clients. While
            this continues to be the bedrock, today we are well established as a
            Apple Reseller, Service Provider. This has happened only by virtue
            of a clear understanding of the future we were seeking and what it
            takes to achieve that future. So with time and evolving goals came
            more people, more growth and more importantly an insightful
            understanding of Apple technology. Our Customer Support services
            focus on customer satisfaction . The service offerings range from
            fundamental hardware and software Support to out-tasking services.
            Based on the combination of flexible support portfolio, pro-active
            way of working and our focus on the every purchase.
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/95eb0e2f9524f8af6f23bb1c251d150d9a1e9b8c?width=1062"
            alt=""
            className="object-cover rounded-lg h-[689px] w-[531px] max-md:w-full max-md:h-auto"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="px-24 py-3.5 bg-white">
        <div className="flex gap-72 justify-center items-center px-28 py-7 max-md:gap-24 max-md:px-12 max-md:py-7 max-sm:flex-col max-sm:gap-10 max-sm:p-5">
          <div className="text-center">
            <div className="text-6xl font-medium text-black leading-[56px] max-sm:text-5xl">
              20k
            </div>
            <div className="mt-4 text-lg font-light leading-7 text-zinc-900">
              Happy Customers
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-medium text-black leading-[56px] max-sm:text-5xl">
              20+
            </div>
            <div className="mt-4 text-lg font-light leading-7 text-zinc-900">
              Year of Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-medium text-black leading-[56px] max-sm:text-5xl">
              100+
            </div>
            <div className="mt-4 text-lg font-light leading-7 text-zinc-900">
              Clients Served
            </div>
          </div>
        </div>
      </div>

      {/* Vision/Mission Section */}
      <div className="flex px-24 py-0 max-md:flex-col max-md:px-12 max-md:py-0 max-sm:px-5 max-sm:py-0">
        <div className="h-[282px] w-[610px] max-md:w-full">
          <div className="p-12 bg-gray-200 h-[282px] w-[610px] max-sm:px-5 max-sm:py-8">
            <div className="mb-5 text-4xl font-medium leading-[50px] text-zinc-900 max-sm:text-3xl max-sm:leading-10">
              Our Vision
            </div>
            <div className="text-lg font-light leading-7 text-justify text-zinc-900 w-[500px] max-sm:text-base max-sm:leading-6">
              To be a leading technology partner, delivering innovative Apple
              and IT solutions that empower our clients to grow, adapt, and
              succeed in a digital-first world.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-start p-12 bg-zinc-900 h-[282px] w-[610px] max-md:w-full max-sm:px-5 max-sm:py-8">
          <div className="text-4xl font-medium leading-[50px] text-neutral-100 max-sm:text-3xl max-sm:leading-10">
            Our Mission
          </div>
          <div className="text-lg font-light leading-7 text-justify text-white w-[500px] max-sm:text-base max-sm:leading-6">
            To provide authentic Apple products, reliable IT solutions, and
            exceptional customer service through innovation, integrity, and a
            commitment to continuous improvement.
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-24 pt-12 pb-14 bg-black max-md:p-12 max-sm:px-5 max-sm:py-10">
        <div className="mb-12 text-5xl text-white leading-[58px] max-sm:text-4xl max-sm:leading-10">
          Managing Director &amp; Co-Founder
        </div>
        <div className="flex gap-5 justify-between max-md:flex-col max-md:gap-8 max-md:items-center">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              title={member.title}
              svgContent={member.svgContent}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="px-36 py-24 bg-zinc-100 max-md:px-12 max-md:py-16 max-sm:px-5 max-sm:py-10">
        <div className="flex gap-24 justify-between max-md:flex-col max-md:gap-12 max-md:items-center max-sm:gap-10">
          <div className="text-center max-w-[300px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ecda8f319f377123e2a829dabfdc9bec4b231def?width=88"
              alt=""
              className="block mx-auto mt-0 mb-2.5 w-auto h-14"
            />
            <div className="mb-2.5 text-lg font-semibold leading-6 text-zinc-900">
              Fast, free delivery
            </div>
            <div className="text-sm leading-5 text-neutral-500">
              Enjoy quick, free delivery or pick up your order at a nearby Apple
              Store.
            </div>
          </div>
          <div className="text-center max-w-[300px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bec1318e8eabc4a24941bfa7b4542343ae71edac?width=88"
              alt=""
              className="block mx-auto mt-0 mb-2.5 w-auto h-14"
            />
            <div className="mb-2.5 text-lg font-semibold leading-6 text-zinc-900">
              Free and easy returns
            </div>
            <div className="text-sm leading-5 text-neutral-500">
              Return online or at any Apple Store—simple and hassle-free.
            </div>
          </div>
          <div className="text-center max-w-[300px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bde46adeb55329589ff0d8df33ef0e184523cfc1?width=112"
              alt=""
              className="block mx-auto mt-0 mb-2.5 w-auto h-14"
            />
            <div className="mb-2.5 text-lg font-semibold leading-6 text-zinc-900">
              Get 3% Daily Cash back
            </div>
            <div className="text-sm leading-5 text-neutral-500">
              Get 3% back daily when you pay with Apple Card, plus interest-free
              monthly installments.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
