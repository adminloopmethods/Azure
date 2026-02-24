import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_k1zvd0m";
const TEMPLATE_ID = "template_8xb5z27";
const PUBLIC_KEY = "vDjUfIHHlUeLop0Wp";

/**
 * Reusable email sender
 * @param {Object} payload - dynamic template params
 * @returns Promise
 */
export const sendEmail = async (payload) => {
    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            payload,
            { publicKey: PUBLIC_KEY }
        );

        return { success: true, response };
    } catch (error) {
        console.error("EMAILJS ERROR:", error);
        return { success: false, error };
    }
};