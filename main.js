
// main.js - إرسال بريد إلكتروني عند تحقق تنبيه سعري باستخدام EmailJS
import emailjs from "@emailjs/browser";

export function sendPriceAlertEmail({ name, coin_name, target_price, current_price }) {
  const now = new Date();
  const time = now.toLocaleString("ar-EG", {
    hour: "numeric", minute: "numeric", hour12: true,
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const templateParams = {
    name,
    coin_name,
    target_price,
    current_price,
    time,
  };

  emailjs.send(
    "service_qknie0q",
    "price_alert_template",
    templateParams,
    "DhfH7pOskRQ1XEES-"
  ).then((res) => {
    console.log("تم إرسال الإشعار بالبريد:", res.status);
  }).catch((err) => {
    console.error("فشل في الإرسال:", err);
  });
}
