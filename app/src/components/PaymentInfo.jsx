import React from "react";
import PaymentCard from "./PaymentCard";

const PaymentInfo = () => {
  return (
    <div className="p-6 m-16 w-2/5">
      <h1 className="font-semibold text-3xl mb-6">Select Payment Method</h1>
      <div className="flex items-center">
        <input type="radio" name="payment" id="promptpay"></input>
        <label for="promptpay">
          <PaymentCard
            imgSrc={
              "https://cdn.discordapp.com/attachments/962280584418304030/1089480929946378270/unnamed.png"
            }
          />
        </label>
      </div>
      <div className="flex items-center">
        <input type="radio" name="payment" id="mastercard"></input>
        <label for="mastercard">
          <PaymentCard
            imgSrc={
              "https://logowik.com/content/uploads/images/908_mastercard.jpg"
            }
          />
        </label>
      </div>
      <div className="flex items-center">
        <input type="radio" name="payment" id="visa"></input>
        <label for="visa">
          <PaymentCard
            imgSrc={
              "https://logowik.com/content/uploads/images/verified-by-visa6450.jpg"
            }
          />
        </label>
      </div>
    </div>
  );
};

export default PaymentInfo;
